import sys
import cv2
import numpy as np
from PyQt5.QtWidgets import (
    QApplication, QMainWindow, QVBoxLayout, QHBoxLayout, QLabel, QPushButton, QTextEdit, QFileDialog, QWidget
)
from PyQt5.QtGui import QPixmap, QImage, QPalette, QBrush, QFont
from PyQt5.QtCore import Qt
from matplotlib.backends.backend_qt5agg import FigureCanvasQTAgg as FigureCanvas
from matplotlib.figure import Figure


class RiceGrainAnalyzer(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Rice Grain Length Detection")
        self.setGeometry(100, 100, 1800, 1000)

        # Path to the default background image
        self.default_background_path = "background1.jpg" 

        # Initialize UI components
        self.initUI()

    def initUI(self):
        # Main layout
        main_layout = QHBoxLayout()

        # Left panel for controls
        left_panel = QVBoxLayout()
        self.upload_button = QPushButton("Choose File")
        self.upload_button.clicked.connect(self.process_image)
        self.results_text = QTextEdit()
        self.results_text.setReadOnly(True)
        left_panel.addWidget(self.upload_button)
        left_panel.addWidget(self.results_text)

        # Right panel for image display
        right_panel = QVBoxLayout()
        self.figure = Figure()
        self.canvas = FigureCanvas(self.figure)
        right_panel.addWidget(self.canvas)

        # Add initial background to the canvas
        self.set_initial_background()

        # Combine layouts
        container_layout = QVBoxLayout()
        container_layout.addLayout(main_layout)

        main_layout.addLayout(left_panel, 2)
        main_layout.addLayout(right_panel, 5)

        # Set central widget
        container = QWidget()
        container.setLayout(container_layout)
        self.setCentralWidget(container)

    def set_initial_background(self):
        # Display the background image on the canvas
        self.figure.clear()
        ax = self.figure.add_subplot(111)
        background_image = cv2.imread(self.default_background_path)
        if background_image is not None:
            # 800600
            background_image = cv2.resize(background_image, (900,600))
            background_image = cv2.cvtColor(background_image, cv2.COLOR_BGR2RGB)
            ax.imshow(background_image)
            ax.axis('off')  # Hide axes for the background
        else:
            ax.text(0.5, 0.5, "Background image not found.", fontsize=20, ha='center', va='center')
            ax.axis('off')
        self.canvas.draw()



    def process_image(self):
        # Clear previous data
        self.results_text.clear()
        self.figure.clear()
        self.canvas.draw()

        # Get file path from user
        file_path, _ = QFileDialog.getOpenFileName(self, "Open Image", "", "Image Files (*.jpg *.jpeg *.png)")
        if not file_path:
            return  # No file selected

        # Process the image
        img = cv2.imread(file_path, 0)
        ret, binary = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)
        kernel = np.ones((5, 5), np.float32) / 9
        dst = cv2.filter2D(binary, -1, kernel)
        kernel2 = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
        erosion = cv2.erode(dst, kernel2, iterations=1)
        dilation = cv2.dilate(erosion, kernel2, iterations=1)
        edges = cv2.Canny(binary, 100, 300)
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
        edges_thick = cv2.dilate(edges, kernel, iterations=1)
        edges_colored = cv2.cvtColor(edges_thick, cv2.COLOR_GRAY2BGR)
        edges_colored[np.where(edges_thick == 255)] = [0, 0, 255]

        # Find contours
        contours, _ = cv2.findContours(edges_thick, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        num_grains = len(contours)

        # initialize count
        length_counts = {"Short(0-2)": 0, "Medium(2-4)": 0, "Long(4+)": 0}
        self.results_text.append("\nRice grain length distribution:")

        
        for cnt in contours:
            # Calculate rotated bounding box
            rect = cv2.minAreaRect(cnt)  # Rotated rectangle
            box = cv2.boxPoints(rect)  # Get the four points of the rectangle
            box = np.intp(box)  # Convert points to integers
            img = cv2.drawContours(img, [box], 0, (0, 255, 255), 2)  # Yellow rotated box


            width, height = rect[1]  # rect[1] contains (width, height)
            grain_height_mm = round(max(width, height) * 0.030303, 3)  # Convert to mm
            
           
            self.results_text.append(f"Grain length : {grain_height_mm} mm")

        # Categorize lengths
            if 0 <= grain_height_mm <= 2:
                length_counts["Short(0-2)"] += 1
            elif 2 < grain_height_mm <= 4:
                length_counts["Medium(2-4)"] += 1
            else:
                length_counts["Long(4+)"] += 1
            
        self.results_text.append(f"Number of rice grains: {num_grains}\n")
        
        for range_label, count in length_counts.items():
            grains_percentage = round(((count/num_grains)*100),2)
            self.results_text.append(f"\nNo of {range_label} grains in mm : {count}\n")
            self.results_text.append(f"{range_label} grains percentage : {grains_percentage}%\n")
    
        # Plot images in the GUI
        self.plot_images(img, dst, dilation, length_counts)

    def plot_images(self, img, dst, dilation, length_counts):
    # Clear the figure
        self.figure.clear()

    # Add subplots with better arrangement
        ax1 = self.figure.add_subplot(231)
        ax1.imshow(img, cmap="gray")
        ax1.set_title("Original Image")
        ax1.axis('off')

        ax3 = self.figure.add_subplot(232)
        ax3.imshow(dst, cmap="gray")
        ax3.set_title("Filtered Image")
        ax3.axis('off')

        ax5 = self.figure.add_subplot(233)
        ax5.imshow(dilation, cmap="gray")
        ax5.set_title("Dilated Image")
        ax5.axis('off')

    # Add a new bar chart for grain type percentages
        ax7 = self.figure.add_subplot(235)
        labels = list(length_counts.keys())
        counts = list(length_counts.values())
        total_grains = sum(counts)
        percentages = [(count / total_grains) * 100 for count in counts]

    # Plot bar chart
        ax7.bar(labels, percentages, color=['blue', 'orange', 'green'])
        ax7.set_title("Grain Length Distribution")
        ax7.set_ylabel("Percentage (%)")
        ax7.set_xlabel("Length Range")
        ax7.set_ylim(0, 100)

    # Refresh the canvas
        self.canvas.draw()


# Main entry point
if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = RiceGrainAnalyzer()
    window.show()
    sys.exit(app.exec_())
