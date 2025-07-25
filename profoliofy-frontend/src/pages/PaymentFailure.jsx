import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const PaymentError = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const errorCode = searchParams.get('code') || 'payment_failed';

  const errorMessages = {
    payment_failed: "We couldn't process your payment.",
    card_declined: "Your card was declined. Please try a different payment method.",
    expired_card: "Your card has expired. Please update your card details.",
    insufficient_funds: "Insufficient funds in your account.",
    generic_error: "An unexpected error occurred during payment processing."
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 mb-6">
            <svg 
              className="h-10 w-10 text-red-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Failed
          </h2>
          <p className="text-gray-600 mb-6">
            {errorMessages[errorCode] || errorMessages['payment_failed']}
          </p>
          
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/pricing')}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Try Again
            </motion.button>
            
            <button
              onClick={() => navigate('/support')}
              className="w-full border border-red-600 text-red-600 hover:bg-red-50 py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Contact Support
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Error code: {errorCode}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentError;