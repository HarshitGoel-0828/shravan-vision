import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-blue-400">
              Shravan Vision
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/translation" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Translation</Link>
            <Link to="/accessibility" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Accessibility</Link>
            <Link to="/live-calls" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Live Calls</Link>
            <Link to="/ar-learning" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">AR Learning</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link to="/impact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Impact</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            <button
              onClick={toggleDarkMode}
              className={`flex items-center px-3 py-1 rounded-md font-medium transition-colors duration-300 ${
                darkMode
                  ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500'
                  : 'bg-gray-800 text-gray-100 hover:bg-gray-700'
              }`}
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {darkMode ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z" />
                  </svg>
                  Light Mode
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                  </svg>
                  Dark Mode
                </>
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/translation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>Translation</Link>
            <Link to="/accessibility" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>Accessibility</Link>
            <Link to="/live-calls" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>Live Calls</Link>
            <Link to="/ar-learning" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>AR Learning</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/impact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>Impact</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</Link>
            <button onClick={() => { toggleDarkMode(); setMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
