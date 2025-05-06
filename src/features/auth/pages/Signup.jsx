import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  useEffect(() => {
    const strengthRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (formData.password.length > 0) {
      if (strengthRegex.test(formData.password)) {
        setPasswordStrength('Strong');
      } else {
        setPasswordStrength('Weak');
      }
    } else {
      setPasswordStrength('');
    }

    setPasswordsMatch(formData.password === formData.confirmPassword);
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      toast.error("You must agree to the terms and policies.");
      return;
    }

    if (!passwordsMatch) {
      toast.error("Passwords do not match.");
      return;
    }

    const validStrength = passwordStrength === 'Strong';

    if (formData.email && formData.username && formData.password && validStrength) {
      navigate("/otp-verification", { state: { email: formData.email } });
      toast.success("Signup successful!");
    } else {
      toast.error("Please fill all fields with valid data.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <motion.div
        className="grid grid-cols-2 gap-6 w-full max-w-4xl bg-white rounded-lg shadow-md p-6 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-black"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back
        </button>

        {/* Signup Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl text-black font-semibold text-center mb-4">Get Started</h2>
          <p className="text-center text-gray-600 mb-6">
            Welcome to Coupon AI - let's make payment easy for you.
          </p>

          <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white hover:scale-105 hover:bg-orange-900 mb-4">
            <img src="src/assets/sui.png" alt="SUI Logo" className="w-5 h-5" />
            Sign up with SUI
          </button>

          <p className="text-center text-sm text-gray-600 mb-2">
            Don't have a Sui wallet? Create Sui wallet
            <a href="#" className="text-orange-500 text-lg ml-1 hover:underline">here</a>
          </p>

          {/* Horizontal OR Line */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500 text-xl">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
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
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
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
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {passwordStrength && (
                <p className={`text-sm mt-1 ${passwordStrength === 'Strong' ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordStrength} password
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className={`w-full p-2 border rounded-md focus:ring-2 ${passwordsMatch ? 'focus:ring-blue-500' : 'focus:ring-red-500'}`}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {!passwordsMatch && (
                <p className="text-red-600 text-sm mt-1">Passwords do not match</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label className="text-sm text-gray-700">I agree with the terms and policies</label>
            </div>

            <button
              type="submit"
              className="w-full p-2 border rounded-lg bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white hover:scale-105 hover:bg-orange-900 mt-4"
            >
              Sign up
            </button>
          </form>

          {/* Horizontal OR Line */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500 text-xl">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-grid gap-4">
            <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-md hover:scale-105 hover:bg-orange-300">
              <img src="src/assets/google.png" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-md hover:scale-105 hover:bg-orange-300">
              <img src="src/assets/apple.png" alt="Apple" className="w-5 h-5" />
              Sign in with Apple
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?
            <button
              onClick={() => navigate("/login")}
              className="text-orange-500 text-lg ml-1 hover:underline"
            >
              Login
            </button>
          </p>
        </div>

        {/* Discount Banner Section */}
        <motion.div
          className="flex flex-col justify-center items-center bg-gradient-to-r from-[#FABC08] to-[#FF4500] p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl text-white font-semibold text-center">Enter the Future of Discount Payment with AI</h2>
          <div className="flex flex-col items-center mt-4">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              NOW!
            </button>
            <img src="src/assets/signup2.png" alt="Discount Offer" className="w-100 h-90 mt-4" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;
