import React, { useState } from "react";
import "./Navbar.css"; // Custom styles for the Navbar
import Logo from "../assets/Freezakamax.png";
// import menu icon
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="navbar-image-logo" src={Logo} alt="Logo" />
        <span>Freezk</span>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
