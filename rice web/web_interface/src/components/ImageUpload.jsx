// import { useState, useRef } from 'react';
// import { Upload, X, Image as ImageIcon } from 'lucide-react';

// const ImageUpload = () => {
//   const [inputImage, setInputImage] = useState(null);
//   const [processedImage, setProcessedImage] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState(null);
//   const fileInputRef = useRef(null);

//   // This would connect to your actual backend in production
//   const processImage = (image) => {
//     // Simulate processing delay
//     setIsProcessing(true);

//     setTimeout(() => {
//       // In a real app, this would be replaced with actual API call
//       // For demo, we'll just use the same image with an overlay
//       setProcessedImage('/processed-rice-sample.jpg');
//       setIsProcessing(false);
//     }, 2000);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (!file.type.match('image.*')) {
//       setError('Please select an image file');
//       return;
//     }

//     setError(null);
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       setInputImage(event.target.result);
//       processImage(event.target.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();

//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       const file = e.dataTransfer.files[0];

//       if (!file.type.match('image.*')) {
//         setError('Please drop an image file');
//         return;
//       }

//       setError(null);
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setInputImage(event.target.result);
//         processImage(event.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const clearImage = () => {
//     setInputImage(null);
//     setProcessedImage(null);
//     setError(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   return (
//     <section id="image-upload" className="section bg-rice-50">
//       <div className="container">
//         <div className="text-center mb-12 animated-element">
//           <h2 className="text-3xl font-bold mb-4">Try the System</h2>
//           <p className="max-w-2xl mx-auto text-gray-600">
//             Upload an image of rice grains to see our detection system in action. The system will analyze the image and display the measurements of each grain.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animated-element">
//           <div className="card p-6">
//             <h3 className="text-xl font-semibold mb-4">Upload Image</h3>

//             {!inputImage ? (
//               <div
//                 className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center h-64 bg-white cursor-pointer hover:border-leaf-500 transition-colors"
//                 onClick={() => fileInputRef.current?.click()}
//                 onDrop={handleDrop}
//                 onDragOver={handleDragOver}
//               >
//                 <Upload className="text-gray-400 mb-4" size={40} />
//                 <p className="text-gray-600 text-center mb-2">Drag & drop an image here or click to browse</p>
//                 <p className="text-gray-500 text-sm text-center">Supports JPG, PNG</p>
//                 {error && <p className="text-red-500 mt-2">{error}</p>}
//                 <input
//                   type="file"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   ref={fileInputRef}
//                 />
//               </div>
//             ) : (
//               <div className="relative h-64">
//                 <img
//                   src={inputImage}
//                   alt="Uploaded rice grain"
//                   className="w-full h-full object-contain"
//                 />
//                 <button
//                   className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
//                   onClick={clearImage}
//                 >
//                   <X size={20} className="text-gray-700" />
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="card p-6">
//             <h3 className="text-xl font-semibold mb-4">Processed Result</h3>

//             <div className="border rounded-lg flex items-center justify-center h-64 bg-white">
//               {isProcessing ? (
//                 <div className="flex flex-col items-center">
//                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-leaf-600 mb-4"></div>
//                   <p className="text-gray-600">Processing image...</p>
//                 </div>
//               ) : processedImage ? (
//                 <img
//                   src={processedImage}
//                   alt="Processed rice grain with measurements"
//                   className="w-full h-full object-contain"
//                 />
//               ) : (
//                 <div className="flex flex-col items-center text-gray-400">
//                   <ImageIcon size={40} className="mb-4" />
//                   <p>Processed image will appear here</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 text-center animated-element">
//           <p className="text-gray-600 italic">
//             Note: This is a demonstration. In the actual system, images are processed by our advanced computer vision algorithms.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageUpload;

//
//
//
import { useState } from "react";
import { Play, Pause, RotateCw, Ruler, ChevronRight } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto animated-element">
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
              <img
                src="https://images.pexels.com/photos/4219111/pexels-photo-4219111.jpeg"
                alt="Rice grains input feed"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-white text-lg font-semibold px-4 py-2 bg-black bg-opacity-50 rounded-lg">
                  Live Input Feed
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-earth-700 text-white flex items-center justify-between">
              <div className="flex items-center">
                <Ruler className="mr-2" size={20} />
                <span className="font-semibold">Processed Output</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm bg-earth-600 px-2 py-1 rounded">
                  Processing...
                </span>
              </div>
            </div>
            <div className="relative aspect-video bg-black">
              <img
                src="https://images.pexels.com/photos/4219175/pexels-photo-4219175.jpeg"
                alt="Processed rice grains with measurements"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0">
                <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white text-sm px-3 py-1 rounded-full">
                  Length: 7.2mm
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white text-sm px-3 py-1 rounded-full">
                  Processing 24 grains
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
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-leaf-100 text-leaf-700 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute transform translate-x-full translate-y-4">
                        <ChevronRight className="text-leaf-400" size={20} />
                      </div>
                    )}
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
