import React from "react";
import { Container } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Carousel.css";
import CarouselItem from "./CarouselItem";
import carousels from "./carousels";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Keyboard, Pagination } from "swiper";
import Properties from "../Properties/Properties";

// init Swiper:

const Carousel = () => {
  return (
    <Container
      fluid
      className='d-flex align-items-center infiniteLoop justify-content-center py-5'
    >
      <Swiper
        spaceBetween={100}
        slidesPerView='auto'
        centeredSlides={true}
        grabCursor={true}
        speed={5000}
        loop={true}
        keyboard={{ enabled: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade, Keyboard]}
        autoplay={{
          delay: 250,
          disableOnInteraction: false,
        }}
        effect='fade'
        className='carouselSwiper'
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
      >
        {carousels.map((carousel, index) => (
          <SwiperSlide key={index}>
            <CarouselItem carousel={carousel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const SwiperSlideStyle = {
  background: "#fff",
  color: "#000",
  height: "80px",
  display: "grid",
  placeItems: "center",
};

export default Carousel;
