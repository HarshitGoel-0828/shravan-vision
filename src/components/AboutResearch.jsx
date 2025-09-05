import React from 'react';

const AboutResearch = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About & Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Technical Background</h3>
            <p className="mb-4">Shravan Vision leverages cutting-edge AI and computer vision technologies to bridge the communication gap between Indian Sign Language (ISL) and spoken languages.</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>TensorFlow Lite:</strong> For on-device machine learning inference</li>
              <li><strong>MediaPipe:</strong> For real-time hand tracking and gesture recognition</li>
              <li><strong>ARCore:</strong> For augmented reality learning experiences</li>
              <li><strong>WebRTC:</strong> For peer-to-peer video communication</li>
              <li><strong>Firebase:</strong> For backend services and data storage</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Datasets & Research</h3>
            <p className="mb-4">Our model is trained on comprehensive ISL datasets and incorporates research from leading institutions.</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>IEEE Publications:</strong> Real-time gesture recognition papers</li>
              <li><strong>Kaggle Datasets:</strong> ISL gesture recognition datasets</li>
              <li><strong>arXiv Preprints:</strong> Latest research in sign language processing</li>
              <li><strong>Custom Dataset:</strong> 50,000+ annotated ISL gestures</li>
            </ul>
          </div>
        </div>
        <div className="card mt-8">
          <h3 className="text-xl font-bold mb-4">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h4 className="font-bold">Dr. AI Expert</h4>
              <p>Machine Learning Lead</p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h4 className="font-bold">Ms. UX Designer</h4>
              <p>User Experience Specialist</p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h4 className="font-bold">Mr. Dev Engineer</h4>
              <p>Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutResearch;
