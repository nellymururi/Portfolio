import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

// Emojis for text
const skillIcons = {
  "Web Developer": "💻",
  "Mobile Developer": "📱",
  "Data Analyst": "📊",
  "UI/UX Designer": "🎨",
  "Machine Learning Specialist": "🤖",
  "Entrepreneur": "🚀",
};

// Larger illustration-style emojis for visuals
const skillImages = {
  "Web Developer": "🖥️",
  "Mobile Developer": "📲",
  "Data Analyst": "📊",
  "UI/UX Designer": "🎨",
  "Machine Learning Specialist": "🤖",
  "Entrepreneur": "💼",
};

const HomeSection = () => {
  const [currentSkill, setCurrentSkill] = React.useState("Web Developer");

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0A0F1C 60%, #1A1F3C)",
        color: "#E0E0E0",
        textAlign: "center",
        padding: "7rem 2rem 4rem", 
        boxSizing: "border-box",
        scrollMarginTop: "80px",
      }}
    >
      {/* Greeting */}
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
        Hi, I'm Nelly Mururi{" "}
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
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <ReactTyped
          strings={Object.keys(skillIcons)}
          typeSpeed={80}
          backSpeed={40}
          loop
          preStringTyped={(arrayPos) => {
            setCurrentSkill(Object.keys(skillIcons)[arrayPos]);
          }}
        />
        
      </motion.h2>

      {/* Large Icon/Image Below Text */}
      <motion.div
        key={currentSkill + "-img"}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "5rem",
          marginTop: "1.5rem",
          filter: "drop-shadow(0 0 15px #00FFFF)",
        }}
      >
        {skillImages[currentSkill]}
      </motion.div>
    </section>
  );
};

export default HomeSection;
