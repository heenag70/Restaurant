import React, { useState, useEffect, useRef } from "react";
import "./slider.css";
import Img1 from "../../assets/images/bg_1.jpg";
import Img2 from "../../assets/images/bg_2.jpg";
import Img3 from "../../assets/images/bg_3.jpg";
import ImageGrid from "../ImageGrid/ImageGrid";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(autoplay);

  const images = [
    {
      src: Img1,
      alt: "slide 1",
      label: "Delicious Specialties",
    },
    {
      src: Img2,
      alt: "slide 2",
      label: "Delicious Specialties",
    },
    {
      src: Img3,
      alt: "slide 3",
      label: "Delicious Specialties",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    autoplayRef.current = autoplay;
  }, [autoplay]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplayRef.current) {
        handleNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };
return (
  <div
    className="carousel"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div className="carousel-inner">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? "active" : ""}`}
        >
          <img src={image.src} alt={image.alt} />
          <div className="carousel-caption">
            <span>{image.label.toUpperCase()}</span>
          </div>
        </div>
      ))}
    </div>
    <ImageGrid />
    <button className="carousel-control-prev" onClick={handlePrev}>
      &lsaquo;
    </button>
    <button className="carousel-control-next" onClick={handleNext}>
      &rsaquo;
    </button>
  </div>
);

}
export default Carousel;
