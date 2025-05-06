import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentWallet() {
  const navigate = useNavigate();

  const [fromCurrency, setFromCurrency] = useState('USDT');
  const [toCurrency, setToCurrency] = useState('SUI');
  const [amount, setAmount] = useState('');

  // Example conversion rate: 2.42 USDT = 1 SUI
  const conversionRate = 1 / 2.42;
  const convertedAmount = amount ? (parseFloat(amount) * conversionRate).toFixed(4) : '0.0000';

  const handleConfirm = () => {
    if (!amount || isNaN(amount)) {
      alert('Please enter a valid amount.');
      return;
    }
    navigate('/payment-confirmation');
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Pay with Wallet</h2>

      {/* Currency Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Network & Coin</label>
        <div className="flex space-x-2">
          <input
            type="text"
            className="w-1/2 border rounded-md px-3 py-2 text-sm"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value.toUpperCase())}
            placeholder="From (e.g. USDT)"
          />
          <input
            type="text"
            className="w-1/2 border rounded-md px-3 py-2 text-sm"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value.toUpperCase())}
            placeholder="To (e.g. SUI)"
          />
        </div>
      </div>

      {/* Conversion Rate Display */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Currency Conversion</span>
          <svg
            className="w-4 h-4 text-gray-400 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-right text-sm text-gray-700">2.42 {fromCurrency} = 1 {toCurrency}</p>
      </div>

      {/* Amount Input and Conversion Result */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
          <span>Amount to Pay</span>
          <span className="text-lg font-semibold">{convertedAmount} {toCurrency}</span>
        </div>
        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-md px-4 py-2 w-full text-center"
          placeholder={`Enter ${fromCurrency} amount`}
        />
      </div>

      {/* Confirm Payment Button */}
      <button
        onClick={handleConfirm}
        className="bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white font-semibold py-3 rounded-md w-full shadow-md hover:shadow-lg transition duration-200"
      >
        Confirm Payment
      </button>

      {/* Optional Pay with Card Button */}
      <button className="flex items-center justify-center mt-4 text-sm text-gray-600 hover:text-gray-800 transition duration-200">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h10M7 9v6m10-6v6m-3-3h6" />
        </svg>
        Pay with card
      </button>
    </div>
  );
}

export default PaymentWallet;
