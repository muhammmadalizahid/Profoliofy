import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// SVG Icons as components
const LoaderIcon = () => (
  <svg className="w-16 h-16 text-blue-600 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-16 h-16 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-16 h-16 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CreditCardIcon = () => (
  <svg className="w-10 h-10 text-blue-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const PaymentConfirmation = () => {
  const [status, setStatus] = useState('processing');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const paymentId = searchParams.get('payment_id');

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Simulate API call - replace with actual payment verification
        await new Promise(resolve => setTimeout(resolve, 3000));
        setStatus('success');
      } catch (error) {
        setStatus('failed');
      }
    };

    if (paymentId) {
      verifyPayment();
    }
  }, [paymentId]);

  const StatusCard = () => {
    const statusConfig = {
      processing: {
        icon: <LoaderIcon />,
        title: 'Processing Your Payment',
        message: 'We\'re verifying your payment details. This usually takes just a moment.',
        buttonText: null,
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-900'
      },
      success: {
        icon: <CheckIcon />,
        title: 'Payment Successful!',
        message: 'Your payment has been confirmed. You now have full access to all pro templates and features.',
        buttonText: 'Explore Pro Templates',
        bgColor: 'bg-green-50',
        textColor: 'text-green-900'
      },
      failed: {
        icon: <XIcon />,
        title: 'Payment Failed',
        message: 'We couldn\'t process your payment. Please check your payment details and try again.',
        buttonText: 'Try Payment Again',
        bgColor: 'bg-red-50',
        textColor: 'text-red-900'
      }
    };

    const { icon, title, message, buttonText, bgColor, textColor } = statusConfig[status];

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${bgColor} rounded-2xl shadow-lg p-8 max-w-md w-full border border-opacity-20 ${status === 'success' ? 'border-green-300' : status === 'failed' ? 'border-red-300' : 'border-blue-300'}`}
      >
        <div className="flex flex-col items-center">
          <div className="mb-6">
            {icon}
          </div>
          <h2 className={`text-2xl font-bold ${textColor} mb-4 text-center`}>
            {title}
          </h2>
          <p className={`${textColor} mb-6 text-center`}>
            {message}
          </p>
          {buttonText && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(status === 'success' ? '/templates' : '/pricing')}
              className={`w-full px-6 py-3 rounded-lg font-medium ${
                status === 'success' 
                  ? 'bg-blue-900 text-white hover:bg-blue-800' 
                  : 'bg-red-600 text-white hover:bg-red-700'
              } transition-all shadow-md`}
            >
              {buttonText}
            </motion.button>
          )}
          {status === 'success' && (
            <p className="text-sm text-gray-500 mt-4 text-center">
              Receipt has been sent to your email
            </p>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center p-5 bg-blue-100 rounded-full mb-6 shadow-inner mx-auto"
          >
            <CreditCardIcon />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Payment Confirmation
          </h1>
          <p className="text-lg text-gray-600">
            We're securing your access to premium portfolio templates
          </p>
        </motion.div>

        {/* Status Card */}
        <div className="flex justify-center">
          <StatusCard />
        </div>

        {/* Help Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mx-auto">
            <svg className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-gray-600">
              Need help? <a href="/contact" className="text-blue-900 font-medium hover:underline">Contact support</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;