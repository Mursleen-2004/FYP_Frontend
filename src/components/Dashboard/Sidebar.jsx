import { motion } from "framer-motion";
import { FaHome, FaChartBar, FaSave, FaFire, FaCogs } from "react-icons/fa";

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-64 h-screen bg-[#1f2833] text-[#66fcf1] p-5 fixed"
    >
      <h1 className="text-2xl font-bold mb-10">Content Genius</h1>
      <ul className="space-y-6 text-lg">
        <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaHome /> Dashboard</li>
        <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaFire /> Trending</li>
        <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaSave /> Saved Trends</li>
        <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaChartBar /> Analytics</li>
        <li className="hover:text-white cursor-pointer flex items-center gap-2"><FaCogs /> Settings</li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
