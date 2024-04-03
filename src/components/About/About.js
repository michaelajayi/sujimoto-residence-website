"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import AboutBanner from "../../../public/img/banner/about_banner.png";
import blackMarble from "../../../public/img/banner/blackmarble.png";
import leonardo from "../../../public/img/projects/leonardo.svg";
import lucrezia from "../../../public/img/projects/lucrezia.svg";
import queenAmina from "../../../public/img/projects/queen_amina.svg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.easeInOut",
      },
    });

    gsap.fromTo(
      ".lead__img",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        opacity: 1,
        xPercent: 0,
        ease: "power2.in",
        duration: 1,
        scrollTrigger: {
          trigger: ".lead__img",
          // markers: true,
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      ".about__texts__container",
      {
        opacity: 0,
        xPercent: 100,
      },
      {
        opacity: 1,
        xPercent: 0,
        ease: "power2.in",
        duration: 1,
        scrollTrigger: {
          trigger: ".about__texts__container",
          // markers: true,
          start: "top bottom",
        },
      },
      "-=1"
    );

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

  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;

    gsap.fromTo(
      ".project__image",
      {
        opacity: 0,
        y: el.offsetWidth,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.in",
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".project__image",
          // markers: true,
          start: "top bottom",
        },
      }
    );
  });

  const projects = [
    {
      title: "Queen Amina By Sujimoto",
      img: queenAmina,
      link: null,
    },
    {
      title: "Leonardo By Sujimoto",
      img: leonardo,
      link: "https://leonardobysujimoto.com/",
    },
    {
      title: "Lucrezia By Sujimoto",
      img: lucrezia,
      link: "https://lucreziabysujimoto.com/",
    },
  ];

  return (
    <div className='w-full h-auto py-20 relative flex items-start justify-center'>
      <Image
        src={blackMarble}
        alt='about bg'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='absolute top-0 left-0 bg-blend-overlay -z-10'
      />
      <div className='max-w-full md:max-w-[80%] w-full md:w-[80%] flex flex-col space-y-5 md:space-y-10 px-5 md:px-0 py-0 md:py-0'>
        <h1 className='uppercase font-work-sans text-[15px] text-center font-medium tracking-[.8em]'>
          About Sujimoto
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 py-2 md:py-10 justify-center items-center'>
          <div className='flex items-center justify-center'>
            <Image
              src={AboutBanner}
              fluid
              className='transform transition-all duration-200 ease-in-out hover:scale-105 lead__img'
              alt='lead img'
            />
          </div>
          <div className='flex py-8 md:px-0'>
            <div className='flex flex-col space-y-5 w-full md:w-[80%]'>
              <p className='font-work-sans font-light leading-[145.9%] tracking-[.09em] md:text-start'>
                &ldquo;Sujimoto is Nigeria&rsquo;s and Africa&rsquo;s most
                sophisticated real estate brand and the Rolls Royce of luxury
                real estate.&rdquo; We are synonymous with peak luxury and are
                committed to excellence in hospitality and values. Our
                dedication to redefining luxury living is reflected in the
                transformative experiences we create through intricately
                designed architecture and our search for the world&rsquo;s most
                renowned thought leaders in architecture, art, hospitality, and
                innovation.
              </p>
              <p className='font-work-sans text-[15px] leading-[145.9%] tracking-[.09em] md:text-start mt-3 text-[#a7884c] w-full'>
                Ikoyi, Banana Island, Abuja, Cape Town, Johannesburg and Dubai;
                mix-used developments, Commercial as well as Hospitality
                Developments.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-5 md:space-y-10 py-0 md:py-20'>
          <h1 className='uppercase font-work-sans text-[15px] text-center font-medium tracking-[.8em]'>
            Our Projects
          </h1>

          <div className='w-full p-0 m-0 flex justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-between w-full space-y-10 md:space-y-0'>
              {projects.map((project, index) =>
                project.link ? (
                  <a key={index} href={project.link} target='_blank'>
                    <div
                      className='flex flex-col justify-center space-y-3 cursor-pointer'
                      key={project.title}
                    >
                      <Image
                        src={project.img}
                        alt='project image'
                        ref={imgRef}
                        className='project__image'
                      />
                      <p className='uppercase font-work-sans font-medium text-[12px] leading-[15px] tracking-[.3em]'>
                        {project.title}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div
                    className='flex flex-col justify-center space-y-3 cursor-pointer'
                    key={project.title}
                  >
                    <Image
                      src={project.img}
                      alt='project image'
                      ref={imgRef}
                      className='project__image'
                    />
                    <p className='uppercase font-work-sans font-medium text-[12px] leading-[15px] tracking-[.3em]'>
                      {project.title}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
