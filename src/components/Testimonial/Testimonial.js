import React from "react";
import "./testimonial.css";
import client1Img from "../../assets/images/person_1.jpg";
import client2Img from "../../assets/images/person_2.jpg";
import client3Img from "../../assets/images/person_3.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      image: client1Img,
      text: "Far far away, behind the word mountains,far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "Ian Boner",
      relation: "Customer",
    },
    {
      image: client2Img,

      text: "Far far away, behind the word mountains,far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "Jason MacClean",
      relation: "Customer",
    },
    {
      image: client3Img,
      text: "Far far away, behind the word mountains,far from the countries Vokalia and Consonantia, there live the blind texts.",
      author: "Mark Stevenson",
      relation: "Customer",
    },
  ];

  return (
    <div className="container-testimonial">
      <p className="heading">Testimonials</p>
      <div className="container-testimonials">
        <p className="heading1">Happy Customers</p>

        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <div className="testimonial-content">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.author} />
                </div>
                <div className="testimonial-text">{testimonial.text}</div>
                <div className="testimonial-info">
                  <div className="testimonial-details">
                    <h3 className="testimonial-author">{testimonial.author}</h3>
                    <p className="testimonial-relation">
                      {testimonial.relation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
