// File: src/pages/AuthPages.jsx
import React, { useState, useRef } from "react";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Added remember me state
  const [socialLoading, setSocialLoading] = useState({
    google: false,
    github: false
  });
  const emailInputRef = useRef(null); // Ref for email input

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation (min 8 chars, 1 uppercase, 1 number)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Password must be at least 8 characters with 1 uppercase letter and 1 number";
    }

    // Name validation for signup
    if (!isLogin && form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setApiError("");

    try {
      // Your API call here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      // Handle successful auth
    } catch (error) {
      setApiError("Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setSocialLoading(prev => ({ ...prev, google: true }));
    try {
      // Your Google login logic
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      setApiError('Google login failed. Please try again.');
    } finally {
      setSocialLoading(prev => ({ ...prev, google: false }));
    }
  };

  const isFormValid =
    form.email && form.password && (isLogin || form.name);

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, label: '' };
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    };
    const strength = Object.values(checks).filter(Boolean).length;
    const label = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][strength - 1];
    return { strength, label };
  };

  return (
    <div className="min-h-screen bg-[#1B263B] text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#243447] bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md space-y-6"
      >
        {/* Branding */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold mb-2">Profoliofy</h1>
          <p className="text-gray-400 text-sm">
            {isLogin
              ? "Welcome back! Log in to continue."
              : "Create an account to get started."}
          </p>
        </div>

        {/* Name (only for signup) */}
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#415A77]"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            ref={emailInputRef}
            autoFocus
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={isLoading}
            className={`w-full p-2 rounded bg-white text-black focus:outline-none focus:ring-2 
              ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#415A77]'}`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#415A77]"
          />
          <div className="flex items-center justify-end mt-2">
            <label 
              htmlFor="showPassword" 
              className="text-xs text-gray-300 mr-2 cursor-pointer hover:text-gray-200"
            >
              Show password
            </label>
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="rounded border-gray-300 text-[#415A77] focus:ring-[#415A77]"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
          {!isLogin && (
            <div className="mt-2">
              <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    ['w-1/5 bg-red-500', 
                     'w-2/5 bg-orange-500',
                     'w-3/5 bg-yellow-500',
                     'w-4/5 bg-lime-500',
                     'w-full bg-green-500'
                    ][getPasswordStrength(form.password).strength - 1] || ''
                  }`}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {getPasswordStrength(form.password).label}
              </p>
            </div>
          )}
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded border-gray-300 text-[#415A77] focus:ring-[#415A77]"
            />
            <span className="ml-2 text-sm text-gray-300">Remember me</span>
          </label>
          <button
            type="button"
            className="text-sm text-gray-300 hover:underline"
            onClick={() => {/* Add forgot password handler */}}
          >
            Forgot password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className={`w-full py-2 px-4 rounded font-semibold relative ${
            isFormValid && !isLoading
              ? "bg-[#415A77] hover:bg-[#324960]"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </span>
          ) : (
            isLogin ? "Login" : "Create Account"
          )}
        </button>

        {/* API Error Message */}
        {apiError && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded text-sm text-center">
            {apiError}
          </div>
        )}

        {/* Toggle Link */}
        <p className="text-center text-sm text-gray-300">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 underline hover:text-white"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>

        {/* Optional OAuth Placeholder */}
        <div className="text-center text-gray-400 my-4 text-sm">or</div>
        <div className="space-y-3">
          <button 
            type="button"
            className="w-full py-2 px-4 border border-gray-600 rounded hover:bg-gray-700 text-sm flex items-center justify-center gap-2 transition-colors"
            onClick={handleGoogleLogin}
            disabled={socialLoading.google}
          >
            {socialLoading.google ? (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <FcGoogle className="w-5 h-5" />
            )}
            {socialLoading.google ? "Signing in..." : "Continue with Google"}
          </button>
          <button 
            type="button"
            className="w-full py-2 px-4 border border-gray-600 rounded hover:bg-gray-700 text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            Continue with GitHub
          </button>
        </div>
      </form>
    </div>
  );
}
