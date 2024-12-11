import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";


const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Welcome to <span className="highlight">Freezkmax</span>
          </h1>
          <p>
            ❄️ The coolest crypto in the galaxy, where innovation meets fun.
          </p>
          <p>🚀 Ready to freeze the competition? Join the revolution today.</p>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#00a3cc",
              boxShadow: "0px 4px 15px rgba(0, 212, 255, 0.4)",
            }}
            whileTap={{ scale: 0.9 }}
            className="cta-button"
            // open in new tab
            onClick={() => window.open("https://x.com/FreezaKama", "_blank")}
          >
            Get Started
          </motion.button>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="crypto-circle"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
