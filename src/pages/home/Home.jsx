import React from 'react'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navigation/Navbar";
import Slider from "../../components/Slider/Slider"; 
import Aboutsection from "../../components/Aboutsection/Aboutsection"; 
import Service from "../../components/Service/Service"; 
import Card from "../../components/Card/Card"; 
import Chef from "../../components/Chef/Chef"; 
import ReservationForm from "../../components/Form/ReservationForm"; 
import Testimonial from "../../components/Testimonial/Testimonial"; 
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <Aboutsection/>
      <Service />
      <Card />
      <Chef />
      <ReservationForm />
       <Testimonial /> 
       <Blog />
       <Footer/>
    </div>
  );
}

export default Home
