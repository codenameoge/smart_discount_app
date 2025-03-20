import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "your email";
  
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handleVerify = () => {
    console.log("Verifying OTP:", otp);
    setNotification("OTP Verified Successfully!");
    setTimeout(() => {
      navigate("/otp-verified"); // Navigate to OtpverifiedPage.jsx
    }, 2000);
  };

  const handleResend = () => {
    setTimer(600); // Reset timer to 10 minutes
    console.log("Resending OTP to:", email);
  };

  return (
    <div className="flex flex-col items-center bg-grey justify-center min-h-screen p-6">
      <div className="w-full max-w-md">
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 mb-4">
          <ArrowLeft className="mr-2" /> Back
        </button>
        <h2 className="text-2xl font-semibold mb-10 mt-4 text-center text-black">OTP Verification</h2>
        <p className="text-gray-600 text-center">We've sent an OTP to {email}</p>
        <input
          type="text"
          placeholder="Enter OTP"
          className="border p-2 rounded-md mt-4 w-full text-center"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          onClick={handleResend}
          className="mt-4 w-full px-4 py-2 text-black rounded-md hover:bg-orange-200"
          disabled={timer > 0}
        >
          Resend OTP
        </button>
        <button
          onClick={handleVerify}
          className="mt-4 w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-800"
        >
          Verify OTP
        </button>
        <p className="text-gray-600 text-center mt-2">OTP expires in: {formatTime(timer)}</p>
        {notification && <p className="text-green-600 text-center mt-4">{notification}</p>}
      </div>
    </div>
  );
};

export default OTPVerification;
