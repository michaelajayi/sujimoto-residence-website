"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateSchema = Yup.object()
    .shape({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Phone number must be a number")
        .min(11, "Phone number must be 11 digits")
        .max(11, "Phone number must be 11 digits"),
      email: Yup.string().email("Must be a valid email"),
      message: Yup.string().required("Message is required"),
    })
    .test(
      "phoneOrEmail",
      "Either phone or email must be provided",
      function (value: any) {
        return value.phone || value.email;
      }
    );

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  const onSubmit = (values: any) => {
    console.log(values);

    const defaultValues = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    reset(defaultValues);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex justify-center items-center"
    >
      <div className="w-full md:w-[55%] lg-[50%] grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch px-5 md:px-0">
        <div className="flex flex-col space-y-5 w-full">
          {/* name */}
          <div className="flex flex-col">
            <input
              {...register("name")}
              type="text"
              placeholder="Enter full name"
              className="font-work-sans text-[14px] bg-[#2d2d2d] text-white leading-[24px] py-3 px-3 w-full outline-none border-none focus:ring-0 focus:ring-none focus:outline-none"
            />
            {errors.name && (
              <div className="error text-red-600 text-[13px] py-2">
                {errors.name.message}
              </div>
            )}
          </div>
          {/* email */}
          <div className="flex flex-col">
            <input
              {...register("email")}
              type="text"
              placeholder="Email address"
              className="font-work-sans text-[14px] bg-[#2d2d2d] text-white leading-[24px] py-3 px-3 w-full outline-none border-none focus:ring-0 focus:ring-none focus:outline-none"
            />
            {errors.email && (
              <div className="error text-red-600 text-[13px] py-2">
                {errors.email.message}
              </div>
            )}
          </div>
          {/* phone */}
          <div className="flex flex-col">
            <input
              {...register("phone")}
              type="text"
              placeholder="Phone e.g. 080 123 4569"
              className="font-work-sans text-[14px] bg-[#2d2d2d] text-white leading-[24px] py-3 px-3 w-full outline-none border-none focus:ring-0 focus:ring-none focus:outline-none"
            />
            {errors.phone && (
              <div className="error text-red-600 text-[13px] py-2">
                {errors.phone.message}
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex-col space-y-5">
          {/* message */}
          <div className="flex flex-col">
            <textarea
              {...register("message")}
              rows={4}
              cols={10}
              placeholder="Type messsage here..."
              className="font-work-sans text-[14px] bg-[#2d2d2d] text-white leading-[24px] py-3 px-3 w-full outline-none border-none focus:ring-0 focus:ring-none focus:outline-none"
            />
            {errors.message && (
              <div className="error text-red-600 text-[13px] py-2">
                {errors.message.message}
              </div>
            )}
          </div>
          {/* send button */}
          <button
            className="font-work-sans text-[12px] text-[#d5897b] hover:text-white py-3 px-8 border border-[#d5897b] cursor-pointer hover:bg-[#d5897b] transform hover:-translate-y-1 transition-transform duration-200 uppercase tracking-widest w-full"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
