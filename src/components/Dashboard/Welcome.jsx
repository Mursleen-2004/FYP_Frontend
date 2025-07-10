import { motion } from "framer-motion";

const WelcomeBanner = ({ name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-gradient-to-r from-[#1f2833] via-[#0b0c10] to-[#1f2833] p-6 rounded-xl shadow-lg border border-[#45a29e] overflow-hidden"
    >
      {/* Glowing border animation */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#66fcf1] to-transparent opacity-40"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
         Welcome back,
        <span className="text-[#66fcf1] ml-2 relative group inline-block">
          {name}
          {/* Animated underline */}
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#66fcf1] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </span>
      </h1>

      <p className="text-sm text-gray-400 mt-1">
        Let's create something awesome today! 
      </p>
    </motion.div>
  );
};

export default WelcomeBanner;