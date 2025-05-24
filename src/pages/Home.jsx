import React from 'react'
import { motion } from 'framer-motion'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

// Component Imports
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import TrendingNow from '../components/TrendingNow'
import Footer from '../components/Footer'

const Home = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine)
  }

  const particlesConfig = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#4F46E5" },
      links: { enable: true, color: "#4F46E5", opacity: 0.3 },
      move: { enable: true, speed: 2, outModes: { default: "bounce" } },
      size: { value: 3 },
      opacity: { value: 0.5 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 140, links: { opacity: 1 } } },
    },
    background: { color: "#ffffff" },
  }

  return (
    <div className="relative bg-white text-gray-900 font-poppins overflow-hidden">
      {/* Particle Background */}
      <Particles
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={particlesConfig}
      />

      {/* Main Content */}
      <motion.main
        className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Features />
        <HowItWorks />
        <TrendingNow />

      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
