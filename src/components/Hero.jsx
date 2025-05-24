import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full  h-full object-cover "
        src="bg-video1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
     

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-20 backdrop-blur z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Create. Imagine. Evolve.
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl">
          Empower your creativity with AI. Content Genius transforms ideas into stunning results effortlessly.
        </p>
        <div className="mt-8">
          <button className="bg-gradient-to-r  from-violet-600 cursor-pointer to-pink-400 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition duration-200">
            Try Content Genius
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
