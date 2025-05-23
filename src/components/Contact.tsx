import React from 'react';
import { Mail, Phone, Linkedin, Github, ArrowUp } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="contact" 
      className={`py-16 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' 
          : 'bg-gradient-to-br from-gray-100 via-purple-100 to-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Connect
          </h2>
          
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Interested in collaborating or learning more? Feel free to reach out via email or connect on LinkedIn.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="tel:03317867000" 
              className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-900 shadow-md'
              } transition-colors duration-300`}
            >
              <Phone size={20} />
              <span>0331 786 7000</span>
            </a>
            
            <a 
              href="mailto:aliawan2002@icloud.com" 
              className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-900 shadow-md'
              } transition-colors duration-300`}
            >
              <Mail size={20} />
              <span>aliawan2002@icloud.com</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/muhammad-ali/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-900 shadow-md'
              } transition-colors duration-300`}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="#" 
              className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-900 shadow-md'
              } transition-colors duration-300`}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className={`mx-auto flex items-center justify-center p-3 rounded-full ${
              darkMode 
                ? 'bg-purple-700 hover:bg-purple-600 text-white' 
                : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md'
            } transition-colors duration-300`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
      
      <div className={`mt-12 py-4 text-center ${
        darkMode ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-600'
      }`}>
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Muhammad Ali. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;