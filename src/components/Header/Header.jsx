import React from "react";
import "./header.css"; // Import your CSS file for styling if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header__contact">
        <div className="header__contact-info">
          <p>
            <FontAwesomeIcon icon={faPhone} /> +1235 2355 98
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> youremail@email.com
          </p>
          <p>Open hours: Monday - Sunday 8:00AM - 9:00PM</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
