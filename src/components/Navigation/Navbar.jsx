import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <p className="navbar__brand">
          <strong>Feliciano</strong>
        </p>
      </div>
      <div className="navbar__right">
        <ul className="navbar__links">
          <li className={activeLink === "Home" ? "active" : ""}>
            <a href="#" onClick={() => handleSetActive("Home")}>
              Home
            </a>
          </li>
          <li className={activeLink === "About" ? "active" : ""}>
            <a href="#" onClick={() => handleSetActive("About")}>
              About
            </a>
          </li>
          <li className={activeLink === "Menu" ? "active" : ""}>
            <a href="#" onClick={() => handleSetActive("Menu")}>
              Menu
            </a>
          </li>
          <li className={activeLink === "Stories" ? "active" : ""}>
            <a href="#" onClick={() => handleSetActive("Stories")}>
              Stories
            </a>
          </li>
          <li className={activeLink === "Contact" ? "active" : ""}>
            <a href="#" onClick={() => handleSetActive("Contact")}>
              Contact
            </a>
          </li>
          <li className="bookTable">
            <a href="#" >
              Book a table
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
