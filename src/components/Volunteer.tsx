import React from 'react';
import { CalendarDays, MapPin, Heart, Globe, Coffee } from 'lucide-react';
import { volunteerWork, languages, hobbies } from '../data/portfolio-data';

interface VolunteerProps {
  darkMode: boolean;
}

const Volunteer: React.FC<VolunteerProps> = ({ darkMode }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">Volunteer Work & More</h2>
      <p className="section-subtitle">
        Community involvement, language proficiency, and personal interests
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-primary mb-6">
            Volunteer Experience
          </h3>
          
          {volunteerWork.map((work, index) => (
            <div 
              key={index}
              className={`mb-8 p-6 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-800/70 border-gray-700' 
                  : 'bg-white border-gray-200'
              } hover:border-primary/30 transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold mb-1 text-foreground">
                    {work.role}
                  </h4>
                  <div className="flex items-center">
                    <Heart size={16} className="text-primary" />
                    <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                      {work.organization}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                  <div className="flex items-center">
                    <CalendarDays size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {work.period}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {work.location}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <ul className="space-y-3">
                  {work.details.map((item, i) => (
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
        
        <div className="space-y-6">
          <div className={`p-6 rounded-lg border ${
            darkMode 
              ? 'bg-gray-800/70 border-gray-700' 
              : 'bg-white border-gray-200'
          } hover:border-primary/30 transition-all duration-300 hover:shadow-md`}>
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-bold text-foreground">
                Languages
              </h3>
            </div>
            
            <ul className="space-y-3">
              {languages.map((lang, index) => (
                <li 
                  key={index}
                  className="flex justify-between items-center"
                >
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                    {lang.language}
                  </span>
                  <span className={`px-3 py-1 text-xs rounded-md ${
                    darkMode 
                      ? 'bg-primary/20 text-primary-foreground' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {lang.proficiency}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`p-6 rounded-lg border ${
            darkMode 
              ? 'bg-gray-800/70 border-gray-700' 
              : 'bg-white border-gray-200'
          } hover:border-primary/30 transition-all duration-300 hover:shadow-md`}>
            <div className="flex items-center mb-4">
              <Coffee className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-bold text-foreground">
                Hobbies & Interests
              </h3>
            </div>
            
            <div className="space-y-4">
              {hobbies.map((hobby, index) => (
                <div key={index}>
                  <h4 className={`font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {hobby.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {hobby.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className={`px-3 py-1 text-xs rounded-md ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;