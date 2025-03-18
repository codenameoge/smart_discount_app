import React, { useEffect, useRef, useState } from 'react';
import {
	Form,
	useNavigate,
	useParams,
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../app/store';
import { Back, Button, Card } from '../../../components';
import ClientImage from '../../../assets/SignUp.png';
import BackgroundColor from '../components/BackgroundColor';
import { FormInput } from '../components/form';
import styles from './Discountbanner.module.css';
import './SignupPage.css';

function Signup() {
  return (
    <div className="signup-form">
      <h2>Coupon AI.</h2>
      <p>Welcome to Coupon AI - let's make payment easy for you.</p>
      <form>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <select>
          <option value="">Shopping Preferences</option>
          {/* Add more options as needed */}
        </select>
        <button type="submit">Sign Up</button>
      </form>
      <div className="social-signup">
        <span>Or</span>
        <div className="social-icons">
          <a href="#" className="google-icon">
            <img src="src\assets\tel (1).png" alt="Google" />
          </a>
          <a href="#" className="facebook-icon">
            <img src="src\assets\tel (2).png" alt="Facebook" />
          </a>
          <a href="#" className="twitter-icon">
            <img src="src\assets\twitter.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

function DiscountBanner() {
  return (
    <div className={styles.discountBannerContainer}>
      <div className={styles.bannerContentContainer}>
        <h2>Enter the future of discount payment With AI</h2>
        <div className={styles.discountInfoContainer}>
          <h1>50%</h1>
          <h2>DISCOUNT</h2>
          <button>NOW!</button>
          <img 
            src="src\assets\SignUP.png" 
            alt="Discount Offer" 
            className={styles.discountImage} 
          />
        </div>
      </div>
    </div>
  );
}

function SignupWithBanner() {
  return (
    <div className="signup-banner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Signup />
      <DiscountBanner />
    </div>
  );
}

export default SignupWithBanner;