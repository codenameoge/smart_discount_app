import React from 'react';
import { Link } from 'react-router-dom';

function BlackFridaySale() {
    return (
        <div className="bg-gradient-to-b from-[#FABC08] to-[#FF4500] text-white py-12 px-4">
            <div className="container mx-auto flex flex-col m-8 rounded-full md:flex-row items-center justify-between">
                {/* Image on the left with heartbeat effect */}
                <div className="md:w-1/2 mb-6 md:mb-0 animate-pulse">
                    <img 
                        src="src/assets/fridaycart.png" 
                        alt="Black Friday Sale" 
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
                
                {/* Text and button on the right */}
                <div className="md:w-1/2 justify-start text-right">
                    <h2 className="text-3xl text-black font-extrabold mb-1">40% OFF</h2>
                    <p className="text-lg text-black mb-1">with <h2 className="text-3xl text-white font-bold">AMAZON</h2></p>
                    <h2 className="text-3xl text-black font-bold mb-1">BLACK FRIDAY</h2>
                    <h2 className="text-3xl text-black font-bold mb-1">SALE</h2>

                    {/* White circles with glass-like effect */}
                    <div className="flex justify-end gap-4 mb-6">
                        <div className="w-16 h-16 bg-white text-black font-bold text-sm flex flex-col items-center justify-center rounded-full shadow-md border border-white">
                            <span>Fast</span>
                            <span>Delivery</span>
                        </div>
                        <div className="w-16 h-16 bg-white text-black font-bold text-sm flex flex-col items-center justify-center rounded-full shadow-md  border border-white">
                            <span>Best</span>
                            <span>Deals</span>
                        </div>
                        <div className="w-16 h-16 bg-white text-black font-bold text-sm flex flex-col items-center justify-center rounded-full shadow-md  border border-white">
                            <span>Secure</span>
                            <span>Payment</span>
                        </div>
                        <div className="w-16 h-16 bg-white text-black font-bold text-sm flex flex-col items-center justify-center rounded-full shadow-md border border-white">
                            <span>Easy</span>
                            <span>Returns</span>
                        </div>
                    </div>
                    
                    <Link to="/shop">
                        <button className="bg-orange-500 text-white py-2 px-6 rounded-full font-semibold shadow-md transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlackFridaySale;
