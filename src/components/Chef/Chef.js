import React from "react";
import "./chef.css";
import chefImage from "../../assets/images/chef-1.jpg";
import chefImage1 from "../../assets/images/chef-2.jpg";
import chefImage2 from "../../assets/images/chef-3.jpg";
import chefImage3 from "../../assets/images/chef-4.jpg";


const Chef = () => {
  return (
    <div className="chef-cards-contain">
      <p className="heading"> chef</p>
      <div className="container-service">
        <p className="heading1">Our Master Chef</p>
        <div className="chef-cards-container">
          <div className="chef-card">
            <img src={chefImage} alt="" className="chef-image" />
            <div className="chef-info">
              <h5>John Smooth</h5>
              <p>Restaurant Owner</p>
            </div>
          </div>
          <div className="chef-card">
            <img src={chefImage1} alt="" className="chef-image" />
            <div className="chef-info">
              <h5>Rebeca Welson</h5>
              <p>Head Chef</p>
            </div>
          </div>
          <div className="chef-card">
            <img src={chefImage2} alt="" className="chef-image" />
            <div className="chef-info">
              <h5>Kharl Branyt</h5>
              <p>Chef</p>
            </div>
          </div>
          <div className="chef-card">
            <img src={chefImage3} alt="" className="chef-image" />
            <div className="chef-info">
              <h5>Luke simon</h5>
              <p>Chef</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
