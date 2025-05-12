import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import uiimage from "../../assets/uiimage.png";
import grainslength from "../../assets/grainclassification.png";
import outputimg from "../../assets/outputimg.png";
import imgaqui from "../../assets/imgaqui.jpg";
const ScreenshotGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // In a real application, these would be actual screenshots of your system
  const screenshots = [
    {
      src: uiimage,
      alt: "Rice grains measurement interface",
      caption: "Rice grains length detection interface",
    },
    {
      src: grainslength,
      alt: "Statistical analysis dashboard",
      caption: "Statistical dashboard with grain measurement data",
    },
    {
      src: outputimg,
      alt: "Rice variety classification",
      caption: "Output Image showing length of grain in millimetre ",
    },
    {
      src: imgaqui,
      alt: "System setup and calibration",
      caption: "System setup and calibration process",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12 animated-element">
          <h2 className="text-3xl font-bold mb-4">Screenshot Gallery</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore the interface and capabilities of our Rice Grain Length
            Detection System.
          </p>
        </div>

        {/* Main showcase - larger carousel for larger screens */}
        <div className="hidden md:block mb-8 animated-element">
          <div className="relative bg-rice-100 rounded-lg overflow-hidden shadow-md aspect-video max-w-4xl mx-auto">
            <img
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].alt}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
              <p className="text-lg">{screenshots[currentIndex].caption}</p>
            </div>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              onClick={prevSlide}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              onClick={nextSlide}
              aria-label="Next screenshot"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-leaf-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail grid - for all screen sizes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animated-element">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-sm cursor-pointer transition-transform hover:scale-105 aspect-video"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotGallery;
