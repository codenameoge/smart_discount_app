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
import ClientImage from '../../../assets/Login.png';
import BackgroundColor from '../components/BackgroundColor';
import { FormInput } from '../components/form';
import styles from './Discountbanner.module.css';
import './login.css';

function Signup() {
  return (
    <div className="signup-form">
      <h2>Welcome back</h2>
      <p>let's make payment easy for you. login here.</p>
      <button type="sui">Sign in with SUI</button>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log in</button>
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
            src="src\assets\Login.png" 
            alt="Discount Offer" 
            className={styles.discountImage} 
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