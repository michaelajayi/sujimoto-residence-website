import React from "react";
import { Container, Image } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./GalleryCarousel.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Pagination } from "swiper";

const GalleryCarousel = ({ gallery }) => {
  return (
    <Container
      fluid
      className='d-flex align-items-center infiniteLoop justify-content-center py-5'
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={{ Autoplay, Pagination, EffectFade }}
        effect='fade'
        className='mySwiper'
      >
        {gallery.map((c, index) => (
          <SwiperSlide key={index}>
            <Image
              src={c.url}
              fluid
              className='gallery__image'
              alt='gallery image'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default GalleryCarousel;
