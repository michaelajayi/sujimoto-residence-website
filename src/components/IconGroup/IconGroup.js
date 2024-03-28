import {
  selectLayout,
  setActiveHeaderMenu,
} from "@/lib/features/layout/layoutSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import gsap from "gsap";
import { debounce } from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./IconGroup.css";
import { iconGroupMenus } from "./IconMenu";

const IconGroup = () => {
  const dispatch = useAppDispatch();

  const { activeIconGroup } = useAppSelector(selectLayout);

  const [hoveredIndex, setHoveredIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "back.config(2)",
      },
    });

    tl.fromTo(
      ".animate__me",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
      },
      "+=.75"
    );
  }, []);
  return (
    <div className="absolute bottom-0 left-0 w-full h-auto border border-[#d5897b] border-t-1 border-r-0 border-l-0 border-b-0">
      <div className="relative hidden md:flex">
        <div className="w-full h-full grid grid-cols-3 md:grid-cols-6 relative">
          {iconGroupMenus.map((iconGroupMenu, index) => (
            <div
              className="animate__me flex flex-col items-center justify-center gap-4 group cursor-pointer h-full py-[3.5rem]"
              key={index}
              onMouseEnter={debounce(() => {
                setHoveredIndex(index);
                dispatch(setActiveHeaderMenu(iconGroupMenu));
              }, 200)}
              onMouseLeave={debounce(() => setHoveredIndex(0), 200)}
            >
              <Image src={iconGroupMenu.icon} alt="icon" />
              <p className="w-50 text-uppercase icon__text group-hover:font-bold uppercase w-[38%]">
                {iconGroupMenu.title}
              </p>
            </div>
          ))}
        </div>
        <div
          className="absolute top-0 h-2 bg-white transform -translate-y-full transition-all duration-200"
          style={{
            left: `${(hoveredIndex / iconGroupMenus.length) * 100}%`,
            width: `${100 / iconGroupMenus.length}%`,
          }}
        />
      </div>
    </div>
  );
};

export default IconGroup;

// .icons__container {
//   border-top: 1px solid #d5897b;
//   /* border-top: 1px solid #fff; */
//   padding-top: 1rem;
//   position: relative;
// }
