import React, { useState } from 'react';
import styles from './Discountbanner.module.css';
import './login.css';

function Signup() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(value)) {
      setError("Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.");
    } else {
      setError('');
    }
  };

  return (
    <div className="signup-form">
      <h2>Welcome back</h2>
      <p>Let's make payment easy for you. Login here.</p>
      <button type="sui" className="flex items-center gap-2 p-2 border rounded-lg bg-blue-500 text-black hover:bg-blue-600">
        <img src="src/assets/sui.png" alt="SUI Logo" className="w-5 h-5" />
        Sign in with SUI
      </button>

      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-3xl font-medium text-gray-700">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-3xl font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        </div>
        <button type="submit">Sign in</button>
        <a href="#" className="text-orange-500 text-sm mt-2 hover:underline">Forgot Password?</a>
      </form>

      <div className="social-signup">
        <span>Or</span>
        <div className="social-icons">
          <a href="#" className="google-icon">
            <img src="src/assets/google.png" alt="Google" />
          </a>
          <a href="#" className="facebook-icon">
            <img src="src/assets/tel (2).png" alt="Facebook" />
          </a>
          <a href="#" className="twitter-icon">
            <img src="src/assets/twitter.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

function DiscountBanner() {
  return (
    <div className="discountBannerContainer" style={{ height: '120%' }}>
      <div className="banner-content-container" style={{ height: '120%' }}>
        <h2>Enter the future of discount payment With AI</h2>
        <div className="discount-info-container">
          <h1>50%</h1>
          <h2>DISCOUNT</h2>
          <button>NOW!</button>
          <img 
            src="src/assets/signin.png" 
            alt="Discount Offer" 
            className="discountImage" 
          />
        </div>
      </div>
    </div>
  );
}

function LoginWithBanner() {
  return (
    <div className="signup-banner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Signup />
      <DiscountBanner />
    </div>
  );
}

export default LoginWithBanner;
