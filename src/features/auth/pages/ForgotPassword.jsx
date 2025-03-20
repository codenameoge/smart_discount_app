import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      navigate('/password-reset');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-center mb-6">
          <span className="text-xl font-semibold text-gray-800">Coupon AI.</span>
        </div>
        <h2 className="text-2xl text-black font-bold text-center mb-4">Forgot Password?</h2>
        <p className="text-center text-gray-600 mb-6">No worries, we'll send you reset instructions.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-orange-200 focus:border-orange-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-orange-600 text-black hover:bg-green-500 mb-4">
            Reset Password
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-sm text-gray-600 hover:text-gray-800 flex items-center justify-center hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L6.414 9H17a1 1 0 110 2H6.414l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to log in
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
