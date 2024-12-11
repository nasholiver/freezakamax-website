import React from "react";
import { motion } from "framer-motion";
import "./TeamSection.css";
import Hero1 from "../assets/models/model1.jpg"
import Hero2 from "../assets/models/model2.jpg"
import Hero3 from "../assets/models/model3.jpg"
import Hero4 from "../assets/models/model4.jpg"


const teamMembers = [
  {
    name: "Akesha Patel",
    role: "CEO & Founder",
    img: Hero1,
    bio: "Visionary leader with a passion for decentralized technologies.",
  },
  {
    name: "Bob Johnson",
    role: "Lead Developer",
    img: Hero2,
    bio: "Coding genius creating the backbone of Freezkmax.",
  },
  {
    name: "Joshua Karlos",
    role: "Marketing Head",
    img: Hero3,
    bio: "Crafting narratives to make Freezkmax viral.",
  },
  {
    name: "Dan Williams",
    role: "Blockchain Architect",
    img: Hero4,
    bio: "Designing secure and scalable blockchain solutions.",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="team-section">
      <div className="hero-container reverse-mobile">
        {/* Section Title */}
    
        {/* Team Members Grid */}
        <motion.div
          className="team-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              className="team-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={member.img} alt={member.name} className="team-photo" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="team-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet the <span className="highlight">Team</span>
        </motion.h2>

      </div>
    </section>
  );
};

export default MeetTheTeam;
