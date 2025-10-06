import React from "react";
import { motion } from "framer-motion";

const ComingSoon = ({ title }) => {
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
        paddingTop: "6rem", // ✅ space for the fixed navbar
        margin: 0,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "2.8rem",
          fontWeight: "bold",
          color: "#A259FF",
          textShadow: "0 0 20px #A259FF",
          marginBottom: "1rem",
        }}
      >
        {title} Page
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{
          fontSize: "1.4rem",
          color: "#00FFFF",
          textShadow: "0 0 10px #00FFFF",
        }}
      >
        Coming Soon 🚧
      </motion.p>

      <motion.div
        animate={{ rotate: [0, 10, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          fontSize: "2rem",
          marginTop: "1.5rem",
        }}
      >
        ⏳
      </motion.div>
    </section>
  );
};

export default ComingSoon;
