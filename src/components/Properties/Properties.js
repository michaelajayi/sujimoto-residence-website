import React from "react";
import { Container } from "react-bootstrap";
import { Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "../Carousel/CarouselItem";
import "./Properties.css";
import carousels from "../Carousel/carousels";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Properties = () => {
  return (
    <>
      <Container fluid className='px-0'>
        <div className='property__wrapper__inner'>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            centeredSlides={true}
            slideToClickedSlide={true}
            grabCursor={true}
            keyboard={{ enabled: true }}
            loop={true}
            pagination={{
              // type: "fraction",
              clickable: true,
            }}
            modules={[Navigation, Keyboard]}
            effect='fade'
            className='mySwiper'
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            {carousels.map((carousel) => (
              <SwiperSlide key={carousel.title}>
                {/* <PropertyItem key={carousel.title} /> */}
                <CarouselItem carousel={carousel} key={carousel.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default Properties;
