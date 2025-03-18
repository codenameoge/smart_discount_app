import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import React from 'react';
import './Subscribe.css';

function Subscribe() {
  return (
    <div className="subscribe-container">
      <div className="subscribe-box">
        <h2>Subscribe</h2>
        <p>Join our newsletter for updates on discounts and more features.</p>
        <div className="input-container">
          <input type="email" placeholder="Enter your email" />
        </div>
        <button className="subscribe-button">Subscribe</button>
        <p className="privacy-text">
          By subscribing you agree to our <span className="privacy-link">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}

export default Subscribe;
