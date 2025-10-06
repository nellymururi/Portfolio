# 📘 Nelly Mururi Portfolio

A Friendly Guide to My Personal React.js Portfolio Project

---

## 1. Title & Objective

**Title:** Nelly Mururi Portfolio – React.js   

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

**Key Dependencies:** 

(package.json): 

  ```sh
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0",
    "framer-motion": "^10.12.16",
    "react-typed": "^2.0.0"
  }
}
```


## 4. Installation & Setup Instructions

**Step 1: Clone the repository**

  ```sh
git clone <your-repo-url>
cd react-portfolio
```

**Step 2: Install dependencies**

```sh
npm install
```

**Step 3: Run the development server**

```sh
npm start
```

**Step 4: View the portfolio**

Open [http://localhost:5174/](http://localhost:5174/) in your browser.

**Step 5: Build for production**

```sh
npm run build
```
The production-ready files will be generated in the build/ folder, ready to deploy.

## 5. Minimal Working Example
**Example: Hero Section Component**

```sh

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

```

**Expected Result:**

- Smooth fade-in animation for the hero section

- Animated typing effect cycling through skills

## 6. Project 

```sh

react-portfolio/
├── public/
│   ├── vite.svg
├── src/
│   ├── assets/            # Images, icons, and media eg react.svg
│   ├── components/        # Reusable components (Hero, ProjectCard, Navbar)
│   ├── pages/             # Page-level components (Home, Projects, Contact)
│   ├── App.jsx            # Main React App
│   ├── App.css
│   ├── main.jsx
│   └── index.css          # Entry point
├── package.json
├── package-lock.json
└── README.md
```

## 7. Common Issues & Fixes
**Issue 1: npm start fails**
**Cause**: Node.js or npm version incompatible
**Fix**: Ensure Node.js 18+ and npm 9+ are installed. Check versions:

```sh
node -v
npm -v
```


**Issue 2: CSS or assets not loading**
Cause: Wrong import path or missing files
Fix: Confirm all files exist in src/assets/ and that import paths match exactly.

**Issue 3: Animations not working**
Cause: Framer Motion not installed or used incorrectly
Fix:

```sh
npm install framer-motion
```
Ensure that motion.div or other motion elements are used correctly in your components.

**Issue 4: React Typed text not animating**
Cause: React Typed not imported or configured correctly
Fix:

```sh
npm install react-typed
```
Ensure proper usage in the component as shown in the Minimal Working Example.

## 8. References

[React.js Official Documentation](https://reactjs.org/docs)

[Framer Motion Docs](https://www.framer.com/motion)

[React Typed Docs](https://github.com/ssbeefeater/react-typed)

[MDN Web Docs – JavaScript & CSS guides](https://developer.mozilla.org/)
