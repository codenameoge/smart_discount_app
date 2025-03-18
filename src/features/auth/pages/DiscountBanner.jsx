import React from 'react';
import styles from './Discountbanner.module.css';

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

export default DiscountBanner;
