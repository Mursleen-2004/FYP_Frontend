import React from 'react'
import { motion } from 'framer-motion'
import { FaRobot, FaChartLine, FaUpload } from 'react-icons/fa'

const features = [
  {
    title: "AI-Powered Creativity",
    description: "Generate trending, high-quality content in seconds using advanced AI models.",
    icon: <FaRobot />,
  },
  {
    title: "Real-Time Trends",
    description: "Stay ahead with insights from platforms like Twitter, Reddit, and YouTube.",
    icon: <FaChartLine />,
  },
  {
    title: "One-Click Publishing",
    description: "Publish your content directly to blogs or social media with ease.",
    icon: <FaUpload />,
  }
]

const Features = () => {
  return (
    <section className="py-24 px-6 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-wide font-sans"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Why Content Genius?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="
              relative flex flex-col items-center text-center p-10 
              bg-transparent 
              rounded-3xl hover:border-l-3 hover:border-r-3
              cursor-pointer
              border- 
              shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40
              transition-all duration-300 transform hover:border-[#F49867] hover:-translate-y-1 hover:scale-[1.03]
              backdrop-blur-md group
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon container */}
            <div className="w-16 h-16 mb-6 rounded-full bg-[#F49867] text-black flex items-center justify-center text-3xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight font-sans">
              {feature.title}
            </h3>

            <p className="text-[#c5c6c7] leading-relaxed font-light text-base max-w-[300px]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
