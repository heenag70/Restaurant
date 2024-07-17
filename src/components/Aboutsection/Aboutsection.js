import React, { useState, useEffect } from "react";
import "./aboutsection.css";
import AboutImage1 from "../../assets/images/about.jpg";
import AboutImage2 from "../../assets/images/about-1.jpg.webp";

const Aboutsection = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [menuItems, setMenuItems] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);

  useEffect(() => {
    let interval = null;

    const animateCounts = () => {
      const targetYears = 18;
      const targetMenuItems = 100;
      const targetStaff = 50;
      const targetCustomers = 15000;

      let currentYear = 0;
      let currentMenu = 0;
      let currentStaff = 0;
      let currentCustomers = 0;

      interval = setInterval(() => {
        if (currentYear < targetYears) {
          currentYear++;
          setYearsOfExperience(currentYear);
        }
        if (currentMenu < targetMenuItems) {
          currentMenu++;
          setMenuItems(currentMenu);
        }
        if (currentStaff < targetStaff) {
          currentStaff++;
          setStaffCount(currentStaff);
        }
        if (currentCustomers < targetCustomers) {
          currentCustomers += 100;
          setHappyCustomers(currentCustomers);
        }

        if (
          currentYear === targetYears &&
          currentMenu === targetMenuItems &&
          currentStaff === targetStaff &&
          currentCustomers >= targetCustomers
        ) {
          clearInterval(interval);
        }
      }, 50);
    };

    animateCounts();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <div className="column">
          <img src={AboutImage1} alt="Image 1" className="image" />
        </div>
        <div className="column">
          <img src={AboutImage2} alt="Image 2" className="image img2" />
        </div>
        <div className="column">
          <div className="container-about">
            <h1 className="heading">About</h1>
            <h3 className="heading1">Feliciano Restaurant</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p>
              Mon - Fri <b>8 AM - 11 PM</b>
            </p>
            <span className="bigNumber">+ 1-978-123-4567</span>
          </div>
        </div>
      </div>
      <div className="about-section about-section2">
        <div className="column">
          <span className="bigNumber">{yearsOfExperience}</span>
          <p>{"Years of experience".toUpperCase()}</p>
        </div>
        <div className="column">
          <span className="bigNumber">{menuItems}</span>
          <p>{"Menu's/Dish".toUpperCase()}</p>
        </div>
        <div className="column">
          <span className="bigNumber">{staffCount}</span>
          <p>{"Staff".toUpperCase()}</p>
        </div>
        <div className="column">
          <span className="bigNumber">{happyCustomers}</span>
          <p>{"Happy Customers".toUpperCase()}</p>
        </div>
        <div className="column">
          <p>
            <span style={{ color: "gray" }}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
