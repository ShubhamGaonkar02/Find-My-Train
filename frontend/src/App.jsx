import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TrainStatus from './pages/TrainStatus';
import StationDetails from './pages/StationDetails';
import RouteSearch from './pages/RouteSearch';

// Export Dark Mode Context
export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-20 px-4 pb-10 max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/train/:id" element={<TrainStatus />} />
              <Route path="/station/:id" element={<StationDetails />} />
              <Route path="/route" element={<RouteSearch />} />
            </Routes>
          </main>
          <footer className="w-full py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0c]">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
              <h3 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">
                Contact
              </h3>
              <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                Shubham Gaonkar
              </h2>
              <p className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-8">
                Computer Engineer
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base">
                <a href="tel:+919049869955" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+91-9049869955</span>
                </a>
                <a href="mailto:shubhamgaonkar2005@gmail.com" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>shubhamgaonkar2005@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/shubhamgaonkar2005/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline decoration-2 underline-offset-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/ShubhamGaonkar02" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline decoration-2 underline-offset-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://public.tableau.com/app/profile/shubham.gaonkar/vizzes" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline decoration-2 underline-offset-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 7h2v5h5v2h-5v5h-2v-5H6v-2h5V7zm-8 7h2v2H3v-2zm0-4h2v2H3v-2zm16 4h2v2h-2v-2zm0-4h2v2h-2v-2zM11 2h2v3h-2V2zm0 17h2v3h-2v-3z"/>
                  </svg>
                  <span>Tableau</span>
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-900 w-full text-xs text-gray-400 dark:text-gray-600">
                © {new Date().getFullYear()} Developed by Shubham Gaonkar. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
