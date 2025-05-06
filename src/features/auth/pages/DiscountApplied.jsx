import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/solid';

const CouponAI = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 60000); // 1-minute duration
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-96 text-center relative">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="absolute left-4 top-4">
          <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
        </button>
        
        <h2 className="font-semibold text-lg mb-4">Coupon AI</h2>
        <p className="text-gray-600 mb-4">Wait while our AI applies the best discount for you!</p>
        
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mx-auto mb-6"></div>
        ) : (
          <div className="flex flex-col items-center">
            <CheckCircleIcon className="h-12 w-12 text-green-500 mb-2" />
            <p className="text-2xl font-semibold text-green-600">DONE!</p>
          </div>
        )}
        
        {/* Proceed to Checkout Button */}
        <button 
          onClick={() => navigate('/checkout')} 
          className="flex items-center justify-center w-64 px-4 py-2 mt-6 border rounded-lg bg-orange-500 text-white hover:bg-orange-900 mx-auto">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CouponAI;
