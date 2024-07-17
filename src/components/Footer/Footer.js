import React from "react";
import "./footer.css";
import instaImage1 from "../../assets/images/insta-1.jpg";
import instaImage2 from "../../assets/images/insta-2.jpg";
import instaImage3 from "../../assets/images/insta-3.jpg";
import instaImage4 from "../../assets/images/insta-4.jpg";
import instaImage5 from "../../assets/images/insta-5.jpg";
import instaImage6 from "../../assets/images/insta-6.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Feliciano</h3>
        <ul>
          <li>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Open Hours</h3>
        <ul>
          <li> Monday 9:00 - 24:00 </li>
          <li> Tuesday 9:00 - 24:00 </li>
          <li> Wednesday 9:00 - 24:00 </li>
          <li> Thursday 9:00 - 2:00 </li>
          <li> Friday 9:00 - 2:00 </li>
          <li> Saturday 9:00 - 2:00 </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Instagram</h3>
        <ul className="instagram-images">
          <li>
            <img src={instaImage1} alt="" className="insta-image" />
          </li>
          <li>
            <img src={instaImage2} alt="" className="insta-image" />
          </li>
          <li>
            <img src={instaImage3} alt="" className="insta-image" />
          </li>
        </ul>
        <ul className="instagram-images">
          <li>
            <img src={instaImage4} alt="" className="insta-image" />
          </li>
          <li>
            <img src={instaImage5} alt="" className="insta-image" />
          </li>
          <li>
            <img src={instaImage6} alt="" className="insta-image" />
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>News Letter</h3>
        <ul>
          <li>
            Far far away, behind the word mountains, far from the countries
          </li>
          <li>
            <input type="email" placeholder="Enter email address" />
          </li>
          <li>
            <button className ="subscribeButton">Subscribe</button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
