import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import contactIcon from "../assets/contact.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const linkStyle = (path) =>
    location.pathname === path
      ? "text-white font-semibold border-b-2 border-gray-300"
      : "text-white hover:text-pink-400 hover:scale-105 transition-all duration-400";

  const handleLinkClick = () => setIsOpen(false);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full backdrop-blur-md shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-l from-[#AE67FA] to-[#F49867] hover:scale-105 transition-all duration-400 text-transparent bg-clip-text"
        >
          Content Genius
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen
              ? "flex bg-gradient-to-bl from-[#AE67FA] to-[#dd9873]"
              : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center items-center justify-center gap-9 text-lg absolute lg:static top-full left-0 w-full lg:w-auto text-white lg:bg-transparent shadow-md lg:shadow-none px-6 py-4 lg:py-0`}
        >
          <Link to="/" className={linkStyle("/")} onClick={handleLinkClick}>
            Home
          </Link>
          <Link
            to="/trending"
            className={linkStyle("/trending")}
            onClick={handleLinkClick}
          >
            Trending
          </Link>
          <Link
            to="/about"
            className={linkStyle("/about")}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className={linkStyle("/dashboard")}
            onClick={handleLinkClick}
          >
            Dashboard
          </Link>
          <Link
            to="/contact"
            className={`${linkStyle("/contact")} flex items-center gap-2`}
            onClick={handleLinkClick}
          >
            <img
              src={contactIcon}
              alt="Contact"
              className="w-8 h-8 hover:scale-105 transition duration-300"
            />
          </Link>

          {/* Auth Section */}
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <Link to="/profile">
                <img
                  src={
                    user.avatar ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white hover:scale-105 transition duration-300 cursor-pointer"
                />
              </Link>

              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg px-4 py-2 z-50 w-40"></div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#F49867] text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition duration-300"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
