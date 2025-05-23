import React from 'react';
import { CalendarDays, MapPin, GraduationCap, BookOpen, Award } from 'lucide-react';
import { education, certifications } from '../data/portfolio-data';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">Education & Certifications</h2>
      <p className="section-subtitle">
        Academic background and professional certifications that have shaped my expertise
      </p>
      
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <div 
            key={index}
            className={`mb-10 p-6 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800/70 border-gray-700' 
                : 'bg-white border-gray-200'
            } hover:border-primary/30 transition-all duration-300 hover:shadow-md`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">
                  {edu.degree}
                </h3>
                <div className="flex items-center">
                  <GraduationCap size={16} className="text-primary" />
                  <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                    {edu.institution}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-col md:items-end">
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
                <div className="flex items-center mt-2">
                  <Award size={16} className="text-primary" />
                  <span className={`ml-2 font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <ul className="space-y-3">
                {edu.details.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
        <div className="mt-16">
          <h3 className="text-xl font-bold text-primary mb-6">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-800/70 border-gray-700' 
                    : 'bg-white border-gray-200'
                } hover:border-primary/30 transition-all duration-300 hover:shadow-md hover-lift`}
              >
                <div className="flex items-center">
                  <div className="mr-3 p-2 rounded-full bg-primary/10">
                    <BookOpen size={20} className="text-primary" />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;