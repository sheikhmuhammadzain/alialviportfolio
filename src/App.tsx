import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for user's preference on initial load
  useEffect(() => {
    // Check local storage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If no saved preference, check system preference
      setDarkMode(true);
    }
  }, []);

  // Update document title
  useEffect(() => {
    document.title = "Muhammad Ali | Flutter Developer & Data Analyst";
  }, []);

  // Save theme preference when it changes
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    
    // Apply dark mode class to root html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Hero darkMode={darkMode} />
          
          <section id="about" className="bg-background">
            <About darkMode={darkMode} />
          </section>
          
          <section id="skills" className={darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}>
            <Skills darkMode={darkMode} />
          </section>
          
          <section id="experience" className="bg-background">
            <Experience darkMode={darkMode} />
          </section>
          
          <section id="education" className={darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}>
            <Education darkMode={darkMode} />
          </section>
          
          <section id="projects" className="bg-background">
            <Projects darkMode={darkMode} />
          </section>
          
          <section id="volunteer" className={darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}>
            <Volunteer darkMode={darkMode} />
          </section>
          
          <section id="contact" className="bg-background">
            <Contact darkMode={darkMode} />
          </section>
        </main>
        
        <Footer darkMode={darkMode} />
        <Toaster position="bottom-right" />
      </div>
    </div>
  );
}

export default App;