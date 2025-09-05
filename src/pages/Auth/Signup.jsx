import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice.js";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    //  password validation
    if (name === "password") {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])[A-Za-z\d\W_]{8,16}$/;
      if (!passwordRegex.test(value)) {
        setPasswordError(
          "Password must be 8–16 characters, include at least 1 uppercase and 1 special character."
        );
      } else {
        setPasswordError("");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])[A-Za-z\d\W_]{8,16}$/;

    if (!passwordRegex.test(formData.password)) {
      setPasswordError(
        "Password must be 8-16 characters, include at least 1 uppercase and 1 special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        formData
      );
      const { user, token } = response.data;

      if (user && token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginSuccess(user));
        toast.success("Account created!");
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error("Signup failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      id="Auth"
      className="min-h-screen flex items-center justify-center px-4"
    >
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

          {/* Password Input with Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              maxLength={16}
              className="w-full px-4 py-3 pr-12 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66fcf1] focus:bg-white/30 transition"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </div>
          </div>

          {/* Password Error */}
          {passwordError && (
            <p className="text-[#ff0101] text-sm font-semibold mt-1">{passwordError}</p>
          )}

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
