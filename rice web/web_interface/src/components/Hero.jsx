import { ArrowRight, Github, FileText, Newspaper } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [showPaperModal, setShowPaperModal] = useState(false);

  return (
    <section className="relative h-screen flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container relative z-10 text-white">
        <div className="max-w-3xl animated-element">
          <h1 className="text-5xl text-rice-300  md:text-6xl font-bold mb-6">
            Rice Grain Length Detection System
          </h1>
          <p className="text-xl md:text-2xl text-rice-100 mb-8">
            Advanced computer vision solution for precise rice grain
            measurements and analysis.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-leaf-600 hover:bg-leaf-700 text-white"
            >
              <Github className="mr-2" size={20} />
              View on GitHub
            </a>
            <a
              href="/report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white hover:bg-rice-100 text-gray-900"
            >
              <FileText className="mr-2" size={20} />
              Read Report
            </a>
            <button
              onClick={() => setShowPaperModal(true)}
              className="btn border-2 border-white bg-transparent hover:bg-white hover:text-gray-900 text-white transition-colors"
            >
              <Newspaper className="mr-2" size={20} />
              Upcoming Paper
            </button>
          </div>

          <a
            href="#features"
            className="flex items-center text-white mt-16 group"
          >
            <span className="mr-2">Explore Features</span>
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </a>
        </div>
      </div>

      {/* Modal for Upcoming Paper */}
      {showPaperModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Upcoming Research Paper
            </h3>
            <p className="text-gray-700 mb-6">
              Our research paper detailing the methodologies and results of our
              Rice Grain Length Detection System is currently under review and
              will be published soon. Please check back later or subscribe to
              our newsletter to be notified when it becomes available.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="btn bg-rice-200 text-gray-800 hover:bg-rice-300"
                onClick={() => setShowPaperModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
