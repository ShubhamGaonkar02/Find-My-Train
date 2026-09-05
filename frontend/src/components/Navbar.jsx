import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, ExternalLink } from 'lucide-react';
import { ThemeContext } from '../App';
import logo from '../logo.jpg';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-600 shadow-md flex-shrink-0">
              <img
                src={logo}
                alt="Website Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              FindMyTrain
            </span>
          </Link>
          <div className="flex items-center space-x-3">
            <a
              href="https://find-my-train-ntes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-50 hover:bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:hover:bg-brand-800/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800 transition-all shadow-sm"
              title="Track live train status and PNR enquiry"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="hidden sm:inline">Live Status / PNR</span>
              <span className="sm:hidden">NTES Live</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
