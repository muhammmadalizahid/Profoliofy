import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';

const ProfoliofyLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#1E3A8A"/>
    <path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white"/>
  </svg>
);

class AuthErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
          <div className="text-center">
            <h2 className="text-xl text-red-600 mb-4">Something went wrong</h2>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-900 text-white px-4 py-2 rounded-lg"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(() => {
    const savedForm = sessionStorage.getItem('authForm');
    return savedForm ? JSON.parse(savedForm) : {
      name: '',
      email: '',
      password: ''
    };
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [socialLoading, setSocialLoading] = useState({ google: false, github: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    sessionStorage.setItem('authForm', JSON.stringify(updatedForm));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (!isLogin && form.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setSocialLoading(prev => ({ ...prev, google: true }));
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      console.error('Google login error:', error);
    } finally {
      setSocialLoading(prev => ({ ...prev, google: false }));
    }
  };

  const handleGithubLogin = async () => {
    setSocialLoading(prev => ({ ...prev, github: true }));
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      console.error('GitHub login error:', error);
    } finally {
      setSocialLoading(prev => ({ ...prev, github: false }));
    }
  };

  const getPasswordStrength = (password) => {
    const hasLength = password.length >= 8;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const strength = [hasLength, hasLower, hasUpper, hasNumber, hasSpecial]
      .filter(Boolean).length;
    
    return {
      score: strength,
      message: ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][strength - 1] || ''
    };
  };

  return (
    <AuthErrorBoundary>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-4 sm:py-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          {/* Panel Header - make it more compact on mobile */}
          <div className="p-4 sm:p-8 pb-0">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4">
              <ProfoliofyLogo />
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">PROFOLIOFY</h1>
            </div>
            <h2 className="text-lg sm:text-xl text-blue-900 text-center mb-4 sm:mb-6">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h2>
          </div>

          {/* Form Content - adjust padding for mobile */}
          <div className="p-4 sm:p-8 pt-0">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field (Sign Up Only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
                {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    value={form.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 pr-10 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
              </div>

              {/* Password Strength Indicator */}
              {form.password && (
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-500">Password strength:</span>
                    <span className={`text-xs ${
                      ['text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-emerald-500']
                      [getPasswordStrength(form.password).score - 1]
                    }`}>
                      {getPasswordStrength(form.password).message}
                    </span>
                  </div>
                  <div className="h-1 w-full bg-gray-200 rounded-full">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-emerald-500']
                        [getPasswordStrength(form.password).score - 1]
                      }`}
                      style={{ width: `${(getPasswordStrength(form.password).score / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Remember Me (Login Only) */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-blue-900 border-gray-300 rounded focus:ring-blue-900"
                    />
                    <span className="ml-2">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-900 hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  isLogin ? 'Sign in' : 'Sign up'
                )}
              </button>
            </form>

            {/* Adjust spacing for mobile */}
            <div className="mt-4 sm:mt-6 text-center text-sm text-gray-600">
              {isLogin ? (
                <>
                  Don't have an account?{' '}
                  <button 
                    onClick={() => setIsLogin(false)} 
                    className="text-blue-900 hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button 
                    onClick={() => setIsLogin(true)} 
                    className="text-blue-900 hover:underline font-medium"
                  >
                    Sign in
                  </button>
                </>
              )}
            </div>

            {/* Social Login section - adjust spacing */}
            <div className="mt-4 sm:mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500 text-xs sm:text-sm">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Adjust button sizes for mobile */}
              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
                {/* Google Button */}
                <button
                  onClick={handleGoogleLogin}
                  disabled={socialLoading.google}
                  className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 disabled:opacity-50"
                >
                  {socialLoading.google ? (
                    <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <FcGoogle className="h-5 w-5" />
                  )}
                </button>

                {/* GitHub Button */}
                <button
                  onClick={handleGithubLogin}
                  disabled={socialLoading.github}
                  className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 disabled:opacity-50"
                >
                  {socialLoading.github ? (
                    <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <FaGithub className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Policy Links - adjust text size and spacing */}
            <div className="mt-4 sm:mt-6 text-center text-xs text-gray-500 px-2 sm:px-0">
              <p className="leading-relaxed">
                By clicking {isLogin ? 'Sign in' : 'Sign up'}, you agree to our{' '}
                <a href="#" className="text-blue-900 hover:underline">Privacy Policy</a> and{' '}
                <a href="#" className="text-blue-900 hover:underline">Cookie Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthErrorBoundary>
  );
}