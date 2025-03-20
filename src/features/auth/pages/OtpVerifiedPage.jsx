import React, { useState } from 'react';

function VerificationModal() {
  const [resendClicked, setResendClicked] = useState(false);

  const handleResend = () => {
    // Simulate resending the verification code
    console.log("Resending verification code...");
    setResendClicked(true);
    // You would typically make an API call here to resend the code
    setTimeout(() => {
      setResendClicked(false);
    }, 2000); // Reset after 2 seconds (simulate loading)
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-end">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-xl text-black font-semibold mb-4 text-center">Account Verification</h2>
        <p className="text-gray-600 text-center mb-6">
          Your account has been Verified
        </p>
        <div className="flex justify-center space-x-4">
          <button className="flex items-center justify-center gap-2 w-58 p-2 border rounded-lg bg-orange-500 text-white hover:bg-orange-900 mb-4 ml-4">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificationModal;