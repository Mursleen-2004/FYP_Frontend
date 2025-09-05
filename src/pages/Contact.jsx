import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import { ArrowLeft } from "lucide-react";

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', '1e565e12-8ae1-4f70-b131-62bb20d4f6cb');

    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        toast.success(' Message sent!');
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          navigate('/');
        }, 2000); 
      } else {
        toast.error(' Something went wrong. Please try again.');
      }
    } catch (err) {
      toast.error(' Network error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-[#0a0c77]  to-[#111111] flex items-center justify-center px-4 py-12"
    >
       <button
        onClick={() => navigate(-1)}
        className="absolute top-7 left-6 text-white hover:text-[#66fcf1] flex items-center gap-2 z-50"
      >
        <ArrowLeft className="w-8 h-8 cursor-pointer" />
      </button>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-transparent w-full max-w-xl p-8 md:p-12 rounded-2xl justify-center text-center shadow-2xl text-white"
      >
        <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
       

        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          disabled={loading}
          className="w-full bg-slate-800 text-white border border-slate-600 rounded-xl p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-400"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          disabled={loading}
          className="w-full bg-slate-800 text-white border border-slate-600 rounded-xl p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-400"
        />
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Message..."
          disabled={loading}
          className="w-full bg-slate-800 text-white border border-slate-600 rounded-xl p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-400 resize-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#F49867] cursor-pointer text-white hover:scale-105 du py-3 px-6 rounded-xl font-bold shadow-lg transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        <ToastContainer />
      </form>
    </motion.div>
  );
}

export default ContactPage;
