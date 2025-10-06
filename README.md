# 📘 Nelly Mururi Portfolio

A Friendly Guide to My Personal React.js Portfolio Project

---

## 1. Title & Objective

**Title:** Getting Started with React.js — Building a Simple Personal Portfolio

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
- **Browser:** Chrome/Brave (for testing)
- **Github account**

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

**Prerequisites**

**✅ 1. Node.js (LTS version)**
Node lets you run JavaScript outside the browser and includes npm (Node Package Manager), which we'll use to install React and its libraries.

To check if you already have it:

 ```sh
node -v
npm -v
```

If you get version numbers (e.g., v18.x or v20.x), you're good.
If you get "command not found", download Node.js (LTS) here 👉 [https://nodejs.org](https://nodejs.org)

During installation, leave the defaults checked.

**✅ 2. Git**

Helps manage versions of your project and later deploy to GitHub.
Check if it's installed:

 ```sh
git --version
```
If not, install it from 👉 [https://git-scm.com/downloads](https://git-scm.com/downloads)

**✅ 3. VS Code (recommended IDE)**
If you do not have it already, you can install from 👉 [https://code.visualstudio.com](https://code.visualstudio.com)

Once installed, add these helpful extensions:

- Prettier – Code formatter

- ES7+ React/Redux/React-Native snippets

- Auto Import

- Simple React Snippets


  **🚀 Setup Instructions**

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
npm run dev
```

**Step 4: View the portfolio**

Open [http://localhost:5174/](http://localhost:5174/) in your browser.


## 5. Minimal Working Example

**Example: HomeSection Component**

```sh

import React from "react";
import Typed from "react-typed";

const HomeSection = () => {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0A0F1C 60%, #1A1F3C)",
        color: "#E0E0E0",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#A259FF",
          textShadow: "0 0 15px #A259FF",
        }}
      >
        Hi, I'm Nelly Mururi
      </h1>

      <h2
        style={{
          fontSize: "1.5rem",
          color: "#00FFFF",
          textShadow: "0 0 10px #00FFFF",
        }}
      >
        <Typed
          strings={[
            "Web Developer",
            "Mobile Developer",
            "Data Analyst",
            "UI/UX Designer",
            "Machine Learning Specialist",
            "Entrepreneur",
          ]}
          typeSpeed={80}
          backSpeed={40}
          loop
        />
      </h2>
    </section>
  );
};

export default HomeSection;
```
**Example: App.jsx file**

```sh
import React from "react";
import HomeSection from "./HomeSection";

function App() {
  return (
    <>
      <HomeSection />
    </>
  );
}

export default App;
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
│   ├── components/        # Reusable components (HomeSection, ProjectCard, Navbar)
│   ├── pages/             # Page-level components (Home, Projects, Contact)
│   ├── App.jsx            # Main React App
│   ├── App.css
│   ├── main.jsx
│   └── index.css          
├── package.json
├── vite.config.js
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
