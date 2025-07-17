import React, { useState } from "react";
import { User, Briefcase, Mail, Phone, MapPin, Code, Award, Globe, Heart, Palette, Sparkles, Monitor, Building, Paintbrush, Gem } from "lucide-react";

const designOptions = [
  { label: "Minimal", emoji: "✨", icon: Sparkles, color: "from-slate-400 to-slate-600" },
  { label: "Modern", emoji: "💻", icon: Monitor, color: "from-blue-400 to-blue-600" },
  { label: "Professional", emoji: "🏢", icon: Building, color: "from-gray-400 to-gray-600" },
  { label: "Creative", emoji: "🎨", icon: Paintbrush, color: "from-purple-400 to-pink-600" },
  { label: "Elegant", emoji: "💎", icon: Gem, color: "from-amber-400 to-amber-600" },
];

const CreatePortfolio = () => {
  const [form, setForm] = useState({
    name: "",
    profession: "",
    bio: "",
    skills: "",
    location: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    education: "",
    experience: "",
    certifications: "",
    social: "",
    motto: "",
    designStyle: []
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleDesignToggle = (style) => {
    setForm(prev => ({
      ...prev,
      designStyle: prev.designStyle.includes(style)
        ? prev.designStyle.filter(s => s !== style)
        : [...prev.designStyle, style]
    }));
  };

  const handleSubmit = () => {
    console.log("Prompt Data:", form);
  };

  const InputField = ({ icon: Icon, label, type = "text", required = false, field, placeholder, multiline = false }) => (
    <div className="group relative">
      <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
        <Icon className="w-4 h-4 text-cyan-400" />
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        {multiline ? (
          <textarea
            className={`w-full px-4 py-3 bg-gray-900 border rounded-xl transition-all duration-300 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            value={form[field]}
            onChange={e => handleChange(field, e.target.value)}
            placeholder={placeholder}
            required={required}
          />
        ) : (
          <input
            type={type}
            className={`w-full px-4 py-3 bg-gray-900 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            value={form[field]}
            onChange={e => handleChange(field, e.target.value)}
            placeholder={placeholder}
            required={required}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f2c] via-[#10193d] to-[#0a0f2c] text-white relative overflow-hidden">
      {/* Visual tweaks and fixes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700" />
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm mb-6">
            <Code className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Create Your Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your professional story into a stunning digital experience.
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-12">
          {/* Personal Info Section */}
          <section className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <User className="w-6 h-6" /> Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField icon={User} label="Full Name" field="name" placeholder="Your full name" required />
              <InputField icon={Briefcase} label="Profession" field="profession" placeholder="Your profession" required />
              <div className="md:col-span-2">
                <InputField icon={User} label="Short Bio" field="bio" placeholder="Brief bio" required multiline />
              </div>
              <InputField icon={Code} label="Skills" field="skills" placeholder="Your skills" required />
              <InputField icon={MapPin} label="Location" field="location" placeholder="City, Country" required />
            </div>
          </section>

          {/* Contact Info */}
          <section className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6" /> Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField icon={Mail} label="Email" type="email" field="email" placeholder="you@example.com" required />
              <InputField icon={Phone} label="Phone" type="text" field="phone" placeholder="Phone number" />
              <InputField icon={Globe} label="LinkedIn" type="url" field="linkedin" placeholder="LinkedIn URL" />
              <InputField icon={Code} label="GitHub" type="url" field="github" placeholder="GitHub URL" />
              <div className="md:col-span-2">
                <InputField icon={Globe} label="Other Socials" field="social" placeholder="Twitter, Instagram, etc." />
              </div>
            </div>
          </section>

          {/* Professional Section */}
          <section className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6" /> Professional Background
            </h2>
            <div className="space-y-6">
              <InputField icon={Award} label="Education" field="education" placeholder="Your education" multiline />
              <InputField icon={Briefcase} label="Work Experience" field="experience" placeholder="Your experience" multiline />
              <InputField icon={Award} label="Certifications" field="certifications" placeholder="Certifications" multiline />
              <InputField icon={Heart} label="Personal Motto" field="motto" placeholder="Motto or philosophy" />
            </div>
          </section>

          {/* Design Style */}
          <section className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <Palette className="w-6 h-6" /> Design Style <span className="text-sm text-gray-400 font-normal">(Select multiple)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {designOptions.map((option, i) => {
                const Icon = option.icon;
                const isSelected = form.designStyle.includes(option.label);

                return (
                  <button
                    key={i}
                    type="button"
                    className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      isSelected
                        ? "border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/25"
                        : "border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-700/50"
                    }`}
                    onClick={() => handleDesignToggle(option.label)}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className={`p-3 rounded-xl ${isSelected ? "bg-cyan-500/20 text-cyan-400" : "bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50"}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`font-medium ${isSelected ? "text-cyan-400" : "text-gray-300"}`}>{option.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 text-lg">🎯 Generate My Portfolio</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePortfolio;