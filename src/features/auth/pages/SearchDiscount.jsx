import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchDiscount = () => {
  const [showProceed, setShowProceed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProceed(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleProceed = () => {
    navigate('/discount-result'); // Change this path to your actual route
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
      <div className="mt-6 text-xl font-semibold text-gray-700">
        Our AI is searching for the best discount for you
      </div>
      <div className="mt-2 text-gray-500 text-sm">
        This may take a few seconds...
      </div>
      {showProceed && (
        <button
          onClick={handleProceed}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white rounded-lg shadow hover:bg-orange-600 transition duration-300"
        >
          Proceed
        </button>
      )}
    </div>
  );
};

export default SearchDiscount;