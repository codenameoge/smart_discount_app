import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPurchaseLink } from './homeSlice'; // Assuming you created homeSlice.js
import './Home.css';

const HomeDashboard = () => {
  const dispatch = useDispatch();

  // Use optional chaining to avoid accessing properties of undefined
  const purchaseLink = useSelector((state) => state.home?.purchaseLink) || "https://example.com/buy-now";
  const recentPurchases = useSelector((state) => state.home?.recentPurchases) || [];

  const handleLinkChange = (e) => {
    dispatch(setPurchaseLink(e.target.value));
  };

  return (
    <div className="home-container">
      <div className="content">
        <div className="special-offer">
          <img src="src\assets\guts.jpg" alt="Special Offer" /> {/* Replace with your image */}
          <div className="offer-text">
            <h2>SPECIAL OFFER</h2>
            <p>Order now!</p>
          </div>
        </div>

        <div className="link-input">
          <input
            type="text"
            placeholder="Paste product purchase link"
            value={purchaseLink}
            onChange={handleLinkChange}
          />
        </div>

        <div className="actions">
          <button className="scan-button">Scan for Discount</button>
          <button className="topup-button">Top Up Wallet</button>
        </div>

        <div className="balances">
          <div className="balance-item">
            Reward Balance
          </div>
          <div className="balance-item">
            Recent Activity
          </div>
        </div>

        <div className="recent-purchases">
          <h2>Recent Purchases</h2>
          {recentPurchases.length > 0 ? (
            recentPurchases.map((purchase, index) => (
              <div className="purchase-item" key={index}>
                <div className="purchase-details">
                  {purchase?.item || "Unknown Item"}
                  <br />
                  Saved: {purchase?.saved || "N/A"}
                </div>
                <div className="purchase-date">
                  {purchase?.date || "Unknown Date"}
                </div>
              </div>
            ))
          ) : (
            <p>No recent purchases available.</p>
          )}
        </div>

        <div className="sale-banner">
          {/* Your sale banner image or text */}
          SALE
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
