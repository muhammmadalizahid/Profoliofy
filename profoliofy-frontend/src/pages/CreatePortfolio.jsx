import React, { useState, useEffect } from "react";
import { User, Briefcase, Mail, Phone, MapPin, Code, Award, Globe, Heart, Palette, Sparkles, Monitor, Building, Paintbrush, Gem } from "lucide-react";
import { debounce } from 'lodash';
import toast from 'react-hot-toast';

const InputField = React.memo(({ 
  icon: Icon, 
  label, 
  type = "text", 
  required = false, 
  field, 
  placeholder, 
  multiline = false, 
  form,
  handleChange 
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      const inputs = Array.from(document.querySelectorAll('input, textarea'));
      const index = inputs.indexOf(e.target);
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  };

  return (
    <div className="group relative">
      <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
        <Icon className="w-4 h-4 text-cyan-400" />
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        {multiline ? (
          <textarea
            name={field}
            className="w-full px-4 py-3 bg-gray-900 border rounded-xl transition-all duration-300 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={form[field] || ''}
            onChange={(e) => handleChange(field, e.target.value)}
            placeholder={placeholder}
            required={required}
          />
        ) : (
          <input
            type={type}
            name={field}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-3 bg-gray-900 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={form[field] || ''}
            onChange={(e) => handleChange(field, e.target.value)}
            placeholder={placeholder}
            required={required}
          />
        )}
      </div>
    </div>
  );
});

const ProgressBar = ({ progress }) => (
  <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
    <div 
      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
      style={{ width: `${progress}%` }}
    />
  </div>
);

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
  const [errors, setErrors] = useState({});
  const [formProgress, setFormProgress] = useState(0);

  useEffect(() => {
    const savedForm = localStorage.getItem('portfolioForm');
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  const saveFormToLocal = debounce((formData) => {
    localStorage.setItem('portfolioForm', JSON.stringify(formData));
  }, 500);

  const handleChange = (field, value) => {
    const updatedForm = {
      ...form,
      [field]: value
    };
    
    setForm(updatedForm);
    saveFormToLocal(updatedForm);  // Pass the updated form directly
  };

  const handleDesignToggle = (style) => {
    setForm(prev => ({
      ...prev,
      designStyle: prev.designStyle.includes(style)
        ? prev.designStyle.filter(s => s !== style)
        : [...prev.designStyle, style]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['name', 'profession', 'bio', 'skills', 'location', 'email'];
    
    requiredFields.forEach(field => {
      if (!form[field].trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (form.designStyle.length === 0) {
      newErrors.designStyle = 'Please select at least one design style';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }
    console.log("Prompt Data:", form);
  };

  

  return (
    <div className="min-h-screen bg-[#1B263B] text-white relative overflow-hidden">
      {/* Visual tweaks and fixes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#415A77] rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#243447] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700" />
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-[#0D1B2A] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
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

        <ProgressBar />

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-12">
          {/* Personal Info Section */}
          <section className="bg-[#243447] bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <User className="w-6 h-6" /> Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField 
                icon={User} 
                label="Full Name" 
                field="name" 
                placeholder="Your full name" 
                required 
                form={form}
                handleChange={handleChange}
              />
              <InputField icon={Briefcase} label="Profession" field="profession" placeholder="Your profession" required form={form} handleChange={handleChange} />
              <div className="md:col-span-2">
                <InputField icon={User} label="Short Bio" field="bio" placeholder="Brief bio" required multiline form={form} handleChange={handleChange} />
              </div>
              <InputField icon={Code} label="Skills" field="skills" placeholder="Your skills" required form={form} handleChange={handleChange} />
              <InputField icon={MapPin} label="Location" field="location" placeholder="City, Country" required form={form} handleChange={handleChange} />
            </div>
          </section>

          {/* Contact Info */}
          <section className="bg-[#243447] bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6" /> Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField icon={Mail} label="Email" type="email" field="email" placeholder="you@example.com" required form={form} handleChange={handleChange} />
              <InputField icon={Phone} label="Phone" type="text" field="phone" placeholder="Phone number" form={form} handleChange={handleChange} />
              <InputField icon={Globe} label="LinkedIn" type="url" field="linkedin" placeholder="LinkedIn URL" form={form} handleChange={handleChange} />
              <InputField icon={Code} label="GitHub" type="url" field="github" placeholder="GitHub URL" form={form} handleChange={handleChange} />
              <div className="md:col-span-2">
                <InputField icon={Globe} label="Other Socials" field="social" placeholder="Twitter, Instagram, etc." form={form} handleChange={handleChange} />
              </div>
            </div>
          </section>

          {/* Professional Section */}
          <section className="bg-[#243447] bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6" /> Professional Background
            </h2>
            <div className="space-y-6">
              <InputField icon={Award} label="Education" field="education" placeholder="Your education" multiline form={form} handleChange={handleChange} />
              <InputField icon={Briefcase} label="Work Experience" field="experience" placeholder="Your experience" multiline form={form} handleChange={handleChange} />
              <InputField icon={Award} label="Certifications" field="certifications" placeholder="Certifications" multiline form={form} handleChange={handleChange} />
              <InputField icon={Heart} label="Personal Motto" field="motto" placeholder="Motto or philosophy" form={form} handleChange={handleChange} />
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