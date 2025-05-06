// src/components/Navbar.jsx

import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useUser } from '../features/auth/pages/UserContext';  // Import the useUser hook

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const { user } = useUser();  // Access the user from context

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const allowedPaths = ['/FindDiscount', '/payments', '/discount-result', '/products', '/checkout' ];

  const handleLogout = () => {
    // Handle logout logic (for example, clear user data)
    navigate('/login');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleProfileModal = () => {
    setIsDropdownOpen(false);
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => setIsProfileModalOpen(false);

  const renderLinks = () => {
    if (path === '/login' || path === '/signup' || path === '/')
      return (
        <div className="flex items-center items-left space-x-6">
          <Link to="/" className="text-primary font-bold">Home</Link>
          <Link to="/about" className="text-primary font-bold">About</Link>
          <Link to="/login" className="text-primary font-bold">Sign-in</Link>
          <Link to="/signup" className="text-primary font-bold">Get Started</Link>
        </div>
      );
    if (path === '/new-password' || path === '/password-reset' || path === '/reset-password')
      return (
        <div className="flex items-center items-left space-x-6">
          <Link to="/" className="text-primary font-bold">Home</Link>
          <Link to="/about" className="text-primary font-bold">About</Link>
          <Link to="/login" className="text-primary font-bold">Sign-in</Link>
          <Link to="/signup" className="text-primary font-bold">Get Started</Link>
        </div>
      );
    return (
      <div className="flex items-center items-left space-x-6">
        <Link to="/" className="text-primary font-bold">Home</Link>
        <Link to="/about" className="text-primary font-bold">About</Link>
        <Link to="/login" className="text-primary font-bold">Sign-out</Link>
      </div>
    );
  };

  return (
    <nav className="bg-[#F1FAFF] dark:bg-gray-800 shadow-md transition duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="src/assets/logo2.png" alt="Logo" className="w-8 h-8" />
        </Link>

        {/* Links */}
        {renderLinks()}

        {/* Profile Picture & Name (Only show on allowed paths) */}
        {user && allowedPaths.includes(path) && (
          <div className="relative flex flex-col items-center">
            <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
              <img
                src={user.profileImage || 'https://i.pravatar.cc/40'}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-primary"
              />
              <MdKeyboardArrowDown className="text-primary" />
            </button>
            <span className="text-xs mt-1 dark:text-white">{user.username}</span>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-12 w-48 bg-orange dark:bg-orange-700 shadow-md rounded-md transition-all">
                <button
                  onClick={toggleProfileModal}
                  className="block w-full px-4 py-2 text-left bg-white text-black hover:bg-orange-100 dark:hover:bg-orange-600"
                >
                  User Profile
                </button>
                <Link
                  to="/wallet"
                  className="block px-4 py-2 text-black bg-white hover:bg-orange-100 dark:hover:bg-orange-600"
                >
                  Wallet Balance
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-black bg-white hover:bg-orange-100 dark:hover:bg-orange-600"
                >
                  Settings
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
