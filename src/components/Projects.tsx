import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/portfolio-data';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <section 
      id="projects" 
      className={`py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-12 text-center ${
          darkMode ? 'text-purple-400' : 'text-purple-700'
        }`}>
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-teal-400' : 'text-teal-600'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-2 py-1 rounded-full text-xs ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className={`p-2 rounded ${
                      darkMode 
                        ? 'bg-gray-700 text-teal-400 hover:bg-gray-600' 
                        : 'bg-gray-200 text-teal-700 hover:bg-gray-300'
                    } transition-colors duration-300`}
                    aria-label="View Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href="#" 
                    className={`p-2 rounded ${
                      darkMode 
                        ? 'bg-gray-700 text-purple-400 hover:bg-gray-600' 
                        : 'bg-gray-200 text-purple-700 hover:bg-gray-300'
                    } transition-colors duration-300`}
                    aria-label="View Code"
                  >
                    <Code size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;