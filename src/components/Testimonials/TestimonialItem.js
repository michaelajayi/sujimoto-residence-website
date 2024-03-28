import Image from "next/image";
import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import fiveStar from "../../../public/img/testimonials/stars.svg";

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className="flex flex-col justify-between space-y-5 font-work-sans w-full md:w-[40%] mx-auto py-5 px-5 md:px-0">
      <ImQuotesLeft color="#444" size={35} style={{ margin: "auto" }} />
      <h4 className="font-eb-garamond italic text-center text-[24px]">
        {testimonial.text}
      </h4>
      <ImQuotesRight color="#444" size={35} style={{ margin: "auto" }} />
      <p className="font-medium text-[15px] text-center mt-0 leading-[15px] text-white">
        {testimonial && testimonial.name}
        <span>
          {" "}
          <p className="font-medium text-[10px] text-center mt-3 leading-[15px] text-white uppercase">
            {testimonial && testimonial.occupation}
          </p>
        </span>
      </p>

      <Image src={fiveStar} alt="stars" className="max-w-[100px] mx-auto" />
    </div>
  );
};

export default TestimonialItem;
