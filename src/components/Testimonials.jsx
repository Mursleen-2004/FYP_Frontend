import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Content Marketer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Content Genius transformed how I plan my blog posts. The AI content ideas are spot on, saving me hours every week!",
  },
  {
    name: "James L.",
    role: "Small Business Owner",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    feedback:
      "Thanks to Content Genius, I always stay on top of trending topics and my social media engagement has skyrocketed.",
  },
  {
    name: "Priya M.",
    role: "Freelance Writer",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "The real-time trend discovery is a game-changer. Content Genius makes content creation effortless and fun.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-20 w-full"
      style={{ maxWidth: "100vw", boxSizing: "border-box" }}
    >
      <h3 className="text-3xl font-extrabold mb-12 text-center text-slate-900">
        What Our Users Say
      </h3>
      <div className="grid gap-10 sm:grid-cols-3">
        {testimonials.map(({ name, role, photo, feedback }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.25, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotateX: 8,
              rotateY: 8,
              boxShadow:
                "0 20px 40px rgba(59, 130, 246, 0.4), 0 10px 20px rgba(37, 99, 235, 0.3)",
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="bg-gradient-to-br from-[#50d5b7]   

to-[#067d68]

 rounded-3xl p-6 cursor-pointer
                       text-white shadow-lg transform-gpu perspective-1000
                       border border-transparent hover:border-blue-400 transition-all duration-400"
          >
            <p className="mb-6 italic leading-relaxed drop-shadow-lg text-white/90">
              “{feedback}”
            </p>
            <div className="flex items-center">
              <img
                src={photo}
                alt={name}
                className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-white shadow-md"
              />
              <div>
                <p className="font-semibold text-white drop-shadow">{name}</p>
                <p className="text-sm text-white/80">{role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
