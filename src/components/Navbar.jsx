import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const linkStyle = (path) =>
    location.pathname === path
      ? 'text-violet-600 font-semibold border-b-2 border-pink-400'
      : 'text-gray-800 hover:text-pink-400 transition duration-300'

  const handleLinkClick = () => setIsOpen(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-pink-400 text-transparent bg-clip-text"
        >
          Content Genius
        </Link>

        {/* Hamburger Icon - Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Nav Links */}
        <div className={`
          ${isOpen ? 'flex' : 'hidden'} 
          flex-col lg:flex lg:flex-row lg:items-center 
          items-center justify-center
          gap-6 text-lg 
          absolute lg:static top-full left-0 w-full lg:w-auto 
          bg-white lg:bg-transparent 
          shadow-md lg:shadow-none px-6 py-4 lg:py-0
        `}>
          <Link to="/" className={linkStyle("/")} onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className={linkStyle("/about")} onClick={handleLinkClick}>About</Link>
          <Link to="/dashboard" className={linkStyle("/dashboard")} onClick={handleLinkClick}>Dashboard</Link>
          <Link to="/contact" className={linkStyle("/contact")} onClick={handleLinkClick}>Contact Us</Link>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-violet-600 to-pink-400 cursor-pointer text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
