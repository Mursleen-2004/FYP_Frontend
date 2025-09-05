import React from 'react'
import { motion } from 'framer-motion'
import Overview from '../components/Overview'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <motion.div
      className="pt-20 px-4 bg-gradient-to-b from-[#09203F] to-[#031d33] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar/>
      <Overview />
      <Team />
      <Footer/>
      
    </motion.div>
  )
}

export default About
