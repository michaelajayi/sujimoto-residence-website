import CustomModal from "@/components/CustomModal";
import { setActivePropertyBg } from "@/lib/features/layout/layoutSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSwiperSlide } from "swiper/react";
import BookNowModal from "../BookNowModal";
import BookNowModalChild from "../BookNowModalChild";
import PropertyGalleryModal from "../PropertyGalleryModal";

const PropertyItem = ({ property, isActive }) => {
  const [showModal, setShowModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const dispatch = useAppDispatch();

  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    if (swiperSlide.isActive) {
      dispatch(setActivePropertyBg(property.img));
    }
  }, [dispatch, isActive, property.img, swiperSlide.isActive]);

  return (
    <div
      className={`flex flex-col space-y-2 items-center justify-center ${
        swiperSlide.isActive ? "bg-white" : "bg-transparent h-[550px]"
      } py-10 border border-white w-auto`}
    >
      <div className={`flex flex-col space-y-2 justify-center items-center`}>
        <p
          className={`font-work-sans ${
            swiperSlide.isActive ? "text-[#212529]" : "text-white"
          } text-[14px] font-bold tracking-[3.64px] uppercase`}
        >
          {property && property.title}
        </p>
        <p
          className={`font-works-sans text-[12px] text-[#030202] tracking-[3.12px] ${
            swiperSlide.isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          - {property.subTitle} -
        </p>
      </div>
      <div
        className={`w-full h-[280px] relative flex justify-center items-center overflow-x-hidden overflow-y-hidden ${
          swiperSlide.isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={property.img}
          alt={property.title}
          priority
          className='w-full h-full transform hover:scale-[1.2] duration-1000 transition-transform ease-in-out absolute top-0 left-0 object-center object-cover'
        />
      </div>
      <p
        className={`font-work-sans text-[12px] text-[#030202] uppercase tracking-[3.12px] ${
          swiperSlide.isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        Price: <span className='font-bold'>{property.minPrice}</span> -{" "}
        <span className='font-bold'>{property.maxPrice}</span>
      </p>
      <div
        className={`flex flex-col space-y-1 justify-self-start self-start px-3 ${
          swiperSlide.isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        {property.amenities.map((amenity, index) => (
          <div className='flex space-x-2' key={index}>
            {amenity.icon}
            <p
              className={`font-eb-garamond text-[#100707] text-[16px] ${
                index === 0 ? "font-bold" : "font-normal"
              }`}
            >
              {amenity.title}
            </p>
          </div>
        ))}
      </div>
      <div
        className={`flex space-x-5 justify-center items-center py-3 ${
          swiperSlide.isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <p
          className='font-works-sans text-[10px] font-medium tracking-[2.61px] text-white bg-black uppercase px-10 py-3 border border-black cursor-pointer'
          onClick={() => setShowBookingModal(true)}
        >
          Book Now
        </p>
        <p
          className='font-works-sans text-[10px] font-medium tracking-[2.61px] text-black bg-transparent uppercase px-10 py-3 border border-black cursor-pointer'
          onClick={() => setShowModal(true)}
        >
          View
        </p>
      </div>

      <CustomModal open={showModal} closeModal={() => setShowModal(false)}>
        <PropertyGalleryModal property={property} />
      </CustomModal>

      <BookNowModal
        open={showBookingModal}
        closeModal={() => setShowBookingModal(false)}
      >
        <BookNowModalChild property={property} />
      </BookNowModal>
    </div>
  );
};

export default PropertyItem;
