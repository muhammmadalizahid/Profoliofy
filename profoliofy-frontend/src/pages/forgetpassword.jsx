import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: Email, 2: Verification, 3: New Password
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Add your email verification API call here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setStep(2);
    } catch (err) {
      setError('Failed to send verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCodeVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Add your code verification API call here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setStep(3);
    } catch (err) {
      setError('Invalid verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    setError('');

    try {
      // Add your password reset API call here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      // Redirect to login page after successful reset
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F4] relative">
      {/* Sign In Button - Responsive positioning */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <Link
          to="/auth"
          className="bg-blue-900 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm sm:text-base"
        >
          Sign In
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-900 mb-6">
            {step === 1 && 'Forgot Password'}
            {step === 2 && 'Verify Email'}
            {step === 3 && 'Reset Password'}
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-lg text-sm">
              {error}
            </div>
          )}

          {step === 1 && (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-800 transition-colors ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : 'Send Verification Code'}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleCodeVerification} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Verification Code
                </label>
                <input
                  type="text"
                  required
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Enter verification code"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-800 transition-colors ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Verifying...' : 'Verify Code'}
              </button>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Confirm new password"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-800 transition-colors ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          )}

          <p className="mt-4 text-center text-sm text-gray-600">
            Remember your password?{' '}
            <Link to="/auth" className="text-blue-900 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;