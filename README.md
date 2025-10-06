# 📘 Nelly Mururi Portfolio

A Friendly Guide to My Personal React.js Portfolio Project

---

## 1. Title & Objective

**Title:** Nelly Mururi – React.js Portfolio  

**Objective:**  
This project showcases my skills, projects, and experience as a frontend developer and AI enthusiast. The portfolio is designed to:  

- Demonstrate modern React.js development skills  
- Feature responsive design for desktop and mobile devices  
- Highlight my projects, skills, and achievements dynamically  
- Include smooth animations and interactive elements for a professional feel  
- Serve as a foundation for continuous improvements, such as adding backend integration, forms, or AI-powered features  

---

## 2. Quick Summary of the Technology

**What is it?**  
A single-page web application built with React.js. It uses modern frontend techniques including:  

- React components for modular UI  
- React Router for smooth navigation  
- Framer Motion for animations and transitions  
- React Typed for animated text  

**Where is it used?**  

- Personal branding and portfolio showcase  
- Resume and professional profile online  
- Freelance project demos or client presentations  

**Key Features:**  

- Hero section with animated introduction  
- Projects showcase with interactive cards  
- Skills section highlighting key expertise  
- Responsive design for desktop, tablet, and mobile  
- Contact section with links to email and social profiles  

---

## 3. System Requirements

- **Operating System:** Windows, macOS, or Linux  
- **Editor:** VS Code recommended  
- **Node.js:** 18+  
- **npm:** 9+ (or yarn 3+)  
- **React.js:** 18+  

**Key Dependencies (package.json):**  
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0",
    "framer-motion": "^10.12.16",
    "react-typed": "^2.0.0"
  }
}


4. Installation & Setup Instructions
Step 1: Clone the repository

bash
git clone <your-repo-url>
cd react-portfolio
Step 2: Install dependencies

bash
npm install
Step 3: Run the development server

bash
npm start
Step 4: View the portfolio
Open http://localhost:3000 in your browser.

Step 5: Build for production

bash
npm run build
The production-ready files will be generated in the build/ folder, ready to deploy.

5. Minimal Working Example
Example: Hero Section Component

jsx
import React from "react";
import { motion } from "framer-motion";
import ReactTyped from "react-typed";

const Hero = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="hero-container"
  >
    <h1>Hi, I'm Nelly</h1>
    <ReactTyped
      strings={["Frontend Developer", "React.js Enthusiast", "AI Explorer"]}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  </motion.div>
);

export default Hero;
Expected Result:

Smooth fade-in animation for the hero section

Animated typing effect cycling through skills

6. Project Structure
text
react-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/            # Images, icons, and media
│   ├── components/        # Reusable components (Hero, ProjectCard, Navbar)
│   ├── pages/             # Page-level components (Home, Projects, Contact)
│   ├── App.js             # Main React App
│   ├── index.js           # Entry point
│   └── styles/            # CSS or SCSS files
├── package.json
├── package-lock.json
└── README.md
7. Common Issues & Fixes
Issue 1: npm start fails
Cause: Node.js or npm version incompatible
Fix: Ensure Node.js 18+ and npm 9+ are installed. Check versions:

bash
node -v
npm -v
Issue 2: CSS or assets not loading
Cause: Wrong import path or missing files
Fix: Confirm all files exist in src/assets/ and that import paths match exactly.

Issue 3: Animations not working
Cause: Framer Motion not installed or used incorrectly
Fix:

bash
npm install framer-motion
Ensure that motion.div or other motion elements are used correctly in your components.

Issue 4: React Typed text not animating
Cause: React Typed not imported or configured correctly
Fix:

bash
npm install react-typed
Ensure proper usage in the component as shown in the Minimal Working Example.

8. References
React.js Official Documentation

Framer Motion Docs

React Typed Docs

MDN Web Docs – JavaScript & CSS guides
