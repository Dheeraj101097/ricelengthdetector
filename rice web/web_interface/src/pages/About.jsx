import React from 'react';
import { Book, Award, Users, History } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-rice-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About the Project</h1>
            <p className="text-xl text-center text-gray-700 mb-8">
              Learn more about our Rice Grain Length Detection System and the team behind it.
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
                The Rice Grain Length Detection System is an advanced computer vision solution designed to accurately measure and classify rice grains. It addresses the need for precise, efficient, and objective grain quality assessment in research and industry.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Traditional manual methods for measuring rice grains are time-consuming, prone to human error, and lack consistency. Our system automates this process using state-of-the-art image processing and deep learning techniques.
              </p>
              <p className="text-lg text-gray-700">
                The project began as a research initiative at the Department of Agricultural Engineering and has evolved into a comprehensive tool used by rice researchers, breeders, and quality control professionals.
              </p>
            </div>
            <div className="bg-rice-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Project Milestones</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <History size={24} className="text-leaf-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">2022 - Initial Research</h4>
                    <p className="text-gray-600">Conceptualization and prototype development</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <History size={24} className="text-leaf-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">2023 - Algorithm Development</h4>
                    <p className="text-gray-600">Refined detection algorithms and increased accuracy</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <History size={24} className="text-leaf-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">2024 - System Integration</h4>
                    <p className="text-gray-600">Complete system with user interface and analytics</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <History size={24} className="text-leaf-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">2025 - Upcoming Publication</h4>
                    <p className="text-gray-600">Research paper under review in agricultural technology journal</p>
                  </div>
                </div>
              </div>
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
              <h3 className="text-xl font-semibold mb-3 text-center">Image Acquisition</h3>
              <p className="text-gray-700">
                Rice grains are placed on a contrasting background. High-resolution images are captured under controlled lighting conditions to ensure consistency. Multiple samples can be processed simultaneously.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-leaf-100 flex items-center justify-center rounded-full">
                  <Book size={28} className="text-leaf-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Image Processing</h3>
              <p className="text-gray-700">
                Images undergo several preprocessing steps including background subtraction, noise reduction, and binarization. Segmentation algorithms identify individual grains, even in clusters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-leaf-100 flex items-center justify-center rounded-full">
                  <Book size={28} className="text-leaf-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Measurement & Analysis</h3>
              <p className="text-gray-700">
                Morphological features are extracted from each grain including length, width, and aspect ratio. Deep learning models classify grains by variety. Results are aggregated for statistical analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-rice-50 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. Sarah Chen</h3>
              <p className="text-leaf-700 mb-3">Project Lead</p>
              <p className="text-gray-600 text-sm">
                Agricultural Engineering expert with 10+ years of experience in grain quality assessment.
              </p>
            </div>
            <div className="bg-rice-50 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img src="https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. Michael Patel</h3>
              <p className="text-leaf-700 mb-3">Computer Vision Specialist</p>
              <p className="text-gray-600 text-sm">
                Developed the core image processing algorithms and segmentation techniques.
              </p>
            </div>
            <div className="bg-rice-50 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img src="https://images.pexels.com/photos/2023252/pexels-photo-2023252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Emma Rodriguez</h3>
              <p className="text-leaf-700 mb-3">ML Engineer</p>
              <p className="text-gray-600 text-sm">
                Created the classification models and statistical analysis tools for the system.
              </p>
            </div>
            <div className="bg-rice-50 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img src="https://images.pexels.com/photos/3911602/pexels-photo-3911602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. James Kim</h3>
              <p className="text-leaf-700 mb-3">Rice Research Scientist</p>
              <p className="text-gray-600 text-sm">
                Provided domain expertise and validated system results against industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-rice-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Recognition & Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Award size={24} className="text-leaf-600 mr-3" />
                <h3 className="text-xl font-semibold">Awards</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Innovation in Agricultural Technology Award (2023)</li>
                <li>• Best Research Tool at AgriTech Conference (2024)</li>
                <li>• University Research Excellence Grant Recipient</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;