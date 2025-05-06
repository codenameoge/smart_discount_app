import React from 'react';

function WalletInterface() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-200 to-red-200 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
            <nav className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Product</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Find discount</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Payment</a>
              <a href="#" className="text-gray-900 font-semibold">Wallet</a>
            </nav>
          </div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>

        {/* Total Cashback Earned */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Total Cashback Earned</h2>
          <p className="text-4xl font-bold">$247.50</p>
        </div>

        {/* This Month & Pending */}
        <div className="flex justify-around mb-8">
          <div className="bg-yellow-300 text-center py-3 px-6 rounded-full">
            <p className="text-sm">This month:</p>
            <p className="text-lg font-semibold">$45.20</p>
          </div>
          <div className="bg-yellow-300 text-center py-3 px-6 rounded-full">
            <p className="text-sm">Pending:</p>
            <p className="text-lg font-semibold">$12.30</p>
          </div>
        </div>

        {/* Withdraw & History Buttons */}
        <div className="flex justify-around mb-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full">Withdraw</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-full">History</button>
        </div>

        {/* Withdrawal Options */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Withdrawal Options</h3>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-200 rounded-full mr-2"></div>
              <p className="font-semibold">USD Balance</p>
            </div>
            <p className="font-semibold">$120</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-purple-200 rounded-full mr-2"></div>
              <p className="font-semibold">SUI Token</p>
            </div>
            <p className="font-semibold">345 SUI</p>
          </div>
        </div>

        {/* SuiStream Tip Jar */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">SuiStream Tip Jar</h3>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <p className="font-semibold">Creator's Name</p>
              <p className="text-sm text-gray-600">@username</p>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full w-full">Send a Tip</button>
        </div>

        {/* VIP Access */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">VIP Access</h3>
            <p className="bg-gray-200 text-gray-700 font-semibold py-1 px-3 rounded-full text-xs">Premium</p>
          </div>
          <p className="text-sm text-gray-600 mb-4">Get exclusive access to premium discounts</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full w-full">Activate Now</button>
        </div>
      </div>
    </div>
  );
}

export default WalletInterface;