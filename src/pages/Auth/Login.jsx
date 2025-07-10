import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice.js";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", formData);

      if (response.data.token) {
        toast.success("Logged in successfully!");

        //  Store in localStorage (optional for persistence)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        //  Dispatch both token + user to Redux
        dispatch(loginSuccess({
          token: response.data.token,
          user: response.data.user,
        }));

        // Redirect to /
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
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
        <h2 className="text-4xl font-bold mb-6 text-center">Log In</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66fcf1] focus:bg-white/30 transition"
          />
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66fcf1] focus:bg-white/30 transition"
          />

          <button
            type="submit"
            className="w-full bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-xl"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#66fcf1] hover:text-white underline">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
