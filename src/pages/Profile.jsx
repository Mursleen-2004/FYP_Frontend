import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, updateUser, loginSuccess } from "../redux/userSlice";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  const [name, setName] = useState(user?.name || "");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(user?.avatar || "");
  const [loading, setLoading] = useState(false);
  const [showFullAvatar, setShowFullAvatar] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    if (!name) {
      toast.error("Name cannot be empty");
      return;
    }

    setLoading(true);
    let avatarUrl = user.avatar;

    try {
      if (avatar) {
        avatarUrl = await uploadToCloudinary(avatar);
        if (!avatarUrl) throw new Error("Cloudinary upload failed");
      }

      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:4000/api/users/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, password, avatar: avatarUrl }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Update failed");

      dispatch(updateUser(data));
      toast.success("Profile Updated!");
      setPassword("");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    setAvatar(null);
    setPreview("");
    toast.success("Logged out");
    navigate("/login");
  };

  // Clear avatar preview on logout
  useEffect(() => {
    if (!user) {
      setAvatar(null);
      setPreview("");
      setName("");
    }
  }, [user]);
  useEffect(() => {
    if (user?.avatar) {
      setPreview(user.avatar);
    }
  }, [user?.avatar]);

  // Auto-fetch profile if user is missing but token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      fetch("http://localhost:4000/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?._id) {
            dispatch(loginSuccess(data));
            setPreview(data.avatar || "");
            setName(data.name);
          } else {
            throw new Error("Invalid token or user not found");
          }
        })
        .catch(() => {
          dispatch(logout());
          localStorage.removeItem("token");
          navigate("/login");
        });
    }
  }, []);

  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") setShowFullAvatar(false);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#0b0c10] flex items-center justify-center px-4 py-10 text-white">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-7 left-6 text-white hover:text-[#66fcf1] flex items-center gap-2 z-50"
      >
        <ArrowLeft className="w-8 h-8 cursor-pointer" />
      </button>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Edit Profile</h2>

        <div className="mb-6 flex flex-col items-center gap-3">
          <img
            onClick={() => setShowFullAvatar(true)}
            src={preview || "https://via.placeholder.com/80"}
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover border-4 border-[#66fcf1] shadow-md cursor-pointer hover:scale-105 transition duration-300"
          />
          <label className="cursor-pointer text-sm text-gray-300 hover:text-white transition">
            <span className="underline">Change Avatar</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="mb-4 text-left">
          <label className="block mb-1 text-gray-300">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/30 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6 text-left">
          <label className="block mb-1 text-gray-300">New Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg bg-black/30 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleUpdate}
          disabled={loading}
          className="bg-[#66fcf1] cursor-pointer text-[#0b0c10] font-semibold px-6 py-2 rounded-full transition mb-4 w-full disabled:opacity-50"
        >
          {loading ? "Updating..." : "Save Changes"}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="bg-red-600 cursor-pointer text-white font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition w-full"
        >
          Logout
        </motion.button>
      </div>

      <AnimatePresence>
        {showFullAvatar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFullAvatar(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.img
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
              src={preview || "https://via.placeholder.com/300"}
              alt="Full Avatar"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-lg border-4 border-white"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
