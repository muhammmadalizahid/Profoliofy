// File: src/pages/Dashboard.jsx
import React, { useState } from "react";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [sitePreview, setSitePreview] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulated generation logic
    setTimeout(() => {
      setSitePreview({
        title: "Ali Khan – Software Developer",
        description: "A passionate developer with 3 years of experience in full-stack apps.",
        image: "https://via.placeholder.com/600x300", // replace later with actual screenshot
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#1B263B] text-white px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>

      {/* Prompt Input */}
      <div className="bg-[#243447] p-6 rounded-lg mb-8 shadow-md max-w-3xl">
        <h2 className="text-xl font-semibold mb-2">Describe Yourself</h2>
        <p className="text-gray-300 text-sm mb-4">Write who you are, your role, and any projects or skills you want featured.</p>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. I'm a front-end developer who builds clean UIs and has worked on 5 freelance projects..."
          rows={4}
          className="w-full p-3 rounded bg-white text-black text-sm"
        />
        <button
          onClick={handleGenerate}
          disabled={!prompt || isGenerating}
          className={`mt-4 px-5 py-2 rounded font-semibold ${
            prompt ? "bg-[#415A77] hover:bg-[#324960]" : "bg-gray-600"
          }`}
        >
          {isGenerating ? "Generating..." : "Generate My Site"}
        </button>
      </div>

      {/* Preview */}
      {sitePreview && (
        <div className="bg-[#243447] p-6 rounded-lg shadow-md max-w-3xl">
          <h3 className="text-xl font-semibold mb-2">Generated Preview</h3>
          <img
            src={sitePreview.image}
            alt="Site Preview"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h4 className="text-lg font-bold">{sitePreview.title}</h4>
          <p className="text-gray-300 text-sm">{sitePreview.description}</p>
          <div className="mt-4 space-x-4">
            <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">Publish</button>
            <button className="px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700">Edit Content</button>
            <button className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700">Download</button>
          </div>
        </div>
      )}
    </div>
  );
}
