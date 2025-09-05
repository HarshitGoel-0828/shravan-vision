import React, { useState } from 'react';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Form submitted! (Placeholder for backend integration)');
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact & Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 h-32"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Support Resources</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">FAQ</h4>
                <p>Find answers to common questions about using Shravan Vision.</p>
                <a href="#" className="text-blue-600 hover:underline">View FAQ</a>
              </div>
              <div>
                <h4 className="font-bold">User Guide</h4>
                <p>Step-by-step instructions for all features.</p>
                <a href="#" className="text-blue-600 hover:underline">Download Guide</a>
              </div>
              <div>
                <h4 className="font-bold">Feedback</h4>
                <p>Help us improve by sharing your experience.</p>
                <a href="#" className="text-blue-600 hover:underline">Give Feedback</a>
              </div>
              <div>
                <h4 className="font-bold">Contact Info</h4>
                <p>Email: support@shravanvision.com</p>
                <p>Phone: +91-123-456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
