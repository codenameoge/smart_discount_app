import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentCheckout() {
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    // Simulate payment processing here if needed
    navigate("/payments");
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen p-8">
      {/* Payment Information Section */}
      <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-md mb-6 md:mb-0 md:mr-4">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <div className="flex space-x-4 mb-4">
          <img src="src/assets/suicard.png" alt="Visa" className="w-16 h-10 object-contain bg-gray-200 rounded p-1" />
          <img src="src/assets/mastercard.png" alt="Mastercard" className="w-16 h-10 object-contain bg-gray-200 rounded p-1" />
          <img src="src/assets/visacard.png" alt="PayPal" className="w-16 h-10 object-contain bg-gray-200 rounded p-1" />
          <img src="src/assets/vervecard.png" alt="Verve" className="w-16 h-10 object-contain bg-gray-200 rounded p-1" />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name on card
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Mark Doe"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="9256  3587  8952  3847"
          />
        </div>

        <div className="flex space-x-4 mb-6">
          <div className="w-1/2">
            <label htmlFor="expiration" className="block text-gray-700 text-sm font-bold mb-2">
              Expiration
            </label>
            <input
              type="text"
              id="expiration"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="MM/YY"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="***"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Back
          </button>
          <button
            onClick={handleConfirmPayment}
            className="bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Confirm Payment
          </button>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>1x Protective Sunshade</span>
          <span>$100</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>1x iPhone 15</span>
          <span>$650</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>1x Canon Camera Set</span>
          <span>$292</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between mb-2 text-green-500 font-semibold">
          <span>Discount Applied</span>
          <span>$468.90</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Processing fee</span>
          <span>$3.99</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-bold">
          <span>Order Total</span>
          <span>$577.09</span>
        </div>
        <div className="mt-4 bg-white border border-red-400 text-red-600 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Your total saving on this order</strong>
          <span className="block sm:inline"> $468.90</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentCheckout;
