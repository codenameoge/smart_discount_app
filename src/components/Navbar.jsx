import { useState } from 'react';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#F1FAFF]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-8 h-8" /> 
        </Link>

        

        <div className='flex gap-8'>
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/login" className="text-primary font-bold flex gap-2">
            Log in <p><FaArrowRight className='bg-primary rounded-full text-white mt-1 text-[18px]'/></p>
          </Link>

          <Link
            to="/FindDiscount"
            className="text-primary  px-2 rounded outline"
          >
            Find Discount
          </Link>
          
          <Link
            to="/signup"
            className="text-primary  px-2 rounded outline"
          >
            Sign Up
          </Link>

        </div>

        <button
          className="text-primary  text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        </div>
        
      </div>

      {/* Dropdown Menu (Large & Small Screens) */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg lg:absolute lg:right-0 lg:mt-3 lg:w-64">
          <ul className="flex flex-col items-center space-y-4 py-4 lg:py-6">
            {/* Mobile: Log in button at the top */}
            {/* <li className="lg:hidden">
              <Link
                to="/login"
                className="text-blue font-semibold"
                onClick={toggleMenu}
              >
                Log in
              </Link>
            </li> */}

            {/* Navigation Items */}
            <li>
              <Link to="/" className="text-blue hover:text-blue" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/FindDiscount"
                className="text-blue"
                onClick={toggleMenu}
              >
                Find Discount
              </Link>
            </li>
            <li>
              <Link
                to="/book-a-doctor"
                className="text-blue"
                onClick={toggleMenu}
              >
                Book a Doctor
              </Link>
            </li>
            <li>
              <Link
                to="/pharmacy"
                className="text-blue"
                onClick={toggleMenu}
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="text-blue"
                onClick={toggleMenu}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/learn more"
                className="text-blue"
                onClick={toggleMenu}
              >
                Learn More
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
