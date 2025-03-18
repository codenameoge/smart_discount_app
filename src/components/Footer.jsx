
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#FABc08] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        
        <div>
          <h3 className="font-bold text-lg">Coupon AI</h3>
          <p className="mt-6 text-sm w-2/3">
            Providing the Best Shopping Experience
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm ">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-300">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Help */}
        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq" className="hover:text-gray-300">FAQs</Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-gray-300">Support</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li>Phone</li>
            <li>Email</li>
            <li>Office Address</li>
          </ul>
        </div>

        {/* Column 5: Follow Us */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Coupon AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
