import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">SUI Coupon Discount</h2>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700">Original Price</span>
            <span className="text-gray-900">$750.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Discount Applied</span>
            <span className="text-green-600">-$112.50</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Processing Fee</span>
            <span className="text-gray-900">$2.99</span>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-800">Final Price</span>
            <span className="text-lg font-semibold text-gray-900">$640.49</span>
          </div>
        </div>

        <div className="mt-8 bg-green-100 p-4 rounded-lg text-center">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-green-600"
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
          <h3 className="text-xl font-semibold text-green-800 mb-2">Payment Successful</h3>
          <p className="text-gray-700">
            Transaction ID <span className="font-medium">#TX12356743</span>
          </p>
          <p className="text-gray-700">
            Amount Paid <span className="font-medium">$640.49</span>
          </p>
          <p className="text-gray-700">
            Cashback Earned <span className="font-medium">$9.5</span>
          </p>
          <button
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate('/FindDiscount')}
          >
            Back to Dashboard
          </button>
        </div>

        {/* Recent Transactions Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            {[
              { id: "#1234", amount: "$152.98", cashback: "$8.15", status: "Completed" },
              { id: "#1324", amount: "$120.98", cashback: "$15.15", status: "Completed" }
            ].map((transaction, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:bg-gray-100"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-700 font-medium">Purchase {transaction.id}</p>
                    <p className="text-gray-600">Amount: {transaction.amount}</p>
                    <p className="text-gray-600">Cashback: {transaction.cashback}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-semibold">
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentConfirmation;
