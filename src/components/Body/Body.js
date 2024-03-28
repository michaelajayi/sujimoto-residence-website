import React from "react";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonial";
import Booking from "../Booking/Booking";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Lifestyle from '../Lifestyle/Lifestyle';

const Body = () => {
  return (
    <>
      <Hero />
      <Booking />
      <Testimonials />
      <About />
      {/* <Lifestyle /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Body;
