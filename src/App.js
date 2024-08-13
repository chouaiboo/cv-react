import React, { useState } from "react";
import "./App.css";
import ChouaibAnimation from "./compenent/animation";
import Home from './compenent/containares/home/Home';
import About from "./compenent/containares/Apropos/About";
import Portfolio from "./compenent/containares/Portflio/Portfolio";
import Contact from "./compenent/containares/Contact/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./compenent/navbar/Navbar";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(false);

  const handleAnimationComplete = () => {
    setShowLandingPage(true);
  };

  return (
    <Router>
      <div className="App">
        {!showLandingPage ? (
          <ChouaibAnimation onAnimationComplete={handleAnimationComplete} />
        ) : (
          <>
            <Navbar />
            <main>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="portfolio"><Portfolio /></section>
              <section id="contact"><Contact /></section>
            </main>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;