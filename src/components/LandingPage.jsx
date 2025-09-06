import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shravan Vision</h1>
          <p className="text-xl md:text-2xl mb-8">Bridging Communication Between ISL & Spoken Languages</p>
          <p className="text-lg mb-8">Embodying innovation, inclusivity, and accessibility for seamless interactions in educational and emergency contexts.</p>
          <Link to="/translation" className="btn-primary mt-8">Try the Demo</Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Our Mission</h2>
          <p className="text-lg">To empower deaf and hard-of-hearing individuals with real-time, AI-powered ISL translation, fostering inclusivity and accessibility worldwide.</p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-purple-100 bg-opacity-20 text-white text-center p-8">
              <h3 className="text-2xl font-extrabold mb-4">Translation Tool</h3>
              <p className="mb-6">Access bi-directional ISL↔English/Hindi translations instantly.</p>
              <Link to="/translation" className="btn-primary bg-green-500 hover:bg-green-600 mt-6 mb-6">Get Started</Link>
            </div>
            <div className="card bg-pink-100 bg-opacity-20 text-white text-center p-8">
              <h3 className="text-2xl font-extrabold mb-4">AR Learning</h3>
              <p className="mb-6">Learn sign language through gamified augmented reality.</p>
              <Link to="/ar-learning" className="btn-primary bg-purple-500 hover:bg-purple-600 mt-6 mb-6">Learn Now</Link>
            </div>
            <div className="card bg-red-100 bg-opacity-20 text-white text-center p-8">
              <h3 className="text-2xl font-extrabold mb-4">Live Calls</h3>
              <p className="mb-6">Connect with interpreters for real-time sign-to-sign communication.</p>
              <Link to="/live-calls" className="btn-primary bg-orange-500 hover:bg-orange-600 mt-6 mb-6">Start Call</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
