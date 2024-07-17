import React from "react";
import "./imagegrid.css";

import imagegrid1 from "../../assets/images/breakfast-1.jpg";
import imagegrid2 from "../../assets/images/breakfast-2.jpg";
import imagegrid3 from "../../assets/images/breakfast-3.jpg";
import imagegrid4 from "../../assets/images/breakfast-4.jpg";

const ImageGrid = () => {
  const images = [
    {
      id: 1,
      src: imagegrid1,
      title: "Grilled Beef with potatoes",
      description: "meat, potatoes, rice, tomatoes",
    },
    {
      id: 2,
      src: imagegrid2,
      title: "Grilled Beef with potatoes",
      description: "meat, potatoes, rice, tomatoes",
    },
    {
      id: 3,
      src: imagegrid3,
      title: "Grilled Beef with potatoes",
      description: "meat, potatoes, rice, tomatoes",
    },
    {
      id: 4,
      src: imagegrid4,
      title: "Grilled Beef with potatoes",
      description: "meat, potatoes, rice, tomatoes",
    },
  ];

  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <div className="image-circle">
            <img src={image.src} alt={image.title} />
          </div>
          <div className="image-details">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
