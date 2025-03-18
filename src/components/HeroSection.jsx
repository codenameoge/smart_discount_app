import { Link } from 'react-router-dom';
// import img1 from '../assets/Homepage/CX-Report-Med-Hero 1.png'; 
import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>Unlock Savings with COUPON AI <br />Today</h1>
        <h2>Discover Handpicked offers tailored to your preference, helping you save more on every purchase</h2>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
}
 
