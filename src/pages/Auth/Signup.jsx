import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice.js";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        formData
      );

      const { user, token } = response.data;

      if (user && token) {
        //  Save token & user locally
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        // Update Redux
        dispatch(loginSuccess(user));

        toast.success("Account created!");
        setTimeout(() => navigate("/"), 2000); 
      } else {
        toast.error("Signup failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div id="Auth" className="min-h-screen flex items-center justify-center px-4">
      <ToastContainer position="top-right" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md border border-white/20 text-white"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66fcf1] focus:bg-white/30 transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66fcf1] focus:bg-white/30 transition"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66fcf1] focus:bg-white/30 transition"
          />
          <button
            type="submit"
            className="w-full bg-[#66fcf1] cursor-pointer hover:bg-[#45a29e] text-[#0b0c10] font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Create Account
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-white">
          Already registered?{" "}
          <Link
            to="/login"
            className="text-[#66fcf1] hover:text-white underline hover:no-underline transition-all"
          >
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
