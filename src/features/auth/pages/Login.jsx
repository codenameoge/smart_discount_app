import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginWithBanner = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (password.length >= 8 && /[A-Z]/.test(password)) return "Strong";
    if (password.length >= 6) return "Medium";
    return "Weak";
  };

  const getStrengthColor = () => {
    const strength = getPasswordStrength();
    switch (strength) {
      case "Strong":
        return "bg-green-500 w-full";
      case "Medium":
        return "bg-yellow-400 w-1/2";
      default:
        return "bg-red-500 w-1/4";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password.length >= 8 && /[A-Z]/.test(formData.password)) {
      navigate("/otp-verification", { state: { email: formData.email } });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-black text-center mb-4">Welcome back</h2>
          <p className="text-center font-bold text-gray-600 mb-6">
            Let's Make payment easy for you, please enter your account details
          </p>

          <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-grey-500 text-black hover:bg-orange-600 mb-4 transition-transform transform hover:scale-105">
            <img src="src/assets/sui.png" alt="SUI Logo" className="w-5 h-5" />
            Sign in with SUI
          </button>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex-grow h-px bg-black" />
            <span className="text-gray-500">or</span>
            <div className="flex-grow h-px bg-black" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="At least 8 characters, 1 uppercase"
                className="w-full p-2 pr-10 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-9 right-3 transform translate-y-[-50%] text-gray-600 hover:text-black focus:outline-none"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
              {formData.password && (
                <div className="mt-2">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-2 rounded-full transition-all duration-500 ${getStrengthColor()}`}></div>
                  </div>
                  <p className="text-xs mt-1 text-gray-600">Strength: {getPasswordStrength()}</p>
                </div>
              )}
              <button
                type="button"
                className="text-blue-500 text-sm mt-2 hover:underline"
                onClick={() => navigate("/reset-password")}
              >
                Forgot Password?
              </button>
            </div>

            <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-gradient-to-r from-[#FABC08] to-[#FF4500] text-white mt-6 transition-transform transform hover:scale-105">
              Sign in
            </button>

            <p className="text-center text-sm text-gray-600 mb-6">
              Don't have an account?
              <button
                onClick={() => navigate("/signup")}
                className="text-orange-500 text-lg ml-1 hover:underline"
              >
                Get Started
              </button>
            </p>

            <div className="flex items-center justify-center gap-4 my-4">
              <div className="flex-grow h-px bg-black" />
              <span className="text-gray-500">or</span>
              <div className="flex-grow h-px bg-black" />
            </div>

            <div className="flex flex-grid gap-3">
              <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-white hover:bg-gray-100 transition-transform transform hover:scale-105">
                <img src="src/assets/google.png" alt="Google" className="w-5 h-5" />
                Sign in with Google
              </button>
              <button className="flex items-center justify-center gap-2 w-full p-2 border rounded-lg bg-white hover:bg-gray-100 transition-transform transform hover:scale-105">
                <img src="src/assets/apple.png" alt="Apple" className="w-5 h-5" />
                Sign in with Apple
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center bg-white-500 p-6 rounded-lg shadow-md">
          <div className="flex flex-col items-center mt-4">
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
              onClick={() => navigate("/signup")}
            >
              NOW!
            </button>
            <img
              src="src/assets/signin.png"
              alt="Discount Offer"
              className="w-70 h-90 mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWithBanner;
