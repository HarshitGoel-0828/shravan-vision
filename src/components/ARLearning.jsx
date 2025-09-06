import React, { useState } from 'react';

const ARLearning = () => {
  const [progress, setProgress] = useState(65);
  const [badges, setBadges] = useState(['Beginner', 'Quick Learner']);

  const practiceSign = () => {
    // Placeholder for AR integration
    alert('Starting AR practice... (Placeholder for ARCore)');
    setProgress(progress + 5);
  };

  return (
    <div className="py-16 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Gamified AR Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">AR Practice Session</h3>
            <div className="video-box mb-4">
              <video id="arVideo" autoPlay muted></video>
            </div>
            <button onClick={practiceSign} className="btn-primary">Start AR Practice</button>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Progress & Achievements</h3>
            <div className="mb-4">
              <p className="mb-2">Progress: {progress}%</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
            <div>
              <p className="mb-2">Badges Earned:</p>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <span key={index} className="bg-yellow-400 text-black px-2 py-1 rounded">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-8">
          <h3 className="text-xl font-bold mb-4">Learning Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded p-4">
              <h4 className="font-bold">Basic Signs</h4>
              <p>Learn fundamental ISL signs.</p>
              <button className="btn-primary mt-2">Start Module</button>
            </div>
            <div className="border rounded p-4">
              <h4 className="font-bold">Conversational ISL</h4>
              <p>Practice everyday conversations.</p>
              <button className="btn-primary mt-2">Start Module</button>
            </div>
            <div className="border rounded p-4">
              <h4 className="font-bold">Advanced Gestures</h4>
              <p>Master complex sign combinations.</p>
              <button className="btn-primary mt-2">Start Module</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARLearning;
