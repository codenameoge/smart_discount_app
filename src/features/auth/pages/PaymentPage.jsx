import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock } from 'lucide-react';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [usdAmount, setUsdAmount] = useState(640.49); // Default final price
  const conversionRate = 2.42; // 2.42 USD = 1 SUI

  const handleUSDChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setUsdAmount(value);
    } else {
      setUsdAmount('');
    }
  };

  const convertedSUI = usdAmount ? (usdAmount / conversionRate).toFixed(2) : '0.00';

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Price Details */}
        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Original Price</span>
            <span className="font-semibold">$750.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Discount Applied</span>
            <span className="text-green-600 font-semibold">$-112.50</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Processing Fee</span>
            <span className="font-semibold">$2.99</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className="font-semibold">Final Price</span>
            <span className="font-semibold">${usdAmount.toFixed(2)}</span>
          </div>
        </div>

        {/* Currency Conversion */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-blue-200 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Currency Conversion</span>
          </div>
          <div className="mb-2">
            <label className="block text-sm text-gray-700 mb-1">Amount to Convert (USD)</label>
            <input
              type="number"
              value={usdAmount}
              onChange={handleUSDChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              min="0"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <span>2.42 USD = 1 SUI</span>
            <span>{convertedSUI} SUI</span>
          </div>
        </div>

        {/* Blockchain Security */}
        <div className="flex items-center justify-center mb-6">
          <ShieldCheck className="w-6 h-6 text-green-600 mr-2" />
          <span className="text-sm text-gray-600 flex items-center">
            Secured by Blockchain Technology
            <Lock className="w-4 h-4 ml-1 text-gray-500" />
          </span>
        </div>

        {/* Checkout Button */}
        <button
          onClick={() => navigate('/payment-confirmation')}
          className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300">
          Proceed to Checkout
        </button>

        {/* Recent Transactions */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {['1234', '1324'].map((id, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:shadow-lg transition duration-300">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Purchase #{id}</span>
                  <span className="font-semibold">${index === 0 ? '162.98' : '120.98'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Cashback</span>
                  <span className="text-green-600">${index === 0 ? '8.15' : '11.15'}</span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-4 h-4 bg-green-200 rounded-full mr-2"></div>
                  <span className="text-xs text-green-600">Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;