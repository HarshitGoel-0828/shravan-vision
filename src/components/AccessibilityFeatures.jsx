import React, { useState } from 'react';

const AccessibilityFeatures = () => {
  const [hapticFeedback, setHapticFeedback] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);
  const [arLearning, setArLearning] = useState(false);
  const [largeFonts, setLargeFonts] = useState(false);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Accessibility Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Settings</h3>
            <div className="space-y-4">
              <label className="flex items-center">
                <input type="checkbox" checked={hapticFeedback} onChange={() => setHapticFeedback(!hapticFeedback)} className="mr-2" />
                Haptic Feedback
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={offlineMode} onChange={() => setOfflineMode(!offlineMode)} className="mr-2" />
                Offline Mode
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={arLearning} onChange={() => setArLearning(!arLearning)} className="mr-2" />
                AR Learning Mode
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={largeFonts} onChange={() => setLargeFonts(!largeFonts)} className="mr-2" />
                Large Readable Fonts
              </label>
            </div>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Regional Settings</h3>
            <select className="w-full border rounded px-4 py-2 mb-4">
              <option>Select Regional Sign Language</option>
              <option>North Indian ISL</option>
              <option>South Indian ISL</option>
              <option>East Indian ISL</option>
              <option>West Indian ISL</option>
            </select>
            <button className="btn-primary">Save Settings</button>
          </div>
        </div>
        <div className="card mt-8">
          <h3 className="text-xl font-bold mb-4">Help Guide</h3>
          <p className="mb-4">Welcome to Shravan Vision! Here's how to get started:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Click "Start Translation" to begin real-time ISL translation.</li>
            <li>Use the toggles to enable live video, voice input, or output options.</li>
            <li>Upload videos or enter text for translation.</li>
            <li>Enable accessibility features like haptic feedback and large fonts for better usability.</li>
            <li>Explore AR learning for interactive sign language practice.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityFeatures;
