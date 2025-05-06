import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("src/assets/cannon.png");
  const navigate = useNavigate();

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="font-sans">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <img src="/profile.png" alt="Profile" className="h-8 rounded-full" />
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-sm text-gray-600 mb-4">
          Home / Product / Canon Camera Accessories
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img src={mainImage} alt="Canon Camera" className="max-w-full mb-4" />
            <div className="flex space-x-2">
              {["src/assets/cannon.png", "src/assets/cannon1.png", "src/assets/cannon2.png", "src/assets/cannon3.png", "src/assets/cannon2.png"].map((img, index) => (
                <img key={index} src={img} alt={`Accessory ${index + 1}`} 
                  className="w-20 h-20 object-cover border rounded cursor-pointer"
                  onClick={() => setMainImage(img)}
                  onMouseOver={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-2">Canon Camera Accessories</h1>
            <p className="text-gray-700 mb-4">
              Enhance your photography with premium Canon camera accessories. From lenses to tripods, find the perfect gear to capture every moment with precision and clarity.
            </p>
            <div className="flex items-center mb-2">
              <span className="text-sm font-semibold mr-2">2k+ Sold</span>
              <span className="text-yellow-500">★★★★★ (4.9 From 285 review)</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold mr-2">$112.05</span>
              <span className="line-through text-gray-500">$750.00</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-2">Quantity:</span>
              <button onClick={decreaseQuantity} className="border rounded px-2 py-1">-</button>
              <span className="mx-2">{quantity}</span>
              <button onClick={increaseQuantity} className="border rounded px-2 py-1">+</button>
            </div>
            <div className="flex flex-col items-center">
              <button onClick={() => navigate('/cart')} className="bg-orange-500 hover:bg-orange-900 text-white font-semibold py-1 px-3 rounded mb-2">
                Add to Cart
              </button>
              <button onClick={() => navigate('/apply-discount')} className="bg-orange-400 hover:bg-orange-900 text-black font-semibold py-1 px-3 rounded">
                Apply Discount
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Secure Payment Method</h2>
          <div className="flex space-x-4">
            {["src/assets/sui2.png", "src/assets/mastercard.png", "src/assets/visa.png"].map((img, index) => (
              <img key={index} src={img} alt={`Payment ${index + 1}`} className="h-8" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
