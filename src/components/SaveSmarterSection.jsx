import React from 'react';

function SaveSmarterSection() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Image on the left */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              className="h-90 max-w-full"
              src="src/assets/cart.png" // Replace with your image URL
              alt="Shopping cart with boxes"
            />
          </div>

          {/* Content on the right */}
          <div className="lg:w-1/2 ml-20 mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Save Smarter, Shop Faster <span role="img" aria-label="light bulb">💡</span>
            </h2>
            <div className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">AI-Powered Discounts</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We automatically find and apply the best working coupons in real-time.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m0-4c1.667 0 3-1.333 3-3s-1.333-3-3-3-3 1.333-3 3 1.333 3 3 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">One-Click Savings</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Enjoy savings at checkout with auto-applied discounts.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yelloow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0118.07 3H21a2 2 0 012 2v5.66a2 2 0 01-.581 1.414l-4.223 4.223a2 2 0 01-2.828 0L9 15.34a2 2 0 01-2.828 0L3.586 19.414A2 2 0 013 17.66V9z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Effortless Payments</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Pay easily with present currency conversion via Blockchain.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Instant Rewards</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Earn cashback in USDC, USDT, or BNB tokens on every purchase.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#FABC08] to-[#FF4500] hover:bg-yellow-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveSmarterSection;
