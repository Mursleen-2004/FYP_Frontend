import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ChatBubble from "../components/ChatBot/ChatBubble";

const Home = () => {
 
  return (
<>
<div className='bg-gradient-to-b from-[#040C18] to-[#031B34]'>       
   <Navbar/>
   
   <Hero />
   <ChatBubble />
        <Features />
        <HowItWorks />
        
         <Testimonials/>
        <Footer/>
</div>

   </>
   
  )
}

export default Home
