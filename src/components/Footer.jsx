//import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/Wick000" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/chad-abramson-5050a0316/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/28501277/chad-abramson" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow />
        </a>
      </div>
    </footer>
  );
};

export default Footer;