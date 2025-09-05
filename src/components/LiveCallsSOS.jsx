import React from 'react';

const LiveCallsSOS = () => {
  const startCall = () => {
    // Placeholder for WebRTC integration
    alert('Starting live call... (Placeholder for WebRTC)');
  };

  const triggerSOS = () => {
    // Placeholder for emergency feature
    alert('SOS triggered! Emergency services notified. (Placeholder)');
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Live Calls & SOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card text-center">
            <h3 className="text-xl font-bold mb-4">Live Sign-to-Sign Calls</h3>
            <p className="mb-4">Connect with certified interpreters for real-time communication.</p>
            <button onClick={startCall} className="btn-primary">Start Live Call</button>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-bold mb-4">Emergency SOS</h3>
            <p className="mb-4">Quick gesture-based emergency alert for immediate assistance.</p>
            <button onClick={triggerSOS} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Trigger SOS</button>
          </div>
        </div>
        <div className="card mt-8">
          <h3 className="text-xl font-bold mb-4">Call History</h3>
          <ul className="space-y-2">
            <li>Call with Interpreter #123 - 10:30 AM</li>
            <li>Call with Interpreter #456 - 2:15 PM</li>
            <li>Emergency SOS - 5:45 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LiveCallsSOS;
