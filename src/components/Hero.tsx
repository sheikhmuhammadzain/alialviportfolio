import React from 'react';
import { Mail, Phone, Linkedin, Github, ArrowDown } from 'lucide-react';
import dp from '../alvidp.jpeg';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section 
      id="hero" 
      className={`min-h-screen flex items-center ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-gray-50 to-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <div>
              <p className={`text-sm font-medium uppercase tracking-wider mb-4 ${darkMode ? 'text-primary' : 'text-primary'}`}>
                Flutter Developer & Data Analyst
              </p>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Muhammad <span className="text-primary">Ali</span>
              </h1>
              <p className={`text-lg md:text-xl max-w-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I build exceptional mobile solutions with Flutter and extract valuable insights through data analysis, helping businesses create seamless digital experiences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="mailto:aliawan2002@icloud.com" 
                className="btn-primary"
              >
                <Mail size={18} className="mr-2" />
                Contact Me
              </a>
              <a 
                href="#projects" 
                className={`flex items-center gap-2 px-4 py-2 rounded-md border ${
                  darkMode 
                    ? 'border-gray-700 hover:border-gray-600 text-white' 
                    : 'border-gray-300 hover:border-gray-400 text-gray-800'
                } transition-colors duration-300`}
              >
                View Projects
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="tel:03317867000" 
                className={`p-2 rounded-full ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-800 shadow-sm'
                } transition-colors duration-300`}
                aria-label="Phone"
              >
                <Phone size={20} />
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
                <Mail size={20} />
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
                <Linkedin size={20} />
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
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ${
              darkMode 
                ? 'ring-2 ring-primary ring-offset-4 ring-offset-gray-900' 
                : 'ring-2 ring-primary ring-offset-4 ring-offset-gray-50 shadow-xl'
            }`}>
              <img 
                src={dp} 
                alt="Muhammad Ali" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 animate-bounce hidden md:block">
          <a 
            href="#about" 
            className={`p-2 rounded-full ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                : 'bg-white hover:bg-gray-100 text-gray-800 shadow-sm'
            } transition-colors duration-300`}
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;