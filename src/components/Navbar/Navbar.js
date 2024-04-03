"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link as ReactScrollLink } from "react-scroll";
import logo from "../../../public/logo.svg";
import { getPropertiesAsync } from "../../features/property/propertySlice";
import "./Navbar.css";

const Navbar = () => {
  const logoRef = useRef();
  const scheduleRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropertiesAsync());
  }, [dispatch]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "back.config(2)",
      },
    });

    tl.fromTo(
      logoRef.current,
      {
        xPercent: -100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className='w-full h-full absolute top-0 left-0'>
      <div className='flex justify-between items-center px-5 md:px-20 py-5 '>
        <Link href='/' className='cursor-pointer'>
          <Image
            src={logo}
            ref={logoRef}
            className='w-[75%] md:w-full'
            alt='logo'
          />
        </Link>
        <ReactScrollLink
          to='contactForm'
          smooth={true}
          duration={500}
          className='bg-[#d5897b] hover:bg-[#c2786f] px-5 md:px-10 py-5 md:py-5 tracking-[1.95px] text-white font-work-sans text-[10px] md:text-[13px] uppercase font-light cursor-pointer transform transition-all duration-200 animate-pulse'
        >
          Schedule Inspection
        </ReactScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
