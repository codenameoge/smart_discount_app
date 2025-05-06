import React, { useState, useEffect } from 'react';
import { FaSearch, FaLink } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const images = [
  "src/assets/headset.png",
  "src/assets/pulsetracker.png",
  "src/assets/schoolbag.png",
  "src/assets/sneakers.png",
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchClick = () => {
    navigate('/discount-result');
  };

  return (
    <div className="bg-black text-orange-600 py-16 px-4 flex flex-col items-center m-8 rounded-xl shadow-lg">
      <div className="container mx-auto max-w-5xl flex flex-row items-center justify-between p-6 rounded-lg bg-gray-900 relative">
        {/* Left Side Text */}
        <div className="text-left max-w-sm w-full">
          <h1 className="text-4xl text-white font-bold mb-4">Up To </h1>
          <h1 className="text-4xl font-bold mb-4">60% OFF</h1>
          <p className="text-lg text-white mb-8">On Top products</p>
        </div>

        <div className="flex flex-col items-center">
          {/* Right Side Image Carousel */}
          <div className="relative w-[500px] h-[250px] flex items-center overflow-hidden mt-[-20px]">
            {images.slice(currentIndex, currentIndex + 2).map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Headphones"
                className={`transition-transform duration-700 object-contain ${
                  index === 0
                    ? "w-64 scale-110 z-10"
                    : "w-48 opacity-70 ml-4"
                }`}
              />
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex mt-4 space-x-2">
            {images.map((_, index) => (
              <span key={index} className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-orange-600' : 'bg-white'}`} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="mt-6 w-[60%] flex items-center border border-orange-600 bg-white rounded-full px-4 py-2">
        <FaLink className="text-orange-600 mr-2" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-white text-black p-2 outline-none text-center"
        />
        <FaSearch className="text-orange-600 ml-2 cursor-pointer" onClick={handleSearchClick} />
      </div>
    </div>
  );
}

export default Hero;
