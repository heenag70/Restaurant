import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageGrid from "../ImageGrid/ImageGrid"; 
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

import bgImage1 from "../../assets/images/bg_1.jpg";
import bgImage2 from "../../assets/images/bg_2.jpg";
import bgImage3 from "../../assets/images/bg_3.jpg";

const Slide = ({ image, caption }) => {
  const upperCaseCaption = caption.toUpperCase();

  return (
    <div className="slide">
      <img src={image} alt={caption} />
      <div className="caption">{upperCaseCaption}</div>
    </div>
  );
};

const SliderComponent = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const slides = [
    {
      image: bgImage1,
      caption: " Best Restaurant",
    },
    {
      image: bgImage2,
      caption: "Nutritious and Tasty",
    },
    {
      image: bgImage3,
      caption: "Delicious Speciality",
    },
  ];

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="slider-wrapper">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <Slide key={index} image={slide.image} caption={slide.caption} />
        ))}
      </Slider>
      <div className = "">
        <ImageGrid/>
      </div>
      <div className="prev" onClick={goToPrevious}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="next" onClick={goToNext}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};

export default SliderComponent;
