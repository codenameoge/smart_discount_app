import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PasswordReset = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.email || "your email"; // Get email from Forgot Password screen

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <span className="text-xl font-semibold text-gray-800">Coupon Al.</span>
        </div>

        <div className="text-center">
          <h2 className="text-2xl text-black font-bold mb-4">Check your email</h2>
          <p className="text-gray-600 mb-6">
            We sent a password reset link to <span className="font-medium">{userEmail}</span>
          </p>

          <button
            onClick={() => navigate('/new-password')}
            className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-orange-500 text-white hover:bg-orange-900 mb-4"
          >
            Open email app
          </button>

          <p className="text-sm text-gray-600">
            Didn't receive the email?{' '}
            <button
              onClick={() => window.location.reload()}
              className="text-green-600 hover:underline"
            >
              Click to resend
            </button>
          </p>

          <div className="mt-8">
            <button
              onClick={() => navigate('/login')}
              className="flex items-center justify-center text-sm text-gray-600 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
