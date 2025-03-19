import React, { useState } from 'react';

function CheckoutPage() {
  const [discountApplied, setDiscountApplied] = useState('SAVE25');
  const [finalPrice, setFinalPrice] = useState(149.99);

  const discounts = [
    { code: 'SAVE25', description: '25% OFF', applied: true, percentage: 25 },
    { code: 'NEWUSER20', description: '20% off for new users', applied: false, percentage: 20 },
    { code: 'HOLIDAY15', description: '15% off holiday special', applied: false, percentage: 15 },
  ];

  const [allDiscounts, setDiscounts] = useState(discounts);

  const applyDiscount = (code, percentage) => {
    setDiscountApplied(code);
    setFinalPrice(149.99 * (1 - percentage / 100));

    const updatedDiscounts = discounts.map(discount => ({
      ...discount,
      applied: discount.code === code,
    }));
    setDiscounts(updatedDiscounts);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', width: '90vw', maxWidth: '900px', margin: 'auto' }}>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', background: '#fff' }}>
        <div style={{ height: '150px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="src/assets/headset.png" alt="Product" style={{ borderRadius: '8px', height: '200px'}} />
        </div>

        <div>
          <strong>Best Available Discount</strong>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
            <div>{discountApplied} - {allDiscounts.find(d => d.code === discountApplied)?.description}</div>
            <button style={{ background: '#f0ad4e', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
              Applied
            </button>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <strong>Alternative Discounts</strong>
          {allDiscounts.filter(d => !d.applied).map(discount => (
            <div key={discount.code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
              <div>{discount.code} - {discount.description}</div>
              <button
                onClick={() => applyDiscount(discount.code, discount.percentage)}
                style={{ background: '#f0ad4e', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', transition: '0.3s' }}
                onMouseOver={e => e.target.style.background = '#d98c30'}
                onMouseOut={e => e.target.style.background = '#f0ad4e'}
              >
                Apply
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px' }}>
          <strong>Select Payment Method</strong>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <img src="src/assets/sui.png" alt="SUI Token" style={{ height: '20px', marginRight: '5px' }} />
            <span>SUI Token</span>
          </div>
          <div style={{ marginTop: '10px' }}>$ USD</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <strong>Final Price:</strong>
          <span>${finalPrice.toFixed(2)}</span>
        </div>

        <button
          style={{ width: '100%', background: '#f0ad4e', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', marginTop: '20px', cursor: 'pointer', transition: '0.3s' }}
          onMouseOver={e => e.target.style.background = '#d98c30'}
          onMouseOut={e => e.target.style.background = '#f0ad4e'}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
