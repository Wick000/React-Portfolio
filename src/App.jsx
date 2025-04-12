// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume.jsx"
import "./App.css";
import CLOUDS2 from "../node_modules/vanta/src/vanta.clouds2.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const vantaEffect = CLOUDS2({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      texturePath: "./gallery/noise.png"
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return (
  <div className="bg" id="vanta">
    <Router >
      <Navbar />
        <Header />
      <main >     
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>  
  );
}

export default App;
