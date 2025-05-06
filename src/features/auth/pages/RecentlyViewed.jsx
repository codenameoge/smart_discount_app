import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

function RecentlyViewed() {
    const allDeals = [
        { id: 1, image: 'src/assets/dinning.png', tag: 'Trending', subtitle: '20% Off' },
        { id: 2, image: 'src/assets/sofa.png', tag: 'Hot Deals', subtitle: '25% Off' },
        { id: 3, image: 'src/assets/mouse.png', tag: 'Trending', subtitle: '30% Off' },
        { id: 4, image: 'src/assets/hangedclothes.png', tag: 'Hot Deals', subtitle: '35% Off' },
        { id: 5, image: 'src/assets/sofa.png', tag: 'Trending', subtitle: '40% Off' },
        { id: 6, image: 'src/assets/shoe.png', tag: 'Hot Deals', subtitle: '50% Off' }
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
                <h2 className="text-2xl font-semibold mb-4">Recently Viewed</h2>
                <div className="flex items-center justify-between">
                    <button onClick={prevSet} className="p-2 bg-orange-500 rounded-full hover:bg-orange-300">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white p-4 rounded-lg">
                        {visibleDeals.map(deal => (
                            <div key={deal.id} className="overflow-hidden relative group hover:scale-105 rounded-lg">
                                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    {deal.tag}
                                </span>
                                <div className="relative w-full h-60 overflow-hidden rounded-lg">
                                    <img 
                                        src={deal.image} 
                                        alt="Deal Image" 
                                        className="w-full h-full object-cover transform transition duration-500 rounded-lg" 
                                    />
                                    <div className="absolute bottom-0 w-full bg-white text-black px-2 py-1 text-lg font-large rounded-b-lg flex flex-col items-center">
                                        <span className="font-semibold">Discount Offer: {deal.subtitle}</span>
                                        <div className="flex items-center justify-between w-full px-4 mt-2">
                                            <button className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Redeem</button>
                                            <div className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full">
                                                <Share2 size={16} />
                                            </div>
                                        </div>
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

export default RecentlyViewed;
