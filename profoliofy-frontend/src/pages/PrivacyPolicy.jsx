import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F4] py-6 sm:py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Responsive spacing and text */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-0">Privacy Policy</h1>
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
            <h2 className="text-xl font-semibold text-blue-900 mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We collect information that you provide directly to us, including name, email address, 
              and any other information you choose to include in your portfolio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">3. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information 
              to third parties without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">5. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any 
              changes by posting the new privacy policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this privacy policy, please contact us at: 
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

export default PrivacyPolicy;