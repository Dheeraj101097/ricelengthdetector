import { useState } from "react";
import { Play, Pause, RotateCw, Ruler, ArrowRight } from "lucide-react";
import videofile from "../../assets/video_1.mp4";
const ImageUpload = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      title: "Image Capture",
      description:
        "High-resolution image of rice grains is captured under controlled lighting conditions.",
    },
    {
      title: "Grain Detection",
      description:
        "Computer vision algorithms identify and isolate individual rice grains.",
    },
    {
      title: "Length Measurement",
      description:
        "Precise measurements are taken for each grain's length and width.",
    },
    {
      title: "Analysis",
      description:
        "Statistical analysis provides comprehensive grain size distribution data.",
    },
  ];

  return (
    <section id="demo" className="section bg-rice-50">
      <div className="container">
        <div className="text-center mb-12 animated-element">
          <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Watch our advanced computer vision system accurately measure rice
            grain lengths in real-time. The process is fully automated,
            providing instant, precise measurements for multiple grains
            simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto animated-element">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-leaf-700 text-white flex items-center justify-between">
              <div className="flex items-center">
                <Ruler className="mr-2" size={20} />
                <span className="font-semibold">Input Feed</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 hover:bg-leaf-600 rounded-full transition-colors"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button
                  className="p-2 hover:bg-leaf-600 rounded-full transition-colors"
                  onClick={() => setIsPlaying(true)}
                >
                  <RotateCw size={20} />
                </button>
              </div>
            </div>
            <div className="relative aspect-video bg-black">
              {/* <img
                src="https://images.pexels.com/photos/4219111/pexels-photo-4219111.jpeg"
                alt="Rice grains input feed"
                className="w-full h-full object-cover"
              /> */}

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-white text-lg font-semibold px-4 py-2 bg-black bg-opacity-50 rounded-lg">
                  Live Input Feed
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto animated-element">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              How It Works
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-8">
                  <div className="flex-shrink-0 w-8 h-8 bg-leaf-100 text-leaf-700 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    {/* <p className="text-sm text-gray-600">{step.description}</p> */}
                    {index < steps.length - 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 animated-element">
          Note: This is a demonstration visualization. The actual system
          processes images in real-time.
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
