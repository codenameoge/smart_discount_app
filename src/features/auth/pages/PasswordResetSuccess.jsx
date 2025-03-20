import React from 'react';
import { useNavigate } from 'react-router-dom';

function PasswordResetSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="src/assets/Logo.png" alt="Coupon AI Logo" className="h-8" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl text-black font-semibold mb-4">Password reset</h2>
          <p className="text-gray-600 mb-6">
            Your password has been successfully reset. Click below to log in
          </p>
          <button
            onClick={() => navigate('/FindDiscount')}
            className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-orange-500 text-white hover:bg-orange-900 mb-4"
          >
            Continue
          </button>
          <div className="mt-4">
            <button
              onClick={() => navigate('/login')}
              className="flex items-center justify-center text-sm text-gray-600 hover:text-orange-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetSuccess;
