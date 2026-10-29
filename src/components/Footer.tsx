import React from 'react';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Muhammad Ali
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Flutter Developer & Data Analyst
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="tel:03317867000" 
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-800 shadow-sm'
              } transition-colors duration-300`}
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
            <a 
              href="mailto:aliawan2002@icloud.com" 
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-800 shadow-sm'
              } transition-colors duration-300`}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-ali/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-800 shadow-sm'
              } transition-colors duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/aliawan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-800 shadow-sm'
              } transition-colors duration-300`}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
          
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="flex items-center">
              © {currentYear} Made with <Heart size={14} className="mx-1 text-primary" /> by Muhammad Ali
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 