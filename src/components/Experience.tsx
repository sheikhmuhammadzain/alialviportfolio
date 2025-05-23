import React from 'react';
import { CalendarDays, MapPin, Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio-data';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section 
      id="experience" 
      className={`py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-12 text-center ${
          darkMode ? 'text-purple-400' : 'text-purple-700'
        }`}>
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <div 
              key={index}
              className={`mb-10 p-6 rounded-lg shadow-md ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-teal-400' : 'text-teal-600'
                  }`}>
                    {job.title}
                  </h3>
                  <div className="flex items-center mt-1">
                    <Briefcase size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {job.company}
                    </span>
                  </div>
                </div>
                
                <div className="mt-2 md:mt-0 flex flex-col md:items-end">
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
              
              <ul className={`list-disc pl-5 mt-4 space-y-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;