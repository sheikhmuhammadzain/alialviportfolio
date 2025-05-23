import React from 'react';
import { skills } from '../data/portfolio-data';
import { CheckCircle } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">
        A comprehensive set of technical and professional skills gained through education and practical experience
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skills.map((category, index) => (
          <div 
            key={index}
            className={`p-6 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800/70 border-gray-700 hover:border-primary/30' 
                : 'bg-white border-gray-200 hover:border-primary/30'
            } transition-all duration-300 hover:shadow-md hover-lift`}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {category.category}
            </h3>
            
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;