import React from 'react'
import { motion } from 'framer-motion'
import Overview from '../components/Overview'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import Footer from '../components/Footer'

const About = () => {
  return (
    <motion.div
      className="pt-20 px-4 bg-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Overview />
      <Testimonials />
      <Team />
      <Footer/>
    </motion.div>
  )
}

export default About
