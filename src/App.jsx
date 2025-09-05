import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import TranslationTool from './components/TranslationTool';
import AccessibilityFeatures from './components/AccessibilityFeatures';
import LiveCallsSOS from './components/LiveCallsSOS';
import ARLearning from './components/ARLearning';
import AboutResearch from './components/AboutResearch';
import ImpactBenefits from './components/ImpactBenefits';
import ContactSupport from './components/ContactSupport';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/translation" element={<TranslationTool />} />
          <Route path="/accessibility" element={<AccessibilityFeatures />} />
          <Route path="/live-calls" element={<LiveCallsSOS />} />
          <Route path="/ar-learning" element={<ARLearning />} />
          <Route path="/about" element={<AboutResearch />} />
          <Route path="/impact" element={<ImpactBenefits />} />
          <Route path="/contact" element={<ContactSupport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
