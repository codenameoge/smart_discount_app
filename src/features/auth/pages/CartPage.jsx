import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const navigate = useNavigate();

  const initialProducts = [
    {
      id: 1,
      name: 'Sunshade',
      price: 100,
      quantity: 1,
      image: 'src/assets/sneakers.png',
    },
    {
      id: 2,
      name: 'iPhone 15',
      price: 650,
      quantity: 1,
      image: 'src/assets/shoe.png',
    },
    {
      id: 3,
      name: 'Canon Camera Set',
      price: 292,
      quantity: 1,
      image: 'src/assets/phone.png',
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showAll, setShowAll] = useState(false);

  const handleQuantityChange = (id, newQuantity) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, quantity: newQuantity } : p))
    );
  };

  const subtotal = products.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const discount = 0.45;
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  return (
    <div className="container mx-auto p-4">

      {/* Titles */}
      <div className="grid grid-cols-4 font-semibold bg-gray-100 p-4 rounded-t-lg border border-gray-300">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>

      {/* Cart Items */}
      {products
        .slice(0, showAll ? products.length : 1)
        .map(product => (
          <div
            key={product.id}
            className="grid grid-cols-4 items-center gap-4 border border-gray-300 rounded-b-lg p-4 my-2"
          >
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-12 w-12 rounded-full mr-3"
              />
              <span className="text-sm font-medium">{product.name}</span>
            </div>
            <div className="text-sm">${product.price}</div>
            <QuantitySelector
              quantity={product.quantity}
              onChange={q => handleQuantityChange(product.id, q)}
            />
            <div className="text-sm">
              ${(product.price * product.quantity).toFixed(2)}
            </div>
          </div>
        ))}

      {/* Buttons and Input Row */}
      <div className="flex justify-between mt-6 flex-wrap gap-4">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border-2 border-yellow-400 text-yellow-600 font-bold py-2 px-4 rounded w-fit"
          >
            {showAll ? 'Hide Products' : 'View All Products'}
          </button>

          <div className="flex">
            <input
              type="text"
              placeholder="Paste product link"
              className="border border-gray-300 rounded-l-md p-2 w-full"
            />
            <button className="bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white font-bold py-2 px-4 rounded-r-md">
              Apply
            </button>
          </div>
        </div>

        {/* Cart Total Box */}
        <div className="w-full md:w-1/3 border border-gray-300 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Cart Total</h2>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>45%</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white font-bold py-2 px-4 rounded mt-4 w-full"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

// Quantity Selector Component
function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="text-gray-600 text-xl"
      >
        ▼
      </button>
      <div className="border px-3 py-1 rounded-md text-center min-w-[40px]">
        {quantity}
      </div>
      <button
        onClick={() => onChange(quantity + 1)}
        className="text-gray-600 text-xl"
      >
        ▲
      </button>
    </div>
  );
}

export default CartPage;
