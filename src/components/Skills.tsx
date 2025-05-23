import React from 'react';
import { skills } from '../data/portfolio-data';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section 
      id="skills" 
      className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-12 text-center ${
          darkMode ? 'text-purple-400' : 'text-purple-700'
        }`}>
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-900 hover:bg-gray-850' : 'bg-white hover:shadow-lg'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                darkMode ? 'text-teal-400' : 'text-teal-600'
              }`}>
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;