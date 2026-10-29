import React from 'react';
import { ChevronDown, Laptop, Database, Zap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Flutter developer and data analyst with a passion for creating seamless, data-driven mobile experiences
      </p>

      <div className="max-w-4xl mx-auto prose-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} hover-lift`}>
            <Laptop className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-medium mb-2">Flutter Development</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Expert in creating cross-platform applications with beautiful UI and seamless UX using Flutter and Dart.
            </p>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} hover-lift`}>
            <Database className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-medium mb-2">Data Analysis</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Proficient in Python, SQL, and visualization tools to extract meaningful insights from complex datasets.
            </p>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} hover-lift`}>
            <Zap className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-medium mb-2">Problem Solving</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Combining technical skills with analytical thinking to develop innovative solutions to real-world challenges.
            </p>
          </div>
        </div>

        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} mb-8`}>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Versatile and results-oriented Flutter Developer and Data Analyst with a strong foundation in both mobile application development and data science. Experienced in building cross-platform apps using Flutter and Dart, with a keen eye for clean UI/UX design and responsive performance.
          </p>
        </div>

        <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Proficient in Python, SQL, and Tableau for data cleaning, analysis, and visualization, delivering actionable insights that support strategic decision-making. Skilled in developing machine learning models and automating data workflows.
        </p>
        
        <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Passionate about creating data-driven mobile solutions that solve real-world problems and enhance user experience.
        </p>
      </div>
      
      <div className="flex justify-center mt-12">
        <a 
          href="#skills" 
          className={`p-3 rounded-full ${
            darkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-white' 
              : 'bg-white hover:bg-gray-100 text-gray-800 shadow-sm'
          } transition-all hover:-translate-y-1 hover:shadow-md`}
          aria-label="Scroll to Skills section"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </div>
  );
};

export default About;