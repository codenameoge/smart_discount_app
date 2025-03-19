import React from 'react';

function DiscountPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-5xl mx-4 p-6">
        
        {/* Best Available Discounts */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-blue-700">Best Available Discounts</h2>
            <button className="text-blue-500 text-sm hover:text-blue-700 transition">See More</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            
            {/* Running Shoes */}
            <div className="relative">
              <div className="bg-gray-200 rounded-lg p-4 transition transform hover:scale-105">
                <img 
                  src="src/assets/sneakers.png" 
                  alt="Running Shoes" 
                  className="w-full h-32 object-contain mb-2 transition transform hover:scale-110" 
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-semibold">Running Shoes</h3>
                    <p className="text-xs text-gray-500">$235</p>
                    <div className="flex items-center text-xs text-yellow-500">
                      <span>★★★★</span>
                      <span className="text-gray-500">(500)</span>
                    </div>
                  </div>
                  <button className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition">♡</button>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-green-500">SAVE25 - 25% OFF</p>
                  <button className="mt-2 bg-green-500 text-white rounded-full p-2 text-xs hover:bg-green-600 transition">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Retro Headphone */}
            <div className="relative">
              <div className="bg-gray-200 rounded-lg p-4 transition transform hover:scale-105">
                <img 
                  src="src/assets/headset.png" 
                  alt="Retro Headphone" 
                  className="w-full h-32 object-contain mb-2 transition transform hover:scale-110" 
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-semibold">Retro Headphone</h3>
                    <p className="text-xs text-gray-500">$126</p>
                    <div className="flex items-center text-xs text-yellow-500">
                      <span>★★★★★</span>
                      <span className="text-gray-500">(236)</span>
                    </div>
                  </div>
                  <button className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition">♡</button>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-green-500">SAVE25 - 25% OFF</p>
                  <button className="mt-2 bg-yellow-500 text-white rounded-full p-2 text-xs hover:bg-yellow-600 transition">
                    Limited Applied
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div> 
        
        {/* Alternative Discounts */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-orange-600">Alternative Discounts</h2>
            <button className="text-blue-500 text-sm hover:text-blue-700 transition">See More</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            
            {/* Running Shoes */}
            <div className="relative">
              <div className="bg-gray-200 rounded-lg p-4 transition transform hover:scale-105">
                <img 
                  src="src/assets/smartwatch.png" 
                  alt="Running Shoes" 
                  className="w-full h-32 object-contain mb-2 transition transform hover:scale-110" 
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-semibold">Smart Watch</h3>
                    <p className="text-xs text-gray-500">$235</p>
                    <div className="flex items-center text-xs text-yellow-500">
                      <span>★★★★</span>
                      <span className="text-gray-500">(500)</span>
                    </div>
                  </div>
                  <button className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition">♡</button>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-green-500">SAVE25 - 25% OFF</p>
                  <button className="mt-2 bg-green-500 text-white rounded-full p-2 text-xs hover:bg-green-600 transition">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Retro Headphone */}
            <div className="relative">
              <div className="bg-gray-200 rounded-lg p-4 transition transform hover:scale-105">
                <img 
                  src="src/assets/earbud.png" 
                  alt="Retro Headphone" 
                  className="w-full h-32 object-contain mb-2 transition transform hover:scale-110" 
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-semibold">Ear buds</h3>
                    <p className="text-xs text-gray-500">$126</p>
                    <div className="flex items-center text-xs text-yellow-500">
                      <span>★★★★★</span>
                      <span className="text-gray-500">(236)</span>
                    </div>
                  </div>
                  <button className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition">♡</button>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-green-500">SAVE25 - 25% OFF</p>
                  <button className="mt-2 bg-yellow-500 text-white rounded-full p-2 text-xs hover:bg-yellow-600 transition">
                    Limited Applied
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div> 
        
        {/* Holidays Discounts */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-red-600">Holiday Discounts</h2>
            <button className="text-blue-500 text-sm hover:text-blue-700 transition">See More</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 rounded-lg p-4 flex justify-center items-center">
              <p className="text-sm text-gray-700">No Holiday Discounts Available</p>
            </div>
          </div>
        </div> 

      </div>
    </div>
  );
}

export default DiscountPage;
