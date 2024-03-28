"use client";
import testimonials from "./testimonials";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  return (
    <div className="w-screen h-auto flex-col items-center md:py-10 top-0 left-0 space-y-10">
      <h1 className="font-work-sans uppercase text-[15px] font-medium tracking-[.8em] text-center">
        Reviews
      </h1>
      <div className="flex items-center justify-center">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
          effect="fade"
          className="testimonial-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
            },
            1440: {
              slidesPerView: 1,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialItem testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
