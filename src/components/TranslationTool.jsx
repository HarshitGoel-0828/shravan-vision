import React, { useState } from 'react';

const TranslationTool = () => {
  const [translationResult, setTranslationResult] = useState('Translation will appear here...');
  const [liveVideo, setLiveVideo] = useState(false);
  const [voiceInput, setVoiceInput] = useState(false);
  const [textOutput, setTextOutput] = useState(true);
  const [voiceOutput, setVoiceOutput] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [cameraOn, setCameraOn] = useState(false);

  const startTranslation = () => {
    // Placeholder for AI integration
    setTranslationResult('Starting translation... (Placeholder for TensorFlow Lite/MediaPipe)');
  };

  const uploadVideo = () => {
    // Placeholder
    alert('Upload video functionality (Placeholder)');
  };

  const translateText = () => {
    // Placeholder for translation
    setTranslationResult(`Translated: ${textInput} (Placeholder for AI translation)`);
  };

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Translation Tool</h2>
        <div className="card bg-white bg-opacity-90">
          <div className="flex flex-wrap justify-center mb-6 gap-4">
            <button onClick={startTranslation} className="btn-primary">Start Translation</button>
            <button onClick={uploadVideo} className="btn-secondary">Upload/Sign Video</button>
            <button
              onClick={() => {
                if (!cameraOn) {
                  navigator.mediaDevices.getUserMedia({ video: true })
                    .then((stream) => {
                      const video = document.getElementById('inputVideo');
                      video.srcObject = stream;
                      setCameraOn(true);
                    })
                    .catch((err) => {
                      alert('Error accessing camera: ' + err.message);
                    });
                } else {
                  const video = document.getElementById('inputVideo');
                  const stream = video.srcObject;
                  if (stream) {
                    stream.getTracks().forEach(track => track.stop());
                  }
                  video.srcObject = null;
                  setCameraOn(false);
                }
              }}
              className="btn-primary"
            >
              {cameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
            </button>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="border rounded px-4 py-2"
              placeholder="Enter text to translate"
              aria-label="Text to translate"
            />
            <button onClick={translateText} className="btn-primary">Translate Text</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Input</h3>
              <div className="video-box mb-4">
                <video id="inputVideo" autoPlay muted></video>
              </div>
              <div className="flex gap-4">
                <label className="flex items-center text-gray-900">
                  <input
                    type="checkbox"
                    checked={liveVideo}
                    onChange={() => setLiveVideo(!liveVideo)}
                    className="mr-2"
                    aria-label="Enable live video input"
                  />
                  Live Video
                </label>
                <label className="flex items-center text-gray-900">
                  <input
                    type="checkbox"
                    checked={voiceInput}
                    onChange={() => setVoiceInput(!voiceInput)}
                    className="mr-2"
                    aria-label="Enable voice input"
                  />
                  Voice Input
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Output</h3>
              <div className="card p-4 mb-4 bg-white bg-opacity-90">
                <p>{translationResult}</p>
              </div>
              <div className="flex gap-4">
                <label className="flex items-center text-gray-900">
                  <input
                    type="checkbox"
                    checked={textOutput}
                    onChange={() => setTextOutput(!textOutput)}
                    className="mr-2"
                    aria-label="Enable text output"
                  />
                  Text Output
                </label>
                <label className="flex items-center text-gray-900">
                  <input
                    type="checkbox"
                    checked={voiceOutput}
                    onChange={() => setVoiceOutput(!voiceOutput)}
                    className="mr-2"
                    aria-label="Enable voice output"
                  />
                  Voice Output
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslationTool;
