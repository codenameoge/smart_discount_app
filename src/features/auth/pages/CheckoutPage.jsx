import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const navigate = useNavigate();
  const [discountApplied, setDiscountApplied] = useState('SAVE25');
  const [finalPrice, setFinalPrice] = useState(149.99);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedPayment, setSelectedPayment] = useState('SUI');
  const [mainImage, setMainImage] = useState("src/assets/headset.png");

  const discounts = [
    { code: 'SAVE25', description: '25% OFF', applied: true, percentage: 25, applicable: true },
    { code: 'NEWUSER20', description: '20% off for new users', applied: false, percentage: 20, applicable: false },
    { code: 'HOLIDAY15', description: '15% off holiday special', applied: false, percentage: 15, applicable: true },
  ];

  const currencies = ['USD', 'EUR', 'GBP', 'JPY'];

  const [allDiscounts, setDiscounts] = useState(discounts);

  const applyDiscount = (code, percentage, applicable) => {
    if (!applicable) return;
    setDiscountApplied(code);
    setFinalPrice(149.99 * (1 - percentage / 100));

    const updatedDiscounts = discounts.map(discount => ({
      ...discount,
      applied: discount.code === code,
    }));
    setDiscounts(updatedDiscounts);
  };

  const handleProceedToCheckout = () => {
    navigate('/payment');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: '90vw', maxWidth: '900px', margin: 'auto' }}>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', background: '#fff', textAlign: 'center' }}>
        <div 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '10px', transition: '0.3s' }}
          onMouseOver={(e) => e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.2)'}
          onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
        >
          <img src={mainImage} alt="Product" style={{ borderRadius: '8px', height: '120px'}} />
          <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
            <img src="src/assets/sneakers.png" alt="Thumbnail 1" style={{ width: '40px', cursor: 'pointer' }} onMouseOver={() => setMainImage("src/assets/sneakers.png")} />
            <img src="src/assets/smartwatch.png" alt="Thumbnail 2" style={{ width: '40px', cursor: 'pointer' }} onMouseOver={() => setMainImage("src/assets/smartwatch.png")} />
          </div>
          <strong style={{ marginTop: '10px' }}>Wireless Gaming Headset</strong>
          <span style={{ color: '#888', marginTop: '5px' }}>Original Price: $149.99</span>
          <span style={{ color: '#f0ad4e', marginTop: '5px' }}>Discount: {allDiscounts.find(d => d.code === discountApplied)?.description || 'No Discount'}</span>
          <span style={{ color: '#4CAF50', marginTop: '5px' }}>⭐⭐⭐⭐☆ (4.5/5)</span>
        </div>

        <div style={{ marginTop: '20px' }}>
          <strong>Alternative Discounts</strong>
          {allDiscounts.filter(d => !d.applied).map(discount => (
            <div key={discount.code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
              <div>{discount.code} - {discount.description}</div>
              <button
                onClick={() => applyDiscount(discount.code, discount.percentage, discount.applicable)}
                style={{ background: discount.applicable ? '#f0ad4e' : '#ccc', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: discount.applicable ? 'pointer' : 'not-allowed' }}
              >
                Apply
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px' }}>
          <strong>Select Payment Method</strong>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button onClick={() => setSelectedPayment('SUI')} style={{ padding: '5px 10px', borderRadius: '5px', border: selectedPayment === 'SUI' ? '2px solid #f0ad4e' : '1px solid #ccc', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <img src="src/assets/sui.png" alt="SUI Token" style={{ height: '20px', marginRight: '5px' }} /> SUI Token
            </button>
            <button onClick={() => setSelectedPayment('FIAT')} style={{ padding: '5px 10px', borderRadius: '5px', border: selectedPayment === 'FIAT' ? '2px solid #f0ad4e' : '1px solid #ccc', cursor: 'pointer' }}>Fiat</button>
          </div>
          {selectedPayment === 'FIAT' && (
            <select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)} style={{ marginTop: '10px', padding: '5px', borderRadius: '5px' }}>
              {currencies.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <strong>Final Price:</strong>
          <span>${finalPrice.toFixed(2)} ({(finalPrice / 2.5).toFixed(2)} SUI)</span>
        </div>

        <button
          onClick={handleProceedToCheckout}
          style={{ width: '100%', background: 'orange', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', marginTop: '20px', cursor: 'pointer', transition: '0.3s' }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
