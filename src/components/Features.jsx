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
    <section className="py-24 bg-gradient-to-b from-[#0A1F30] to-[#112B3C] text-center px-6">
      <motion.h2
        className="text-4xl font-extrabold text-gray-100 mb-16 tracking-wide font-sans"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        Why Content Genius?
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="
              relative flex flex-col items-start p-10 bg-gradient-to-tr from-[#112B3C] to-[#1C3B50]
              rounded-3xl border border-transparent 
              shadow-lg shadow-cyan-900/40
              hover:border-cyan-400 hover:shadow-[0_15px_30px_rgb(22,255,255,0.3)]
              transition
              cursor-pointer
              backdrop-blur-md
              group
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.3 }}
            whileHover={{ scale: 1.04 }}
          >
            
            {/* Icon container */}
            <div className="w-14 h-14 mb-6  rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white text-2xl font-semibold shadow-md group-hover:shadow-lg transition-shadow">
              {feature.icon}
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-100 mb-3 tracking-tight font-sans">
              {feature.title}
            </h3>
            
            <p className="text-gray-300 leading-relaxed font-light text-base max-w-[320px]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
