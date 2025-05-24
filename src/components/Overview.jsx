import React from "react";
import { useState } from "react";

const Overview = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="w-full p-10 rounded-3xl bg-gradient-to-tr from-gray-400 via-gray-200 to-white shadow-lg font-sans"
      style={{ maxWidth: "100vw", boxSizing: "border-box" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-4xl font-extrabold mb-5 select-none text-gray-900"
          style={{ letterSpacing: "1.2px" }}
        >
          Welcome to{" "}
          <span className="text-teal-500 drop-shadow-md">Content Genius</span>
        </h2>
        <p
          className={`text-lg font-medium leading-relaxed select-text text-gray-700 transition-transform duration-300 ${
            hovered ? "scale-105" : ""
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ maxWidth: "100%" }} // Full width inside container
        >
          Content Genius is an innovative AI-powered content creation platform
          designed to empower creators, marketers, and businesses to produce
          high-quality, engaging content with ease. Leveraging cutting-edge
          machine learning algorithms and real-time trend analysis, Content Genius
          identifies emerging topics and audience interests, enabling users to
          generate relevant content ideas instantly. This eliminates the guesswork
          traditionally associated with content strategy and helps maintain a
          competitive edge in a fast-paced digital landscape.
          <br />
          <br />
          With Content Genius, users can streamline their content creation
          process, save time and resources, and focus on what truly matters - 
          delivering value to their audience. Whether you&apos;re a seasoned
          content creator or just starting out, Content Genius offers a user-friendly
          interface and powerful tools to help you achieve your content goals.
        </p>
      </div>
    </section>
  );
};

export default Overview;
