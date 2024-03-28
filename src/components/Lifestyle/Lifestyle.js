import React, { useId } from "react";
import { Container } from "react-bootstrap";
import { Autoplay, EffectFade, Keyboard, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LifestyleItem from "./LifestyleItem";

import bg02 from "../../assets/img/banner/01.jpg";
import bg03 from "../../assets/img/banner/02.jpg";
import bg01 from "../../assets/img/lifestyle-banners/01.svg";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Lifestyle = () => {
  const id = useId();

  const lifestyleItems = [
    {
      title: "It Matters Where You Stay",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in.",
      bg: bg01,
    },
    {
      title: "Something Else Something Else",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, libero.",
      bg: bg02,
    },
    {
      title: "Hello World Lorem Ipsum",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, aperiam?",
      bg: bg03,
    },
  ];

  return (
    <Container fluid className='px-0'>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        effect={"fade"}
        loop={true}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Keyboard, EffectFade]}
        className='mySwiper'
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            // spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
          },
          1440: {
            slidesPerView: 1,
          },
        }}
      >
        {lifestyleItems.map((item) => (
          <SwiperSlide key={id}>
            <LifestyleItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Lifestyle;
