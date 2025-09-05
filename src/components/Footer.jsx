import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-slate-200 px-6 py-12 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-4xl font-extrabold bg-gradient-to-l from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent drop-shadow-md mb-3">
            Content Genius
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your ultimate source for trending content, insights, and news.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", to: "/" },
              { name: "About Us", to: "/about" },
              { name: "Trending", to: "/trending" },
              { name: "Contact", to: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="transition duration-300 hover:underline hover:font-bold cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">Follow Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Facebook size={18} className="text-cyan-300 hover:text-white transition" />
              <a href="#" className="hover:underline hover:font-bold transition duration-300 cursor-pointer">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={18} className="text-cyan-300 hover:text-white transition" />
              <a href="#" className="hover:underline hover:font-bold transition duration-300 cursor-pointer">Twitter</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={18} className="text-cyan-300 hover:text-white transition" />
              <a href="#" className="hover:underline hover:font-bold transition duration-300 cursor-pointer">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={18} className="text-cyan-300 hover:text-white transition" />
              <a href="#" className="hover:underline hover:font-bold transition duration-300 cursor-pointer">LinkedIn</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">Contact</h3>
          <p>musabukhari20@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-600 mt-10 pt-6 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} <b>Content Genius</b>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
