// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';
import Reviews from './components/Reviews.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


import './App.css'; // Ensure that this CSS file contains styles for dark mode

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode styles when the component mounts or when isDarkMode changes
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
        {/* Navbar outside of main section */}
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        <main className='justify-center items-center'>
          <div id='home' className='mt-20'>
            <Home />
          </div>
          <div id='about' className='mt-20'>
            <About />
          </div>
          <div id='courses' className='mt-20'>
            <Courses />
          </div>
          <div id='reviews' className=''>
            <Reviews />
          </div>
          <div id='contact' className=''>
            <Contact />
          </div>
        </main>

        {/* Footer outside of main section */}
        <Footer />
       
      </div>
    </Router>
  );
};

export default App;
