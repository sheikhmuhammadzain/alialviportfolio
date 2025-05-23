import React from 'react';
import { CalendarDays, MapPin, GraduationCap, BookOpen } from 'lucide-react';
import { education, certifications } from '../data/portfolio-data';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section 
      id="education" 
      className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-12 text-center ${
          darkMode ? 'text-purple-400' : 'text-purple-700'
        }`}>
          Education & Certifications
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`mb-10 p-6 rounded-lg shadow-md ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-teal-400' : 'text-teal-600'
                  }`}>
                    {edu.degree}
                  </h3>
                  <div className="flex items-center mt-1">
                    <GraduationCap size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {edu.institution}
                    </span>
                  </div>
                </div>
                
                <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                  <div className="flex items-center">
                    <CalendarDays size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={`mt-3 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                <span className="font-medium">GPA: {edu.gpa}</span>
              </div>
              
              <ul className={`list-disc pl-5 mt-4 space-y-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="mt-12">
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-teal-400' : 'text-teal-600'
            }`}>
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-900' : 'bg-white'
                  } shadow-md flex items-center`}
                >
                  <div className={`mr-3 p-2 rounded-full ${
                    darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-700'
                  }`}>
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {cert.name}
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;