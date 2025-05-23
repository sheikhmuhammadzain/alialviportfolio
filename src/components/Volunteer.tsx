import React from 'react';
import { CalendarDays, MapPin, Heart } from 'lucide-react';
import { volunteerWork, languages, hobbies } from '../data/portfolio-data';

interface VolunteerProps {
  darkMode: boolean;
}

const Volunteer: React.FC<VolunteerProps> = ({ darkMode }) => {
  return (
    <section 
      id="volunteer" 
      className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-12 text-center ${
          darkMode ? 'text-purple-400' : 'text-purple-700'
        }`}>
          Volunteer Work & More
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-teal-400' : 'text-teal-600'
            }`}>
              Volunteer Experience
            </h3>
            
            {volunteerWork.map((work, index) => (
              <div 
                key={index}
                className={`mb-8 p-6 rounded-lg shadow-md ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className={`text-lg font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {work.role}
                    </h4>
                    <div className="flex items-center mt-1">
                      <Heart size={16} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
                      <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {work.organization}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-2 md:mt-0 flex flex-col md:items-end">
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
                
                <ul className={`list-disc pl-5 mt-4 space-y-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {work.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div>
            <div className={`p-6 rounded-lg shadow-md mb-8 ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-teal-400' : 'text-teal-600'
              }`}>
                Languages
              </h3>
              
              <ul className="space-y-3">
                {languages.map((lang, index) => (
                  <li 
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                      {lang.language}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                        ? 'bg-gray-800 text-purple-300' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {lang.proficiency}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-teal-400' : 'text-teal-600'
              }`}>
                Hobbies & Interests
              </h3>
              
              <div className="space-y-4">
                {hobbies.map((hobby, index) => (
                  <div key={index}>
                    <h4 className={`font-medium mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {hobby.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {hobby.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode 
                              ? 'bg-gray-800 text-gray-300' 
                              : 'bg-gray-200 text-gray-800'
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
    </section>
  );
};

export default Volunteer;