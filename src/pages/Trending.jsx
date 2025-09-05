import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import pakistanFlag from "../assets/pakistan-flag.png";
import copy from "../assets/copy.png";
import twitter from "../assets/twitter.png";

// Platform icons
const platformIcons = {
  twitter: <img src={twitter} alt="X" className="w-7 h-7" />,
  youtube: (
    <img
      src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
      alt="YouTube"
      className="w-7 h-7"
    />
  ),
  reddit: (
    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111589.png"
      alt="Reddit"
      className="w-7 h-7"
    />
  ),
  google: (
    <img
      src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
      alt="Google"
      className="w-7 h-7"
    />
  ),
  pakistan: <img src={pakistanFlag} alt="Pakistan" className="w-7 h-7" />,
};

// Single Trend Section
const Section = ({ icon, title, trends }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="bg-gradient-to-br from-[#247B9F] to-[#022433] hover:scale-105 transition-all duration-400 rounded-2xl p-6 shadow-[0_10px_25px_rgba(102,252,241,0.1)] hover:shadow-[0_15px_30px_rgba(102,252,241,0.2)] w-full"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>

      <ul className="list-decimal pl-6 text-[#c5c6c7] space-y-2">
        {trends?.map((trend, index) => {
          const encodedTrend = encodeURIComponent(trend.trim());
          let link = "#";

          if (title.toLowerCase().includes("twitter")) {
            link = `https://twitter.com/search?q=${encodedTrend}`;
          } else if (title.toLowerCase().includes("youtube")) {
            link = `https://www.youtube.com/results?search_query=${encodedTrend}`;
          } else if (title.toLowerCase().includes("reddit")) {
            link = `https://www.reddit.com/search/?q=${encodedTrend}`;
          } else {
            link = `https://www.google.com/search?q=${encodedTrend}`;
          }

          return (
            <li key={index} className="flex items-center justify-between group">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#66fcf1] transition-all cursor-pointer inline-block max-w-[80%] truncate"
              >
                {trend}
              </a>
              <button
                onClick={() => handleCopy(trend)}
                className="ml-2 text-sm text-gray-400 group-hover:text-[#66fcf1] hover:scale-110 transition"
                title="Copy to clipboard"
              >
                <img src={copy} alt="Copy" className="w-5 h-5 cursor-pointer" />
              </button>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

// Main Trending Page
const TrendingPage = () => {
  const [trends, setTrends] = useState({});
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrends = async () => {
      const token = currentUser?.token || localStorage.getItem("token");
      if (!token) {
        console.warn("Token missing");
        return;
      }

      try {
        const { data } = await axios.get("http://localhost:4000/api/trends", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Cache-Control": "no-cache",
          },
        });

        setTrends(data);
      } catch (error) {
        console.error("Error fetching trends:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrends();
  }, [currentUser]);

  return (
    <div className="bg-gradient-to-b from-[#040C18] to-[#031B34] min-h-screen">
      <Navbar />
      <div className="px-4 py-12 text-white overflow-x-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-10 mt-20"
        >
          {loading ? "Loading Trends..." : "Top Trends Today"}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.keys(trends).map((platform) => (
            <Section
              key={platform}
              icon={
                platformIcons[platform] || (
                  <span className="text-[#66fcf1] text-xl">🔥</span>
                )
              }
              title={
                platform === "twitter"
                  ? "X"
                  : platform.charAt(0).toUpperCase() + platform.slice(1)
              }
              trends={trends[platform]}
            />
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95, rotate: -1 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => navigate("/generate")}
            className="cursor-pointer text-white bg-black hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Create Post
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default TrendingPage;
