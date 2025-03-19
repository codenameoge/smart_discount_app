import React from 'react';

function DiscountFinder() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-200 to-orange-300 flex justify-center items-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Paste product purchase link"
            className="w-full border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm"
          />
          <button className="flex items-center justify-center w-70 px-4 py-2 mt-10 border rounded-lg bg-orange-500 text-white hover:bg-orange-900 mb-4">
            Scan for discount
          </button>
        </div>

        {/* Searching Indicator */}
        <div className="text-center mb-6">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500 mx-auto mb-2"></div>
          <p className="text-gray-600">Searching for the best discounts...</p>
          <p className="text-xs text-gray-500">This may take a few seconds...</p>
        </div>

        {/* Discount Offers */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-lg">20% OFF</span>
          </div>
            <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-orange-500 text-white hover:bg-orange-900 mb-4">
              SAVE25NOW
            </button>
          <p className="text-xs mt-4 text-gray-600">Best discount available</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-lg">15% OFF</span>
          </div>
            <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-orange-500 text-white hover:bg-orange-900 mb-4">
              SPRING15
            </button>
        </div>

        {/* Savings and Cashback */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Estimated Savings:</span>
            <span className="font-semibold">$24.50</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Potential Cashback:</span>
            <span className="font-semibold">$2.30</span>
          </div>
        </div>

        {/* Confirm Discount Button */}
        <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-orange-500 text-white hover:bg-orange-900 mb-4">
          Confirm Discount
        </button>
      </div>
    </div>
  );
}

export default DiscountFinder;