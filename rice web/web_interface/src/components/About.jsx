import React from "react";
import { Book, Award, Users, History } from "lucide-react";
import riceaqui from "../../assets/riceaqui.jpg";
const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-rice-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              About the Project
            </h1>
            <p className="text-xl text-center text-gray-700 mb-8">
              Learn more about our Rice Grain Length Detection System and the
              working behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-700 mb-4">
                The Rice Grain Length Detection System is an advanced computer
                vision solution designed to accurately measure and classify rice
                grains. It addresses the need for precise, efficient, and
                objective grain quality assessment in research and industry.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Traditional manual methods for measuring rice grains are
                time-consuming, prone to human error, and lack consistency. Our
                system automates this process using state-of-the-art image
                processing and deep learning techniques.
              </p>
              {/* <p className="text-lg text-gray-700">
                The project began as a research initiative at the Department of
                Agricultural Engineering and has evolved into a comprehensive
                tool used by rice researchers, breeders, and quality control
                professionals.
              </p> */}
            </div>
            <div className="bg-rice-50 p-8 rounded-lg">
              <img src={riceaqui} className="h-full w-full rounded-lg "></img>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-rice-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-leaf-100 flex items-center justify-center rounded-full">
                  <Book size={28} className="text-leaf-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Image Acquisition
              </h3>
              <p className="text-gray-700">
                Rice grains are placed on a contrasting background.
                High-resolution images are captured under controlled lighting
                conditions to ensure consistency. Multiple samples can be
                processed simultaneously.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-leaf-100 flex items-center justify-center rounded-full">
                  <Book size={28} className="text-leaf-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Image Processing
              </h3>
              <p className="text-gray-700">
                Images undergo several preprocessing steps including background
                subtraction, noise reduction, and binarization. Segmentation
                algorithms identify individual grains, even in clusters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-leaf-100 flex items-center justify-center rounded-full">
                  <Book size={28} className="text-leaf-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Measurement & Analysis
              </h3>
              <p className="text-gray-700">
                Morphological features are extracted from each grain including
                length, width, and aspect ratio.Calibration is done to ensure
                grains length are accurate. Results are aggregated for
                statistical analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-rice-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Recognition & Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-fit mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Award size={24} className="text-leaf-600 mr-3" />
                <h3 className="text-xl font-semibold">Awards</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Innovation in Agricultural Technology (2024)</li>
                <li>• Best Research Project at Conference (2024)</li>
                <li>• University Research Excellence Grant Recipient</li>
              </ul>
            </div>
            {/* <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Users size={24} className="text-leaf-600 mr-3" />
                <h3 className="text-xl font-semibold">Partners</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• National Rice Research Institute</li>
                <li>• Department of Agriculture</li>
                <li>• Global Rice Quality Assessment Initiative</li>
                <li>• Agricultural Technology Consortium</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
