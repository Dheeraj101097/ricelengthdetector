import { useState } from "react";
import { Play, Pause, RotateCw, Ruler, ArrowRight } from "lucide-react";
import videofile from "../../assets/video_1.mp4";
const ImageUpload = () => {
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

        <div className=" max-w-3xl  mx-auto animated-element">
          <div className="bg-white  rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-leaf-700 text-white flex items-center justify-between">
              <div className="flex items-center">
                <Ruler className="mr-2" size={20} />
                <span className="font-semibold">
                  Video showing how our system works
                </span>
              </div>
            </div>
            <div className="relative aspect-video p-2 bg-leaf-100">
              <video
                controls
                muted
                controlsList="nodownload noremoteplayback nofullscreen"
                className="w-full h-full object-cover rounded-lg"
                poster="https://via.placeholder.com/800x450.png?text=Video+Preview"
                onContextMenu={(e) => e.preventDefault()}
                onClick={(e) => {
                  if (e.currentTarget.paused) {
                    e.currentTarget.play();
                  } else {
                    e.currentTarget.pause();
                  }
                }}
                onDoubleClick={(e) => {
                  if (e.currentTarget.requestFullscreen) {
                    e.currentTarget.requestFullscreen();
                  } else if (e.currentTarget.mozRequestFullScreen) {
                    e.currentTarget.mozRequestFullScreen();
                  } else if (e.currentTarget.webkitRequestFullscreen) {
                    e.currentTarget.webkitRequestFullscreen();
                  } else if (e.currentTarget.msRequestFullscreen) {
                    e.currentTarget.msRequestFullscreen();
                  }
                }}
              >
                <source src={videofile} type="video/mp4" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white text-lg font-semibold px-4 py-2 bg-black bg-opacity-50 rounded-lg">
                    Video showing how our system works
                  </div>
                </div>
              </video>
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
                    <p className="text-sm text-gray-600">{step.description}</p>
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
