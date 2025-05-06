import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DiscountSearch() {
  const [searching, setSearching] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearching(false);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {searching ? (
        <>
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500"></div>
          <p className="mt-4 text-lg font-medium text-gray-800">Searching for the best discounts for your product</p>
          <p className="mt-2 text-sm text-gray-600">This may take a few seconds...</p>
        </>
      ) : (
        <>
          <p className="mt-4 text-lg font-medium text-gray-800">Your requested product is now available. Click Proceed to view them.</p>
          <button 
            className="mt-2 px-6 py-2 bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white font-medium text-lg rounded-lg hover:bg-orange-700 hover:text-black transition"
            onClick={() => navigate('/products')}>
            Proceed
          </button>
        </>
      )}
    </div>
  );
}

export default DiscountSearch;
