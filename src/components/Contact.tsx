import React from 'react';
import { Mail, Phone, Linkedin, Github, ArrowUp, MessageSquare } from 'lucide-react';

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
    <div className="section-container">
      <h2 className="section-title">Let's Connect</h2>
      <p className="section-subtitle">
        Interested in collaborating or discussing opportunities? Feel free to reach out!
      </p>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className={`p-6 rounded-lg border ${
            darkMode 
              ? 'bg-gray-800/70 border-gray-700' 
              : 'bg-white border-gray-200'
          } hover:border-primary/30 transition-all duration-300 hover:shadow-md`}>
            <div className="flex flex-col space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-4 text-foreground flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="tel:03317867000" 
                      className="flex items-center group"
                    >
                      <Phone className="w-5 h-5 mr-3 text-primary" />
                      <span className={`group-hover:text-primary transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        0331 786 7000
                      </span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:aliawan2002@icloud.com" 
                      className="flex items-center group"
                    >
                      <Mail className="w-5 h-5 mr-3 text-primary" />
                      <span className={`group-hover:text-primary transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        aliawan2002@icloud.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 text-foreground">Social Media</h3>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://www.linkedin.com/in/muhammad-ali/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center justify-center p-3 rounded-md ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-primary/80 text-white' 
                        : 'bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary'
                    } transition-colors duration-300`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/aliawan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center justify-center p-3 rounded-md ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-primary/80 text-white' 
                        : 'bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary'
                    } transition-colors duration-300`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`p-6 rounded-lg border ${
            darkMode 
              ? 'bg-gray-800/70 border-gray-700' 
              : 'bg-white border-gray-200'
          } hover:border-primary/30 transition-all duration-300 hover:shadow-md`}>
            <form>
              <h3 className="text-lg font-bold mb-4 text-foreground">Send a Message</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="input min-h-[120px]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className={`flex items-center justify-center p-3 rounded-full ${
              darkMode 
                ? 'bg-primary/80 hover:bg-primary text-white' 
                : 'bg-primary hover:bg-primary/90 text-white'
            } transition-colors duration-300 shadow-md hover:shadow-lg`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;