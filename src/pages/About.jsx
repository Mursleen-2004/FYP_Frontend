import React from 'react'
import { motion } from 'framer-motion'
import Overview from '../components/Overview'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <motion.div
      className="pt-20 px-4 bg-gradient-to-b from-[#040C18] to-[#031B34] min-h-screen"
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
