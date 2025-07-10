import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ceo from "../assets/ceo.jpg";
import Ai_engineer from "../assets/Ai_engineer.jpg";
import DB_Admin from "../assets/DB_Admin.jpg";

const team = [
  {
    name: "Mursleen Bukhari",
    role: "Founder & Full Stack Developer",
    photo: ceo,
    linkedin: "https://www.linkedin.com/in/mursleen-bukhari-322a86259/",
    github: "https://github.com/Mursleen-2004",
  },
  {
    name: "Miraj Arshad",
    role: "AI Engineer",
    photo: Ai_engineer,
    linkedin: "https://www.linkedin.com/in/miraj-arshad-b5425a2b2/",
    github: "https://github.com/Miraj",
  },
  {
    name: "Hasnain Naseem",
    role: "Database Administrator",
    photo: DB_Admin,
    linkedin: "https://linkedin.com/in/alirehman",
    github: "https://github.com/alirehman",
  },
];

const cardVariants = {
  hover: {
    rotateY: 10,
    rotateX: -5,
    scale: 1.06,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  initial: {
    rotateY: 0,
    rotateX: 0,
    scale: 1,
  },
};

const Team = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 drop-shadow-[0_0_20px_rgba(255,0,255,0.3)]">
          Meet the Team Behind <span className="text-white">Content Genius</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="relative bg-gradient-to-br from-[#00C1D0] to-[#0A0F44] cursor-pointer border-2 border-[#393964] p-6 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_60px_rgba(102,252,241,0.4)] transition-all duration-300 group overflow-hidden backdrop-blur-lg"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              {/* Gradient glow ring */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-gradient-to-tr from-pink-500 to-purple-500 opacity-20 blur-3xl rounded-full z-0" />

              {/* Profile Image */}
              <img
                src={member.photo}
                alt={member.name}
                className="relative z-10 w-28 h-28 rounded-full object-cover mx-auto mb-6 border-4 border-cyan-400 shadow-md shadow-cyan-500/30"
              />

              {/* Name & Role */}
              <h3 className="text-2xl font-bold text-center text-white drop-shadow-sm">
                {member.name}
              </h3>
              <p className="text-center text-cyan-400 font-medium mt-1">
                {member.role}
              </p>

              {/* Links */}
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-fuchsia-400 text-2xl transition duration-300 hover:scale-125"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-2xl transition duration-300 hover:scale-125"
                >
                  <FaGithub />
                </a>
              </div>

              {/* Bottom Glow Border Hover Animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-teal-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
