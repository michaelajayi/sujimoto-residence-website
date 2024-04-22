"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PropertyGalleryModalProps } from "@/global/types";
import Image from "next/image";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const PropertyGalleryModal: React.FC<PropertyGalleryModalProps> = ({
  property,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showSwiper, setShowSwiper] = useState(false);
  const [swiperLoading, setSwiperLoading] = useState(true);

  return (
    <div className='w-full flex flex-col space-y-5'>
      <div className='flex flex-col space-y-5'>
        <h1 className='text-2xl font-work-sans text-[#070808]'>
          <span className='text-[20px] font-bold'>{property.title}</span> -{" "}
          <span className='text-[18px]'>{property.subTitle}</span>
        </h1>
        <hr />
        <p className='font-eb-garamond font-light text-[#100707] text-center text-[18px] w-full md:w-[75%] self-center'>
          {property.description}
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          centeredSlides={true}
          grabCursor={true}
          className='w-full h-auto property-item-swiper'
          loop={true}
          pagination={{
            clickable: true,
            type: "fraction",
            el: ".property-item-swiper-pagination",
          }}
          navigation={{
            nextEl: ".property-item-swiper-button-next",
            prevEl: ".property-item-swiper-button-prev",
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex + 1);
            console.log("Current Slide: ", swiper.activeIndex);
          }}
          onSwiper={(swiper) => {
            setSwiperLoading(false);
          }}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          keyboard={{ enabled: true }}
          modules={[Keyboard, Pagination, Navigation, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1440: {
              slidesPerView: 2.5,
              spaceBetween: 5,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
        >
          {property.gallery.map((image, index) => (
            <>
              <SwiperSlide key={index}>
                <div className='relative w-[360px] h-[300px] flex justify-center items-center overflow-hidden rounded-0'>
                  <Image
                    src={image.img}
                    className='absolute top-0 left-0 h-full w-full object-cover object-center transform hover:scale-[1.2] duration-1000 transition-transform ease-in-out'
                    alt='gallery image'
                  />
                </div>
              </SwiperSlide>
            </>
          ))}

          <div className='w-full flex justify-center items-center pb-5 pt-10'>
            <div className='grid grid-cols-3 gap-2 text-black'>
              <TfiAngleLeft
                className={`property-item-swiper-button-prev cursor-pointer opacity-50 hover:opacity-100`}
                size={25}
                color='#000'
              />
              <div
                className={`property-item-swiper-pagination font-work-sans text-16px font-bold tracking-wider text-black`}
              ></div>
              <TfiAngleRight
                className={`property-item-swiper-button-next cursor-pointer opacity-50 hover:opacity-100`}
                size={25}
                color='#000'
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PropertyGalleryModal;
