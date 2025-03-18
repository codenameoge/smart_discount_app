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
        <img src="src/assets/hd.png" alt="Special Offer" width="500" height="150" />
        {/* Replace with your image */}
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

        <div className="flex gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src="src/assets/scan.png" alt="Scan for Discount" className="w-24 h-24 mb-2" />
            <button className="scan-button px-4 py-2 bg-blue-500 text-white rounded-lg">Scan for Discount</button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src="src/assets/topup.png" alt="Top Up Wallet" className="w-24 h-24 mb-2" />
            <button className="topup-button px-4 py-2 bg-green-500 text-white rounded-lg">Top Up Wallet</button>
          </div>
        </div>



        <div className="flex gap-4">
          <div className="bg-white shadow-lg rounded-lg p-4 w-1/2">
            <div className="text-lg font-semibold">Reward Balance</div>
            <img src="src/assets/hd.png" alt="Reward Balance" className="mt-2 w-24 h-24" />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 w-1/2">
            <div className="text-lg font-semibold">Recent Activity</div>
            <img src="src/assets/hd.png" alt="Recent Activity" className="mt-2 w-24 h-24" />
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
