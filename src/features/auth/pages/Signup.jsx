import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation before redirecting
    if (formData.email && formData.username && formData.password) {
      navigate("/otp-verification", { state: { email: formData.email } });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        {/* Signup Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl text-black font-semibold text-center mb-4">Get Started</h2>
          <p className="text-center text-gray-600 mb-6">Welcome to Coupon AI - let's make payment easy for you.</p>

          <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-orange-500 text-white hover:bg-blue-600 mb-4">
            <img src="src/assets/sui.png" alt="SUI Logo" className="w-5 h-5" />
            Sign up with SUI
          </button>

          <p className="text-center text-sm text-gray-600 mb-6">
            Don't have a Sui wallet? Create Sui wallet
            <a href="#" className="text-orange-500 text-lg ml-1 hover:underline">here</a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-orange-500 text-white hover:bg-blue-600 mb-4 mt-10">
                Sign up
              </button>
              <p className="text-center text-sm text-gray-600 mb-6">
              Already have an account?
              <button
                onClick={() => navigate("/login")}
                className="text-orange-500 text-lg ml-1 hover:underline"
              >
                Login
              </button>
            </p>
            </div>
            
            <div className="flex justify-center gap-4 mt-3">
            <p className="text-center text-sm text-gray-600 mb-6">
              By continuing you agree to our Terms of Service and Privacy Policy
            </p>
            </div>

           
          </form>
        </div>

        {/* Discount Banner Section */}
        <div className="flex flex-col justify-center items-center bg-orange-500 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center">Enter the Future of Discount Payment with AI</h2>
          <div className="flex flex-col items-center mt-4">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              NOW!
            </button>
            <img src="src/assets/signup2.png" alt="Discount Offer" className="w-100 h-90 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
