import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActive = (link) => {
    setActiveLink(link);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? "fixed" : ""}`}>
      <div className="navbar__left">
        <p className="navbar__brand">
          <strong>Feliciano</strong>
        </p>
      </div>
      <div className="navbar__right">
        <div
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
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
          <li className="Button bookTable">
            <a href="#">Book a table</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
