import React from 'react';

const NewsletterSignup = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Join Our Newsletter & Stay Ahead!
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Join our newsletter for updates on discounts and more features.
          </p>

          <div className="mt-6">
            <dl className="space-y-6">
              <div className="flex items-start">
                <div className="h-12 w-12 flex items-center justify-center rounded-md bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293H9.707a1 1 0 01-.707-.293L6.586 13.293a1 1 0 00-.707-.293H4" />
                  </svg>
                </div>
                <p className="ml-4 text-lg font-medium text-gray-900">Be the first to access special deals and exciting coupons.</p>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 flex items-center justify-center rounded-md bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-4 text-lg font-medium text-gray-900">Get the latest on our smart saving technology.</p>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 flex items-center justify-center rounded-md bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m14-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-4 text-lg font-medium text-gray-900">Never miss out on amazing extra URL or Bill items.</p>
              </div>
            </dl>
          </div>

          <div className="mt-8">
            <div className="max-w-md flex rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-1 min-w-0 block w-full px-4 py-3 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="ml-2 inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#FABC08] to-[#FF4500]"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img 
            src="src/assets/25percent.png" 
            alt="Newsletter Promotion" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default NewsletterSignup;
