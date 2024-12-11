import React from "react";
import { motion } from "framer-motion";
import "./RoadmapSection.css";

const roadmapData = [
  { phase: "Phase 1", title: "Foundation", description: "Launch Freezkmax and build a strong community." },
  { phase: "Phase 2", title: "Expansion", description: "Partner with innovative projects and list on exchanges." },
  { phase: "Phase 3", title: "Utility", description: "Introduce staking, NFTs, and a decentralized app (dApp)." },
  { phase: "Phase 4", title: "Global Reach", description: "Expand adoption and achieve mass scalability." },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap-section">
      <div className="hero-container">
        <motion.h2
          className="roadmap-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Roadmap to <span className="highlight">Greatness</span>
        </motion.h2>
        <div className="roadmap-timeline">
          {roadmapData.map((step, index) => (
            <motion.div
              key={step.phase}
              className="roadmap-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="roadmap-circle">
                <span>{step.phase}</span>
              </div>
              <div className="roadmap-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
