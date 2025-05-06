import React from 'react';

function ProfileInterface() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        {/* Profile Info */}
        <div className="text-center mb-6">
          <div className="text-xl font-semibold">Mark Doe</div>
          <div className="text-gray-500">@markdoe241</div>
        </div>

        {/* Wallet and Orders */}
        <div className="flex justify-between mb-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-1/2 mr-2">
            Wallet
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg w-1/2">
            View Orders
          </button>
        </div>

        {/* Upgrade to Premium */}
        <button className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 px-4 rounded-lg w-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10 9.586 7.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 9.586 12.293 11.88a1 1 0 001.414 0z" clipRule="evenodd" />
          </svg>
          Upgrade to Premium
        </button>

        {/* Notifications */}
        <button className="flex items-center justify-start text-gray-700 hover:bg-gray-100 py-3 px-4 rounded-lg w-full mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.158a2.033 2.033 0 01-1.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          Notifications
        </button>

        {/* Dark Mode */}
        <button className="flex items-center justify-start text-gray-700 hover:bg-gray-100 py-3 px-4 rounded-lg w-full mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          Dark Mode
        </button>

        {/* Data & Privacy */}
        <button className="flex items-center justify-start text-gray-700 hover:bg-gray-100 py-3 px-4 rounded-lg w-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Data & Privacy
        </button>

        {/* Sign Out */}
        <button className="flex items-center justify-start text-gray-700 hover:bg-gray-100 py-3 px-4 rounded-lg w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v-3a3 3 0 11-6 0v3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default ProfileInterface;