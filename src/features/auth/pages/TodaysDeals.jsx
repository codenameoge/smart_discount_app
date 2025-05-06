import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function TodaysDeals() {
    const allDeals = [
        { id: 1, image: 'src/assets/camera.png', title: 'Deal 1', tag: 'Trending', subtitle: 'High-quality lens' },
        { id: 2, image: 'src/assets/sneakers.png', title: 'Deal 2', tag: 'Hot Deals', subtitle: 'Comfortable & stylish' },
        { id: 3, image: 'src/assets/metalwatch.png', title: 'Deal 3', tag: 'Trending', subtitle: 'Timeless elegance' },
        { id: 4, image: 'src/assets/earbud2.png', title: 'Deal 4', tag: 'Hot Deals', subtitle: 'Crystal-clear sound' },
        { id: 5, image: 'src/assets/sofa.png', title: 'Deal 5', tag: 'Trending', subtitle: 'Ultimate relaxation' },
        { id: 6, image: 'src/assets/shoe.png', title: 'Deal 6', tag: 'Hot Deals', subtitle: 'Durability meets fashion' }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const visibleDeals = expanded ? allDeals : allDeals.slice(startIndex, startIndex + 5);

    const nextSet = () => {
        if (!expanded) {
            const nextIndex = startIndex + 5 < allDeals.length ? startIndex + 5 : 0;
            setStartIndex(nextIndex);
        }
    };

    const prevSet = () => {
        if (!expanded) {
            const prevIndex = startIndex - 5 >= 0 ? startIndex - 5 : allDeals.length - 5;
            setStartIndex(prevIndex);
        }
    };

    const toggleViewAll = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="py-8 px-4 text-left"> 
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Today's Deals</h2>
                <div className="flex items-center justify-between">
                    <button onClick={prevSet} className="p-2 bg-orange-500 rounded-full hover:bg-orange-300">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white p-4 rounded-lg">
                        {visibleDeals.map(deal => (
                            <div key={deal.id} className="overflow-hidden relative group hover:scale-105 rounded-lg">
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    {deal.tag}
                                </span>
                                <div className="relative w-full h-60 overflow-hidden rounded-lg">
                                    <img 
                                        src={deal.image} 
                                        alt={deal.title} 
                                        className="w-full h-full object-cover transform transition duration-500 rounded-lg" 
                                    />
                                    <div className="absolute bottom-0 w-full bg-gradient-to-b from-[#FF4500] to-[#FABC08] text-white px-2 py-1 text-lg font-large rounded-b-lg">
                                        <div>
                                            {deal.title}
                                        </div>
                                        <h2>{deal.subtitle}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={nextSet} className="p-2 bg-orange-500 rounded-full hover:bg-orange-900">
                        <ChevronRight size={24} />
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                    <button onClick={toggleViewAll} className="bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                        {expanded ? 'Show Less' : 'View All'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodaysDeals;
