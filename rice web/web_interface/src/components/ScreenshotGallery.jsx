import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const ScreenshotGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  
  // In a real application, these would be actual screenshots of your system
  const screenshots = [
    {
      src: "https://images.pexels.com/photos/1646313/pexels-photo-1646313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Rice grains measurement interface",
      caption: "Measurement interface showing length detection"
    },
    {
      src: "https://images.pexels.com/photos/1237241/pexels-photo-1237241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Statistical analysis dashboard",
      caption: "Statistical dashboard with grain measurement data"
    },
    {
      src: "https://images.pexels.com/photos/4219175/pexels-photo-4219175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Rice variety classification",
      caption: "Rice variety classification based on grain dimensions"
    },
    {
      src: "https://images.pexels.com/photos/4219111/pexels-photo-4219111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "System setup and calibration",
      caption: "System setup and calibration process"
    },
    {
      src: "https://images.pexels.com/photos/4219229/pexels-photo-4219229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Batch processing interface",
      caption: "Batch processing multiple samples simultaneously"
    },
    {
      src: "https://images.pexels.com/photos/4219184/pexels-photo-4219184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Export and reporting tools",
      caption: "Data export and reporting tools"
    }
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };
  
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setShowLightbox(true);
  };
  
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12 animated-element">
          <h2 className="text-3xl font-bold mb-4">Screenshot Gallery</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore the interface and capabilities of our Rice Grain Length Detection System.
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
            
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              onClick={() => setShowLightbox(true)}
              aria-label="View fullscreen"
            >
              <ZoomIn size={24} />
            </button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-4">
            {screenshots.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-leaf-600' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnail grid - for all screen sizes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animated-element">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="relative rounded-lg overflow-hidden shadow-sm cursor-pointer transition-transform hover:scale-105 aspect-video"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={screenshot.src} 
                alt={screenshot.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center">
                <ZoomIn size={24} className="text-white opacity-0 hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {showLightbox && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl">
              <img 
                src={screenshots[currentIndex].src} 
                alt={screenshots[currentIndex].alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <p className="text-lg">{screenshots[currentIndex].caption}</p>
              </div>
              
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={30} />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next screenshot"
              >
                <ChevronRight size={30} />
              </button>
              
              <button 
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                onClick={() => setShowLightbox(false)}
                aria-label="Close fullscreen view"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScreenshotGallery;