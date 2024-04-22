"use client";
import Hero from "@/components/Hero/Hero";
import { selectLayout } from "@/lib/features/layout/layoutSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import "./Header.css";

import awardImg from "../../../public/img/african-award.png";

const Header = () => {
  const { activeHeaderMenu } = useAppSelector(selectLayout);

  return (
    <div
      className="min-h-screen min-w-screen h-screen w-screen relative z-20"
      style={{ width: "100vw", height: "100vh", position: "relative" }}
    >
      <div className="w-full h-full flex justify-center items-center relative">
        {activeHeaderMenu &&
        activeHeaderMenu.src.data !== null &&
        activeHeaderMenu.src.type === "vid" ? (
          <video
            src={activeHeaderMenu.src.data}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
        ) : (
          <Image
            src={
              activeHeaderMenu.src.data !== null && activeHeaderMenu.src.data
            }
            width={1920}
              height={1080}
            className="h-full w-full absolute top-0 left-0 object-cover object-top"
            alt="bg banner"
          />
        )}

        {/* overlays */}
        <div className="bg-banner-left-overlay absolute top-0 left-0 h-full w-full"></div>
        <div className="bg-banner-bottom-overlay absolute bottom-0 left-0 h-full w-full"></div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 flex items-center px-5 md:px-20">
        <Hero />
      </div>
      <div className="w-full h-full justify-end items-center absolute right-0 top-0 pr-20 hidden md:flex z-10 pointer-events-none">
        <Image src={awardImg} alt="award image" priority width={80} />
      </div>
    </div>
  );
};

export default Header;
