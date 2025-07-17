import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Template data - you can expand this
const templates = [
  {
    id: 1,
    name: 'Minimal',
    description: 'Clean and modern design focusing on content',
    image: '/templates/minimal.png', // Add your template preview images
    features: ['Responsive', 'Dark/Light mode', 'Smooth transitions']
  },
  {
    id: 2,
    name: 'Creative',
    description: 'Bold and artistic layout for creative professionals',
    image: '/templates/creative.png',
    features: ['Interactive elements', 'Portfolio gallery', 'Custom animations']
  },
  {
    id: 3,
    name: 'Professional',
    description: 'Traditional and sophisticated design for business professionals',
    image: '/templates/professional.png',
    features: ['Contact form', 'Resume section', 'Testimonials']
  },
  // Add more templates as needed
];

const TemplateSelection = () => {
  const navigate = useNavigate();

  const handleTemplateSelect = (templateId) => {
    navigate(`/create-portfolio?template=${templateId}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1B263B]">
      <Navbar className="text-white" /> {/* Add text-white class */}
      <main className="flex-grow">
        <div className="relative text-white overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#415A77] rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
            <div className="absolute top-40 right-20 w-72 h-72 bg-[#243447] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700" />
            <div className="absolute bottom-20 left-40 w-72 h-72 bg-[#0D1B2A] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm mb-6">
                <Code className="w-8 h-8 text-cyan-400" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Choose Your Template
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Select a template that best represents your professional style
              </p>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="bg-[#243447] bg-opacity-90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
                >
                  {/* Image container with fixed aspect ratio */}
                  <div className="relative w-full pt-[56.25%]">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  {/* Content container with flex-grow to push button to bottom */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                      {template.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {template.description}
                    </p>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {template.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-400">
                          <ArrowRight className="w-4 h-4 mr-2 text-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleTemplateSelect(template.id)}
                      className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 mt-auto"
                    >
                      Use This Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplateSelection;
