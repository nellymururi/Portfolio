import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem 3rem 1rem 0rem", 
        paddingLeft: "0rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(10, 15, 28, 0.8)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        backdropFilter: "blur(10px)",
      }}
    >
      <h2
        style={{
          color: "#A259FF",
          textShadow: "0 0 10px #A259FF",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        NWM
      </h2>

      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "#E0E0E0",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1rem",
  textShadow: "0 0 10px #00FFFF",
  transition: "color 0.3s",
};

export default Navbar;
