import React from 'react';
import { CalendarDays, MapPin, Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio-data';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        My professional journey and key career milestones
      </p>
      
      <div className="max-w-4xl mx-auto">
        {experience.map((job, index) => (
          <div 
            key={index}
            className={`mb-10 p-6 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800/70 border-gray-700' 
                : 'bg-white border-gray-200'
            } hover:border-primary/30 transition-all duration-300 hover:shadow-md`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">
                  {job.title}
                </h3>
                <div className="flex items-center">
                  <Briefcase size={16} className="text-primary" />
                  <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                    {job.company}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                <div className="flex items-center">
                  <CalendarDays size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {job.period}
                  </span>
                </div>
                <div className="flex items-center mt-1">
                  <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {job.location}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <ul className="space-y-3">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;