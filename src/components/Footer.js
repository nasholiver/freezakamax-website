import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Tagline */}
        <motion.div
          className="footer-logo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Freezkmax</h2>
          <p>Empowering crypto for the future of decentralization.</p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="footer-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <a href="https://x.com/FreezaKama" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a href="#about">About</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#team">Meet the Team</a>
          <a href="#contact">Contact</a>
        </motion.div>

        {/* Copyright and Back to Top */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p>© {new Date().getFullYear()} Freezkmax. All rights reserved.</p>
          <a href="#top" className="back-to-top">
            Back to Top ↑
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
