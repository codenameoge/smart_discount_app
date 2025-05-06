import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  'src/assets/cannon.png',
  'src/assets/cannon1.png',
  'src/assets/cannon2.png',
  'src/assets/cannon3.png',
  'https://via.placeholder.com/80/888888/FFFFFF?Text=Accessory+1',
  'https://via.placeholder.com/80/AAAAAA/FFFFFF?Text=Accessory+2',
  'https://via.placeholder.com/80/CCCCCC/FFFFFF?Text=Accessory+3',
];

function ProductDisplay() {
  const [mainImage, setMainImage] = useState(images[0]);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const navigate = useNavigate();

  const handleQuantity = (type) => {
    setQuantity((prev) => {
      if (type === 'inc') return prev + 1;
      if (type === 'dec') return prev > 1 ? prev - 1 : 1;
    });
  };

  const handleAddToCart = () => {
    navigate('/products');
  };

  const handleApplyDiscount = () => {
    navigate('/Scan-Discount');
  };

  const productItems = [
    { img: 'src/assets/pulsetracker.png', label: 'Fitness Watch', offer: 'Fitness Sale: 30-60% off', color: 'bg-indigo-500' },
    { img: 'src/assets/schoolbag.png', label: 'Backpack', offer: 'Get 25% off', color: 'bg-green-500' },
    { img: 'src/assets/mouse.png', label: 'Futuristic Mouse', offer: '35% off on 1st order', color: 'bg-orange-500' },
    { img: 'src/assets/sneakers.png', label: 'Lens Cleaner', offer: 'Bundle Deal: Save 15%', color: 'bg-purple-500' },
    { img: 'src/assets/cannon3.png', label: 'Camera Lens', offer: 'Buy 1 Get 1 Free', color: 'bg-pink-500' },
    { img: 'src/assets/cannon2.png', label: 'Tripod Stand', offer: 'Up to 20% Off', color: 'bg-red-500' },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Thumbnails */}
          <div className="p-4 space-y-2 overflow-y-auto max-h-[500px]">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                className="w-16 h-16 object-cover rounded-md cursor-pointer transition duration-200 hover:scale-105"
                onMouseEnter={() => setHoveredImage(img)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="p-4 flex items-center justify-center">
            <img
              src={hoveredImage || mainImage}
              alt="Main"
              className="w-full h-auto max-h-[400px] object-contain rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Canon Camera Accessories</h2>

            {/* Rating */}
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-sm text-gray-500">(250 reviews)</span>
            </div>

            <p className="text-gray-700 mb-4">$292.00</p>
            <p className="text-gray-600 text-sm mb-4">
              Enhance your photography with premium Canon camera accessories. From lenses to tripods, find the perfect gear to capture every moment with precision and clarity.
            </p>

            {/* Colors */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Colours:</h4>
              <div className="flex items-center space-x-2">
                {['black', 'gray-300', 'blue-500'].map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full bg-${color} cursor-pointer ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Size:</h4>
              <div className="flex items-center space-x-2">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    className={`px-3 py-1 rounded-full text-xs ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-4 flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button onClick={() => handleQuantity('dec')} className="px-2 py-1 text-gray-600">-</button>
                <span className="px-2 text-gray-700">{quantity}</span>
                <button onClick={() => handleQuantity('inc')} className="px-2 py-1 text-gray-600">+</button>
              </div>
              <button className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Buttons with Routing */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-orange-800 text-white py-3 rounded-md hover:bg-gray-700"
            >
              Add to Cart
            </button>
            <button
              onClick={handleApplyDiscount}
              className="w-full bg-orange-400 text-white py-3 rounded-md mt-2 hover:bg-yellow-500"
            >
              Apply Discount
            </button>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Items</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {productItems.map((item, idx) => (
            <div key={idx} className="min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={item.img} alt={item.label} className="w-full h-40 object-cover" />
                <span className={`absolute top-2 left-2 ${item.color} text-white text-xs px-2 py-1 rounded-full`}>
                 {item.label}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">{item.offer}</h3>
                <div className="flex items-center justify-between">
                  <button className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">Redeem</button>
                  <button className="text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
