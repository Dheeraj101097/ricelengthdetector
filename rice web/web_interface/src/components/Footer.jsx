import { Brain as Grain, Github, FileText, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rice-800 text-rice-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Grain className="text-leaf-400" size={24} />
              <span className="text-xl font-semibold text-white">RiceDetect</span>
            </div>
            <p className="text-rice-200 mb-4">
              Advanced rice grain length detection system utilizing computer vision and AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-rice-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:contact@ricedetect.com" className="text-rice-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-rice-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="/report.pdf" target="_blank" rel="noopener noreferrer" className="text-rice-300 hover:text-white transition-colors">
                <FileText size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-rice-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-rice-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="text-rice-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-rice-300 hover:text-white transition-colors">GitHub Repository</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-rice-300 mb-2">Have questions about our Rice Grain Length Detection System?</p>
            <a href="/contact" className="btn bg-leaf-700 text-white hover:bg-leaf-600 transition-colors inline-block mt-2">
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="border-t border-rice-700 mt-8 pt-8 text-rice-400 text-sm text-center">
          <p>© {new Date().getFullYear()} Rice Grain Length Detection System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;