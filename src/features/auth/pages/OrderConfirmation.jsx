import React from 'react';

function OrderConfirmation() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Your Order Is Completed!
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          Thank you for your order! Your order is being processed and will be
          completed within 3-10 minutes. You will receive an email confirmation
          when your order is completed.
        </p>
        <button className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;