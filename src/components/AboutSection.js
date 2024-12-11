import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

const AboutPage = () => {
  return (
    <section id="about" className="about-section">
      <div className="hero-container">
     
        <motion.div
          className="crypto-animation"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="crypto-grid">
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
          </div>
        </motion.div>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>
            About <span className="highlight">Freezkmax</span>
          </h2>
          <p>
            ❄️ Freezkmax is not just a meme coin. It's a revolution in the
            crypto universe. With cutting-edge blockchain technology, we're
            bringing coolness and innovation to the forefront of decentralized
            finance.
          </p>
          <p>
            🚀 Join a community of forward-thinkers, trailblazers, and crypto
            enthusiasts as we pave the way to a brighter and frostier future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
