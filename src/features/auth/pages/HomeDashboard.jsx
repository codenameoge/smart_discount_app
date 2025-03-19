import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPurchaseLink } from "./homeSlice"; // Assuming you created homeSlice.js
import "./Home.css";

const HomeDashboard = () => {
  const dispatch = useDispatch();

  // Use optional chaining to avoid accessing properties of undefined
  const purchaseLink =
    useSelector((state) => state.home?.purchaseLink) ||
    "https://example.com/buy-now";
  const recentPurchases =
    useSelector((state) => state.home?.recentPurchases) || [];

  const handleLinkChange = (e) => {
    dispatch(setPurchaseLink(e.target.value));
  };

  return (
    <div className="home-container">
      <div className="content">
        {/* First Section */}
        <div>
          {/* Special Offer Section */}
          <div className="special-offer">
            <img
              src="src/assets/hd.png"
              alt="Special Offer"
              width="500"
              height="150"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="w-full bg-white p-4 rounded-lg shadow-md flex justify-center items-center flex-col">
          {/* Product Purchase Link Input */}
          <div className="link-input">
            <label htmlFor="purchase-link" className="block text-gray-700">Product Purchase Link:</label>
            <input
              id="purchase-link"
              type="text"
              placeholder="Paste product purchase link"
              value={purchaseLink}
              onChange={handleLinkChange}
            />
          </div>

          {/* Scan & Top-Up Buttons */}
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                src="src/assets/sui.png"
                alt="Scan for Discount"
                className="w-24 h-24 mb-2"
              />
              <button className="scan-button px-4 py-2 bg-blue-500 text-white rounded-lg">
                Scan for Discount
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                src="src/assets/sui.png"
                alt="Top Up Wallet"
                className="w-24 h-24 mb-2"
              />
              <button className="topup-button px-4 py-2 bg-green-500 text-white rounded-lg">
                Top Up Wallet
              </button>
            </div>
          </div>

          {/* Reward Balance & Recent Activity in Separate Cards */}
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                src="src/assets/sui.png"
                alt="Scan for Discount"
                className="w-24 h-24 mb-2"
              />
              <button className="scan-button px-4 py-2 bg-blue-500 text-white rounded-lg">
                Reward Balance
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center margin_top-20">
              <img
                src="src/assets/sui.png"
                alt="Top Up Wallet"
                className="w-24 h-24 mb-2"
              />
              <button className="topup-button px-4 py-2 bg-green-500 text-white rounded-lg">
                Recent Activity
              </button>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="recent-purchases bg-cover bg-center" style={{ backgroundImage: "url('src/assets/sale.png')", height: "400px", width:"100%", justifyContent:"fit" }}>
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
      </div>
    </div>
  );
};

export default HomeDashboard;
