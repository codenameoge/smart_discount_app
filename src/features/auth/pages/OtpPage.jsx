import { useLocation } from "react-router-dom";
import { useState } from "react";

const OTPVerification = () => {
  const location = useLocation();
  const email = location.state?.email || "your email";

  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    // Implement OTP verification logic here
    console.log("Verifying OTP:", otp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-semibold">Verify Your Email</h2>
      <p className="text-gray-600">We've sent an OTP to {email}</p>
      <input
        type="text"
        placeholder="Enter OTP"
        className="border p-2 rounded-md mt-4"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button
        onClick={handleVerify}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTPVerification;
