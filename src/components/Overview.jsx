import React, { useState } from "react";
import { motion } from "framer-motion";
import reddit from "../assets/reddit.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import groq from "../assets/groq.webp";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import scraping from "../assets/scraping.png";
import vite from "../assets/vite.jpeg";

const techStack = [
  {
    name: "React.js",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    desc: "Frontend built using React for fast, responsive user experience.",
    url: "https://reactjs.org/",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    desc: "Utility-first styling for modern and responsive UI design.",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Framer Motion",
    image:
      "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
    desc: "Smooth animations and transitions using Framer Motion.",
    url: "https://www.framer.com/motion/",
  },
  {
    name: "Vite",
    image: vite,
    desc: "Using Vite for fast and efficient frontend development.",
    url: "https://vitejs.dev/",
  },
  {
    name: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    desc: "Js Backend environment for Routing and Building APIs.",
    url: "https://nodejs.org/",
  },
  {
    name: "Express js",
    image: express,
    desc: "Handles backend routing and server logic efficiently.",
    url: "https://expressjs.com/",
  },
  {
    name: "MongoDB Atlas",
    image: mongodb,
    desc: "Cloud database for storing users, content, and metadata.",
    url: "https://www.mongodb.com/cloud/atlas",
  },
  {
    name: "Groq AI",
    image: groq,
    desc: "Generates intelligent content using Llama4 via Groq AI.",
    url: "https://groq.com/",
  },
  {
    name: "Twitter/X",
    image: twitter,
    desc: "Detects live trends and hashtags from X (Twitter) API.",
    url: "https://developer.x.com/en/docs",
  },
  {
    name: "YouTube",
    image: youtube,
    desc: "Grabs trending video topics and comments from YouTube.",
    url: "https://developers.google.com/youtube/v3",
  },
  {
    name: "Reddit API",
    image: reddit,
    desc: "Extracts real-time discussion topics from Reddit.",
    url: "https://www.reddit.com/dev/api/",
  },
  {
    name: "Web Scraping",
    image: scraping,
    desc: "Extracts data from websites by simulating human browsing behavior.",
    url: "https://www.scrapy.org/",
  },
];

const Overview = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <section
        className="w-full px-6 py-14 font-sans overflow-x-hidden"
        style={{ maxWidth: "100vw", boxSizing: "border-box" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white"
          >
            About{"  "}
            <span className="bg-gradient-to-l from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">
              Content Genius
            </span>
          </motion.h2>

          {/* Card with Hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`bg-transparent backdrop-blur-2xl p-8 rounded-3xl mx-auto shadow-2xl transition-transform duration-300 text-left ${
              hovered ? "scale-[1.02] shadow-[0_20px_40px_rgba(0,0,0,0.1)]" : ""
            }`}
          >
            <p className="text-lg leading-relaxed text-white font-medium mb-6">
              <span className="font-semibold text-teal-600">
                Content Genius
              </span>{" "}
              is an intelligent, AI-driven content creation platform built to
              revolutionize how creators, marketers, educators, and businesses
              produce compelling digital content. Whether you're crafting blog
              posts, social media captions, marketing strategies, or trend
              reports.&nbsp; Content Genius removes the friction of ideation and
              lets you focus on impact.
            </p>

            <ul className="list-disc pl-6 space-y-7 text-white text-[17px]">
              <li>
                <span className="font-bold text-teal-600">
                  Trend Discovery:
                </span>{" "}
                Uses real-time data from platforms like Google, X (Twitter),
                YouTube, and Reddit to detect trending topics globally.
              </li>
              <li>
                <span className="font-semibold text-teal-600">
                  Instant Idea Generation:
                </span>{" "}
                Get content ideas and outlines within seconds based on what's
                hot and relevant to your audience.
              </li>
              <li>
                <span className="font-semibold text-teal-600">
                  AI + ML Powered:
                </span>{" "}
                Utilizes cutting-edge AI algorithms for semantic understanding,
                personalization, and performance prediction.
              </li>
              <li>
                <span className="font-semibold text-teal-600">
                  Built for Everyone:
                </span>{" "}
                Whether you're a solo creator, a startup, or a digital agency,
                the platform adapts to your workflow.
              </li>
              <li>
                <span className="font-semibold text-teal-600">
                  Time-Saving & Scalable:
                </span>{" "}
                Eliminate hours of manual research and brainstorming, so you can
                scale your output efficiently.
              </li>
              <li>
                <span className="font-semibold text-teal-600">
                  Focus on Value:
                </span>{" "}
                Free yourself from repetitive tasks and concentrate on
                delivering real value to your audience.
              </li>
            </ul>

            <p className="mt-6 text-white text-lg font-medium">
              Whether you're building a brand, running a campaign, or teaching
              online - Content Genius is your intelligent co-pilot for content
              excellence.{" "}
              <span className="text-teal-600 font-semibold">
                Start creating smarter, faster, and better.
              </span>
            </p>
          </motion.div>

          {/* Tech Stack Section */}
          <div className="mt-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white mb-10"
            >
              Tech Stack
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {techStack.map((tech, index) => (
                <a href={tech.url} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="cursor-pointer bg-[#0e2544]  hover:bg-gradient-to-br from-[#55152a] to-[#052150] hover:border-b-3 hover:border-[#ffdf77] p-6 rounded-2xl shadow-2xl hover:shadow-lg"
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-16 mx-auto mb-4 object-contain"
                    />
                    <h4 className="text-xl font-semibold text-white text-center mb-2">
                      {tech.name}
                    </h4>
                    <p className="text-white text-sm text-center">
                      {tech.desc}
                    </p>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
