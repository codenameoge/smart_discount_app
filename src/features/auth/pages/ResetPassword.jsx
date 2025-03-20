import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    // Perform password reset logic here (if needed)
    navigate('/password-reset-success');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 to-orange-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="src/assets/Logo.png" alt="Coupon AI Logo" className="h-8" /> 
        </div>

        <h2 className="text-2xl text-black font-semibold text-center mb-4">Set new password</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Your new password must be different from previously used passwords.
        </p>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your new password"
          />
          <p className="text-xs text-gray-600 mt-1">Must be at least 8 characters</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <button
          onClick={handleResetPassword}
          className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-orange-500 text-white hover:bg-orange-900 mb-4"
        >
          Reset Password
        </button>

        <div className="flex justify-center">
          <a href="/login" className="text-sm text-gray-600 hover:text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to log in
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
