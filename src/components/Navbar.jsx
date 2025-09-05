import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Shravan Vision
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/translation" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Translation</Link>
            <Link to="/accessibility" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Accessibility</Link>
            <Link to="/live-calls" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Live Calls</Link>
            <Link to="/ar-learning" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">AR Learning</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link to="/impact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Impact</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
