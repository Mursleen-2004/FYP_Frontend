import React from 'react'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
 
  return (
<>
<div className='bg-gradient-to-b from-[#040C18] to-[#031B34]'>       
   <Navbar/>
   <Hero />
        <Features />
        <HowItWorks />
         <Testimonials/>
        <Footer/>
</div>

   </>
   
  )
}

export default Home
