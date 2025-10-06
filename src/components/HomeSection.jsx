import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

// Skill icons
const skillImages = {
  "Web Developer": "🖥️",
  "Mobile Developer": "📲",
  "Data Analyst": "📊",
  "UI/UX Designer": "🎨",
  "Machine Learning Specialist": "🤖",
  "Entrepreneur": "💼",
};

const HomeSection = () => {
  const skillKeys = Object.keys(skillImages);

  // Track the current index of the skill
  const [currentIndex, setCurrentIndex] = useState(0);

  // Skill text for typing
  const skillStrings = skillKeys.map((s) => `I am a ${s}`);

  // Function to update index (loops infinitely)
  const handleNextSkill = () => {
    setCurrentIndex((prev) => (prev + 1) % skillKeys.length);
  };

  return (
    <section
      style={{
        minHeight: "75vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0A0F1C 60%, #1A1F3C)",
        color: "#E0E0E0",
        textAlign: "center",
        padding: "7rem 2rem 4rem",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#A259FF",
          textShadow: "0 0 15px #A259FF",
        }}
      >
        Hi, I am Nelly Mururi.{" "}
        <motion.span
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ display: "inline-block" }}
        >
          👋
        </motion.span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          fontSize: "1.8rem",
          color: "#00FFFF",
          textShadow: "0 0 10px #00FFFF",
        }}
      >
        <ReactTyped
          strings={[skillStrings[currentIndex]]} 
          typeSpeed={80}
          backSpeed={40}
          showCursor={true}
          loop={false} 
          onComplete={handleNextSkill} 
        />
      </motion.h2>

      <motion.div
        key={skillKeys[currentIndex]} 
        initial={{ scale: 0.9, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          fontSize: "5rem",
          marginTop: "1.5rem",
          filter: "drop-shadow(0 0 15px #00FFFF)",
          lineHeight: 1,
        }}
      >
        {skillImages[skillKeys[currentIndex]]}
      </motion.div>
    </section>
  );
};

export default HomeSection;
