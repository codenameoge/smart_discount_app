
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Support Section */}
        <div>
          <h6 className="text-white font-semibold mb-4">Support</h6>
          <ul>
            <li className="mb-2">
              <a href="mailto:couponolagmail.com" className="hover:text-gray-400">
                couponol@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+234-815-5569-693" className="hover:text-gray-400">
                +234-815-5569-693
              </a>
            </li>
          </ul>
        </div>

        {/* Account Section */}
        <div>
          <h6 className="text-white font-semibold mb-4">Account</h6>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                My Account
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Login / Register
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Cart
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h6 className="text-white font-semibold mb-4">Quick Link</h6>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Terms Of Use
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h6 className="text-white font-semibold mb-4">Download App</h6>
          <p className="text-sm mb-2">Save $3 with App New User Only</p>
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/80x80" // Replace with your QR code image
              alt="QR Code"
              className="w-16 h-16 mr-2"
            />
            <div>
              <a href="#" className="block mb-1">
                <img
                  src="https://via.placeholder.com/100x30/000/fff?Text=Google+Play" // Replace with your Google Play badge
                  alt="Google Play"
                  className="h-8"
                />
              </a>
              <a href="#">
                <img
                  src="https://via.placeholder.com/100x30/000/fff?Text=App+Store" // Replace with your App Store badge
                  alt="App Store"
                  className="h-8"
                />
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                {/* Facebook Icon */}
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2.4v-3h2.4V9.8c0-2.4 1.48-3.6 3.6-3.6 1.2 0 2.4.2 2.4 2.4V12h-2.4v3H16v6.8c4.56-0.93 8-4.96 8-9.8z"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                {/* Twitter Icon */}
                <path
                  fill="currentColor"
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                {/* Instagram Icon */}
                <path
                  fill="currentColor"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.252-1.691 4.771-4.919 4.919-1.266.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.205.012-3.584.07-4.849.148-3.252 1.691-4.771 4.919-4.919 1.265-.058 1.644-.069 4.849-.069m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78.998-9.886 3.054C1.06 5.981.016 8.324 0 11.663c.016 3.34 1.06 5.681 3.054 7.714 2.106 2.056 4.528 2.845 8.886 3.054 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.358-.2 6.78-.998 9.886-3.054 2.056-2.106 2.844-4.529 3.054-8.886.058-1.28.072-1.688.072-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.358-.998-6.78-3.054-9.886-2.106-2.056-4.529-2.844-8.886-3.054-1.28-.058-1.689-.072-4.948-.072z"
                />
                <path
                  fill="currentColor"
                  d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27m0-2.163a7.298 7.298 0 100 14.598 7.298 7.298 0 000-14.598m5.338 0a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                {/* LinkedIn Icon */}
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.39.49-1.63.95v-4.55H7.7v15.5h3.08v-7.7c0-2.14 1.09-3.49 3.13-3.49 2.19 0 3.63 1.7 3.63 3.95v7.24H19.5z"
                />
                <path
                  fill="currentColor"
                  d="M6.98 8.34a1.74 1.74 0 10-3.48 0 1.74 1.74 0 003.48 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        <p>&copy; Copyright CouponOla, 2025. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
