import React from 'react';

const ImpactBenefits = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Impact & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-green-600">Social Impact</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Seamless ISL ↔ Hindi/English communication</li>
              <li>Fosters inclusivity in education & society</li>
              <li>Empowers deaf and hard-of-hearing communities</li>
              <li>Reduces communication barriers in emergencies</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Economic Benefits</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>New job opportunities in AI and accessibility</li>
              <li>Reduced reliance on human interpreters</li>
              <li>Cost-effective communication solutions</li>
              <li>Boosts productivity in diverse workplaces</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-purple-600">Environmental Benefits</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Digital-first approach reduces paper usage</li>
              <li>Remote communication minimizes travel</li>
              <li>Energy-efficient AI processing</li>
              <li>Supports sustainable tech initiatives</li>
            </ul>
          </div>
        </div>
        <div className="card mt-8">
          <h3 className="text-xl font-bold mb-4">Key Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <h4 className="text-2xl font-bold text-blue-600">95%</h4>
              <p>Translation Accuracy</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-green-600">1M+</h4>
              <p>Potential Users</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-purple-600">50%</h4>
              <p>Cost Reduction</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-red-600">24/7</h4>
              <p>Availability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactBenefits;
