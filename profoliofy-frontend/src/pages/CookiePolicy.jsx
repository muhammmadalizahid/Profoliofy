import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F4] py-6 sm:py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Responsive spacing and text */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-0">Cookie Policy</h1>
          <Link
            to="/auth"
            className="text-blue-900 hover:underline font-medium text-sm sm:text-base"
          >
            Back to Sign In
          </Link>
        </div>

        {/* Content - Responsive padding and text sizes */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 space-y-4 sm:space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">1. What Are Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are stored on your computer or mobile device when 
              you visit our website. They help us make your experience better.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-2">
              <li>To keep you signed in</li>
              <li>To remember your preferences</li>
              <li>To understand how you use our website</li>
              <li>To improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Essential Cookies</h3>
                <p className="text-gray-700">Required for the website to function properly.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Preference Cookies</h3>
                <p className="text-gray-700">Remember your settings and preferences.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Analytics Cookies</h3>
                <p className="text-gray-700">Help us understand how visitors interact with our website.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">4. Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              You can control and/or delete cookies as you wish. You can delete all cookies that are 
              already on your computer and you can set most browsers to prevent them from being placed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">5. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about our cookie policy, please contact us at:
              <a href="mailto:support@profoliofy.com" className="text-blue-900 hover:underline ml-1">
                support@profoliofy.com
              </a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          Last updated: July 2025
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;