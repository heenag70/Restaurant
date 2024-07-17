import React from "react";
import "./card.css";
import cardImage from "../../assets/images/breakfast-1.jpg";
import cardImage1 from "../../assets/images/breakfast-2.jpg";
import cardImage2 from "../../assets/images/breakfast-3.jpg";
import cardImage3 from "../../assets/images/breakfast-4.jpg";
import cardImage4 from "../../assets/images/breakfast-5.jpg";
import cardImage5 from "../../assets/images/breakfast-6.jpg";

const Card = ({ title, content }) => {
  return (
    <div className="card-container">
      <p className="heading"> Specialities</p>
      <div className="container-menucard">
        <p className="heading1">Our Menu</p>

        <div className="container-card">
          <div className="card">
            <img src={cardImage} alt=" 1" />
          </div>
          <div className="card">
            <h6 style={{ textAlign: "left", padding: "0" }}>
              Grilled Beef <br />
              with potatoes
            </h6>
            <p style={{ fontSize: "12px", textAlign: "left" }}>
              Meat, potatoes,
              <br />
              Rice, Tomatoes
            </p>
            <button>Order</button>
            <p>{content}</p>
          </div>
          <div className="card">
            <img src={cardImage1} alt="2" />
          </div>
          <div className="card">
            <h6 style={{ textAlign: "left", padding: "0" }}>
              Grilled Beef <br />
              with potatoes
            </h6>
            <p style={{ fontSize: "12px", textAlign: "left" }}>
              Meat, potatoes,
              <br />
              Rice, Tomatoes
            </p>
            <button>Order</button>
            <p>{content}</p>
          </div>
        </div>

        <div className="container-card">
          <div className="card">
            <h6 style={{ textAlign: "left", padding: "0" }}>
              Grilled Beef <br />
              with potatoes
            </h6>
            <p style={{ fontSize: "12px", textAlign: "left" }}>
              Meat, potatoes,
              <br />
              Rice, Tomatoes
            </p>
            <button>Order</button>
            <p>{content}</p>
          </div>
          <div className="card">
            <img src={cardImage2} alt="3" />
          </div>
          <div className="card">
            <h6 style={{ textAlign: "left", padding: "0" }}>
              Grilled Beef <br />
              with potatoes
            </h6>
            <p style={{ fontSize: "12px", textAlign: "left" }}>
              Meat, potatoes,
              <br />
              Rice, Tomatoes
            </p>
            <button>Order</button>
            <p>{content}</p>
          </div>
          <div className="card">
            <img src={cardImage3} alt="4" />
          </div>
        </div>

        <div className="container-card">
          <div className="card">
            <img src={cardImage4} alt="5" />
          </div>
          <div className="card">
            <h6 style={{ textAlign: "left", padding: "0" }}>
              Grilled Beef <br />
              with potatoes
            </h6>
            <p style={{ fontSize: "12px", textAlign: "left" }}>
              Meat, potatoes,
              <br />
              Rice, Tomatoes
            </p>
            <button>Order</button>
            <p>{content}</p>
          </div>
          <div className="card">
            <img src={cardImage5} alt="6" />
          </div>
          <div className="card">
            <h6 style={{ textAlign: "left", padding: "0" }}>
              Grilled Beef <br />
              with potatoes
            </h6>
            <p style={{ fontSize: "12px", textAlign: "left" }}>
              Meat, potatoes,
              <br />
              Rice, Tomatoes
            </p>
            <button>Order</button>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
