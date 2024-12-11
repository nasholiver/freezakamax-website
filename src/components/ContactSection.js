import React from "react";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="">
        {/* Get in Touch Header */}
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in <span className="highlight">Touch</span>
        </motion.h2>
        <motion.p
          className="contact-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Got questions, ideas, or just want to chat? Follow us on{" "}
          <motion.span
            className="twitter-mention"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTwitter size={24} /> X
          </motion.span>{" "}
          or drop a message below.
        </motion.p>

        {/* Twitter Follow Button */}
        <motion.div
          className="follow-twitter"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <a
            href="https://x.com/FreezaKama"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter-button"
          >
            <FaTwitter className="twitter-icon" /> Follow us on X
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <form className="contact-form">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="contact-input"
              whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px #00d4ff" }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="contact-input"
              whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px #00d4ff" }}
            />
            <motion.textarea
              placeholder="Your Message"
              className="contact-textarea"
              rows="5"
              whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px #00d4ff" }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="contact-submit"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#00d4ff",
                color: "#fff",
              }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
