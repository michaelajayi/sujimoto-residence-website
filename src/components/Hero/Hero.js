import IconGroup from "@/components/IconGroup/IconGroup";
import gsap from "gsap";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.easeInOut",
      },
    });

    tl.fromTo(
      ".hero__texts",
      {
        xPercent: -100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
      },
      "+=1"
    );
  }, []);
  return (
    <div className="h-full w-full flex items-center relative">
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col space-y-3 hero__texts">
          <h1 className="text-[30px] md:text-[50px] leading-[117.49%] tracking-[.05em] uppercase w-full md:w-[30%] font-work-sans font-thin">
            It Matters Where You Stay
          </h1>
          <p className="font-medium text-[10px] leading-[114.49%] tracking-wide md:tracking-[1em] uppercase font-work-sans">
            Short-let with a heart
          </p>
        </div>
        <IconGroup />
      </div>
    </div>
  );
};

export default Hero;
