#Rice Grain Length Detection
This is a Rice Grain Length Detection application built using Python, PyQt5, OpenCV, and Matplotlib. The app allows users to analyze rice grain images by detecting grain length distribution, displaying visualizations, and generating a report based on image processing.

Features
File Upload: Upload an image of rice grains to analyze.
Grain Length Calculation: Automatically calculates the length of individual rice grains from the uploaded image.
Length Categorization: Categorizes grains into three groups: Short (0-2 mm), Medium (2-4 mm), and Long (4+ mm).
Visual Output: Displays images with contours around detected grains and shows a bar chart of the rice grain length distribution.
Grain Length Distribution: A statistical breakdown of the rice grain lengths in percentage format.
Requirements
Python 3.x
PyQt5: For creating the GUI.
OpenCV: For image processing.
NumPy: For handling arrays.
Matplotlib: For plotting the data.

Install the required libraries using pip:

bash
Copy code
pip install opencv-python pyqt5 numpy matplotlib

How to Run

Clone the repository:

git clone https://github.com/Dheeraj101097/ricelengthdetector.git
cd ricelengthdetector

Run the application:

python guifinal.py

Click Choose File to upload an image of rice grains. The app will process the image, detect the grains, calculate their length, categorize them, and display the results.
Image Processing Details
The application uses the following steps to process the uploaded image:

Grayscale Conversion: The image is converted to grayscale.
Thresholding: A binary image is created using thresholding.
Filtering: A filter is applied to remove noise and smooth the image.
Edge Detection: The edges of the grains are detected using the Canny edge detection algorithm.
Contour Detection: Contours are detected to outline the individual grains.
Bounding Box Calculation: A rotated bounding box is used to estimate the grain size (height).
Length Categorization: The grains are categorized into Short, Medium, and Long based on their size in millimeters.
GUI Layout
Left Panel: Includes a file upload button and a text box displaying the grain length distribution and statistics.
Right Panel: Displays images and plots including the original, filtered, and dilated images as well as the grain length distribution bar chart.
Example Output
After processing an image, the application displays:

The original, filtered, and dilated versions of the uploaded image.
A bar chart showing the percentage distribution of grain lengths (Short, Medium, Long).
A textual breakdown of the number of grains in each category and their percentages.
Contributions
Contributions are welcome! Please feel free to fork the repository, make improvements, and submit pull requests.
