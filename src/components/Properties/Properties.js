"use client";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { selectProperty } from "@/features/property/propertySlice";
import { selectLayout } from "@/lib/features/layout/layoutSlice";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import PropertyItem from "./PropertyItem";
import propertyArray from "./property-array";

const Properties = () => {
  const [swiper, setSwiper] = useState(null);
  const [showSwiper, setShowSwiper] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [swiperLoading, setSwiperLoading] = useState(true);

  const { activePropertyBg } = useAppSelector(selectLayout);

  // useEffect(() => {
  //   console.log(activePropertyBg);
  // }, [activePropertyBg]);

  return (
    <>
      <div className='w-screen h-auto relative'>
        {activePropertyBg && (
          <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center bg-black opacity-[.35]'>
            <Image
              src={activePropertyBg}
              alt='bg image'
              priority
              className='w-full h-full object-cover object-center'
            />
          </div>
        )}
        <div className='w-full flex flex-col space-y-10 py-10'>
          <h1 className='font-work-sans uppercase text-[15px] font-medium tracking-[.8em] text-center'>
            Book An Apartment
          </h1>

          <Swiper
            initialSlide={0}
            className='w-full h-auto properties-swiper'
            spaceBetween={25}
            slidesPerView={4}
            loop={true}
            grabCursor={true}
            modules={[Autoplay, Navigation, Pagination, Keyboard]}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            keyboard={{ enabled: true }}
            centeredSlides={true}
            slideToClickedSlide={true}
            onSwiper={(swiper) => {
              setSwiper(swiper);
              setSwiperLoading(false);
              setShowSwiper(true);
            }}
            pagination={{
              clickable: true,
              type: "fraction",
              el: ".properties-swiper-pagination",
            }}
            navigation={{
              nextEl: ".properties-swiper-button-next",
              prevEl: ".properties-swiper-button-prev",
            }}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.activeIndex + 1);
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            {showSwiper &&
              propertyArray.map((property, index) => (
                <SwiperSlide key={index}>
                  <PropertyItem
                    property={property}
                    isActive={currentSlide === index}
                  />
                </SwiperSlide>
              ))}

            <div className='w-full flex justify-center items-center pb-5 pt-10'>
              <div className='grid grid-cols-3 gap-2'>
                <TfiAngleLeft
                  className={`properties-swiper-button-prev cursor-pointer opacity-50 hover:opacity-100 ${
                    showSwiper ? "block" : "hidden"
                  }`}
                  size={25}
                />
                <div
                  className={`properties-swiper-pagination font-work-sans text-16px font-bold tracking-wider ${
                    showSwiper ? "block" : "hidden"
                  }`}
                ></div>
                <TfiAngleRight
                  className={`properties-swiper-button-next cursor-pointer opacity-50 hover:opacity-100 ${
                    showSwiper ? "block" : "hidden"
                  }`}
                  size={25}
                />
              </div>
            </div>
          </Swiper>

          {swiperLoading && (
            <div className='w-full flex justify-center items-center'>
              <p className='font-work-sans text-[18px] font-light text-white'>
                Loading...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Properties;
