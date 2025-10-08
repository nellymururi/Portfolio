# 📘 Personal Portfolio

A Friendly Guide to My Personal React.js Portfolio Project

<img width="1903" height="783" alt="image" src="https://github.com/user-attachments/assets/4ef2e1c8-f6d2-4833-a558-cf809e07f7bc" />

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

- Home Section with animated introduction  
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

### **Prerequisites**

### **✅  Node.js (LTS version)**

Node lets you run JavaScript outside the browser and includes npm (Node Package Manager), which we'll use to install React and its libraries.

To check if you already have it:

 ```sh
node -v
npm -v
```

If you get version numbers (e.g., v18.x or v20.x), you're good.
If you get "command not found", download Node.js (LTS) here 👉 [https://nodejs.org](https://nodejs.org)

During installation, leave the defaults checked.

### **✅  Git**

Helps manage versions of your project and later deploy to GitHub.
Check if it's installed:

 ```sh
git --version
```
If not, install it from 👉 [https://git-scm.com/downloads](https://git-scm.com/downloads)

### **✅  VS Code (recommended IDE)**

If you do not have it already, you can install from 👉 [https://code.visualstudio.com](https://code.visualstudio.com)

Once installed, add these helpful extensions:

- Prettier – Code formatter

- ES7+ React/Redux/React-Native snippets

- Auto Import

- Simple React Snippets


### **🚀 Setup Instructions**

**Step 1: Clone the repository**

  ```sh
git clone <your-repo-url>
cd nmururi-portfolio
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

- Smooth fade-in animation for the Home section

- Animated typing effect cycling through skills

## 6. Project 

```sh

nmururi-portfolio/
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

## 7. AI Prompt Journal – React.js Portfolio

### Prompt 1: Learning JavaScript, Node.js, and React.js

**Prompt:**  
I want to learn JavaScript, specifically React.js, and create a simple portfolio. Please explain JavaScript as a tech tool, how Node.js and React.js evolved from it, and how they are used. I’m a beginner and would like a clear explanation I can follow along with examples.

**AI Response Summary:**  
The AI clearly explained JavaScript as a versatile and foundational programming language for both front-end and back-end development. It highlighted how Node.js enables JavaScript to run outside the browser, allowing server-side development with npm as a package manager. It further described React.js as a declarative library for building modular and reusable UI components. The explanation was supported by code examples demonstrating how React components, props, and JSX work together in building dynamic interfaces.

**Helpfulness: 9/10**
The response was concise, beginner-friendly, and gave a strong conceptual foundation for understanding the relationship between JavaScript, Node.js, and React.js.

### Prompt 2: Setting Up React.js Portfolio Environment
Give me a step-by-step guide to set up a React.js project environment including IDE, Node.js, npm, and required libraries. Give me a detailed guide of what to install and the steps to take with a detailed explanation of the whole process and possible errors I would get and how to solve them when setting up React.js

**AI Response Summary:**  
The AI provided a detailed, easy-to-follow setup guide. It recommended Vite for project initialization due to its fast development server and modern build system. It walked through installing Node.js,dependencies, verifying npm installation, creating the React app, and running it with npm run dev. The explanation covered folder structure, hot reloading, and even introduced basic App.jsx starter code, helping me quickly visualize the project flow.I also got insights to possible errors I would have gotten when trying to set up and run react and ways to solve them like adding dependencies.

**Helpfulness: 10/10**
This response was crucial in getting my environment running successfully. Every step was clearly explained, and I was able to set up the entire React.js portfolio project from scratch and handled the errors I got based on the insights.

### Prompt 3: Adding Animations and Navbar
I want to add animations: a waving hand emoji after “Hi,” icons for each skill (💻, 📱, etc.), placeholder pages for About, Projects, Contact, and an “NWM” logo in the navbar.KIndly act as tutors and show me how I can implement this step by step as I learn.

**AI Response Summary:**  
The AI guided me in building a responsive and animated React portfolio interface. It showed how to implement a Navbar component with a custom “NWM” logo and smooth navigation using React Router. It introduced Framer Motion for animations, creating fade-in and hover effects, and ReactTyped for a typing animation in the Home section. The animated “Hi 👋” greeting and skill-based emoji transitions made the page feel interactive and modern. Placeholder pages were also created for About, Projects, and Contact, each with “Coming Soon” indicators to structure the future build.

**Helpfulness: 10/10**
The response I got from ai was very helpful, it acted as a tutor giving me code examples I could use with comments explaining the why behind the code implementation. This was very helpful in making my code come to life, I was able to implement animations into my code which was my main goal.

### Prompt 4: Debugging React Portfolio
(Summary of some of the prompts I made when trying to debug)
I am running into issues when developing my React.js portfolio, such as a white screen when running react, a large grey section appearing on my home page section and import errors like:[plugin:vite:import-analysis] Failed to resolve import "./HomeSection" from "src/App.jsx".
Kindly help me debug this error by looking into 1. What caused the error? 2.Why the error is occuring? 3. Which part of the code is causing the error and how I can fix that specific part to make the code run. 4. How I can handle and be ready for such errors in the future.


**AI Response Summary:**  
The AI helped identify that most of these problems were caused by missing or incorrectly referenced files, mismatched component names (e.g., HomeSection.jsx vs. Home.jsx), and improper import paths. It also explained that white or grey screens typically indicate JavaScript errors that stop React from rendering.The AI guided me step by step to:Verify file names and extensions (.jsx vs .js).Correct import paths relative to the src folder.
Restart the Vite dev server after structural changes.Inspect the browser console for specific runtime errors.Ensure proper use of animation libraries like Framer Motion and ReactTyped to prevent rendering lags.

**Helpfulness:**
9.5/10 – The explanations were clear and immediately useful. I learned how to debug effectively by reading and interpreting console errors, fixing path mismatches, and understanding how small mistakes in imports or file structure can break the app’s rendering. This improved my confidence in resolving frontend issues independently.

## 8. Common Issues & Fixes
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

## 9. References

[React.js Official Documentation](https://reactjs.org/docs)

[Framer Motion Docs](https://www.framer.com/motion)

[React Typed Docs](https://github.com/ssbeefeater/react-typed)

[MDN Web Docs – JavaScript & CSS guides](https://developer.mozilla.org/)

## 10. Contributions

To make contributions to the project:
   - Fork the repository.
   - Create a feature branch on your forked repository.
   - Submit a [pull request](https://github.com/nellymururi/Portfolio/pulls).

## 11. Issues
If you have any issues with the project, please feel free to open up an [issue](https://github.com/nellymururi/Portfolio/issues).

## 12. License
This project is licensed under the [MIT License](LICENSE).

