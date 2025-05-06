import React from 'react';

function HeroSection() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-xl font-extrabold tracking-tight text-gray sm:text-4xl">
            Unlock Savings With
            <br />
            <span className="text-3xl text-yellow">COUPON AI</span>
            <br />
            <h2 className="text-3xl text-yellow">Today!</h2>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Discover handpicked offers tailored to your preferences, helping you save more on every purchase.
          </p>
          <div className="mt-6">
            <button className="bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-black font-semibold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
        
        {/* Right Side Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="bg-yellow-200 p-4 rounded-lg">
            <img className="h-90 w-120" src="src/assets/basket.png" alt="Gift Basket" />
          </div>
        </div>
      </div>
      
      {/* Offers Section */}
      <div className="mt-10 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Best Coupons, and Cashback
        </h3>
        <p className='"text-lg font-semibold text-gray-900"'> offers </p>
        <div className="mt-6 grid grid-cols-1 gap-y-1 sm:grid-cols-3 sm:gap-x-1">
          <div className="bg-white p-4 rounded-lg">
            <button className="mt-4 bg-gradient-to-b from-[#FABC08] to-[#FF4500] text-white font-semibold h-30 w-50 py-2 px-4 rounded">
              <h4 className="text-xlg font-bold text-black">Holiday Best</h4>
              <p className="mt-2 text-sm text-black">Get the best deals for the holiday season.</p>
              <h3 className='text-lg font-semibold text-white'>Shop Now</h3>
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <button className="mt-4 bg-gradient-to-b from-[#FABC08] to-[#FF4500] hover:bg-color-orange text-black font-semibold py-2 px-4 rounded">
              <h4 className="text-xlg font-bold text-black">Amazon 25%</h4>
              <p className="mt-2 text-sm text-black">Get 25% off on selected Amazon products.</p>
              <h3 className='text-lg font-semibold text-white'>Shop Now</h3>
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <button className="mt-4 bg-gradient-to-b from-[#FABC08] to-[#FF4500] text-white font-semibold py-2 px-4 rounded">
              <h2 className="text-xlg font-bold text-black">Start With Couponal.</h2>
              <p className="mt-2 text-sm text-black">Start saving today with the best coupons.</p>
              <h3 className='text-lg font-semibold text-white'>Start Now</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
