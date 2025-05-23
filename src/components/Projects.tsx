import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { projects } from '../data/portfolio-data';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        A showcase of my technical skills and problem-solving abilities
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`rounded-lg border overflow-hidden ${
              darkMode 
                ? 'bg-gray-800/70 border-gray-700' 
                : 'bg-white border-gray-200'
            } hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover-lift`}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2 text-primary">
                {project.title}
              </h3>
              
              <p className={`mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`px-2 py-1 text-xs rounded-md ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-700/20">
                <a 
                  href="#" 
                  className={`flex items-center gap-1 text-sm font-medium ${
                    darkMode 
                      ? 'text-primary hover:text-primary-foreground' 
                      : 'text-primary hover:text-primary/80'
                  }`}
                >
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </a>
                
                <a 
                  href="https://github.com/aliawan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 text-sm font-medium ${
                    darkMode 
                      ? 'text-primary hover:text-primary-foreground' 
                      : 'text-primary hover:text-primary/80'
                  }`}
                >
                  <Github size={15} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;