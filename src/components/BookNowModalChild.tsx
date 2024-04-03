"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "antd";
import { Moment } from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import * as Yup from "yup";
import propertyArray from "./Properties/property-array";

const BookNowModalChild = () => {
  const [booking, setBooking] = useState({
    checkInDate: "",
    checkOutDate: "",
    property: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const {
    checkInDate,
    checkOutDate,
    property,
    firstname,
    lastname,
    email,
    phone,
  } = booking;

  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState<[Moment, Moment] | null>(null);

  const propertyOptions =
    propertyArray &&
    propertyArray.map((property) => {
      return { value: property.title, label: property.title };
    });

  const { RangePicker } = DatePicker;

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderRadius: 0,
      borderWidth: 0.5,
      fontFamily: "Work sans",
      fontSize: "14px",
      paddingTop: ".35rem",
      paddingBottom: ".35rem",
      outline: "none",
      backgroundColor: "transparent",
      color: "black",
      borderColor: "black",
      width: "100%",
      // zIndex: 10,
      boxShadow: state.isFocused ? null : null,
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "black",
      fontFamily: "Work sans",
      fontSize: "14px",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "#fff",
      fontFamily: "Work sans",
      fontSize: "14px",
      color: "#000",
      // zIndex: 10,
    }),
  };

  const [contactForm, setContactForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateSchema = Yup.object()
    .shape({
      firstname: Yup.string().required("Name is required"),
      lastname: Yup.string().required("Name is required"),
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
    <div className='w-full h-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full flex flex-col space-y-5 justify-center items-center px-5 py-5'
        id='contactForm'
      >
        <div className='w-full'>
          <RangePicker
            placeholder={["Check In Date", "Check Out Date"]}
            size='large'
            onChange={(date, dateString) => {
              console.log(date, dateString);
            }}
            className='rounded-none font-work-sans text-[14px] w-full py-3 px-3 border border-black focus:ring-0 focus:ring-none focus:outline-none'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
          {/* firstname */}
          <div className='flex flex-col w-full'>
            <input
              {...register("firstname")}
              type='text'
              placeholder='Enter First name'
              className='font-work-sans text-[14px] bg-transaparent text-black leading-[24px] py-3 px-3 w-full outline-none focus:ring-0 focus:ring-none focus:outline-none border border-black'
            />
            {errors.firstname && (
              <div className='error text-red-600 text-[13px] py-2'>
                {errors.firstname.message}
              </div>
            )}
          </div>
          {/* lastname */}
          <div className='flex flex-col w-full'>
            <input
              {...register("lastname")}
              type='text'
              placeholder='Enter Last name'
              className='font-work-sans text-[14px] bg-transparent text-black leading-[24px] py-3 px-3 w-full outline-none border border-black focus:ring-0 focus:ring-none focus:outline-none'
            />
            {errors.lastname && (
              <div className='error text-red-600 text-[13px] py-2'>
                {errors.lastname.message}
              </div>
            )}
          </div>
        </div>
        <div className='w-full'>
          <Select
            options={propertyOptions}
            onChange={(value: any) => {
              console.log(value.value);
            }}
            styles={customStyles}
            placeholder={loading ? "Loading ..." : "Select Property"}
            isDisabled={loading}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "lightgrey",
                primary: "black",
              },
            })}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
          {/* phone */}
          <div className='flex flex-col w-full'>
            <input
              {...register("phone")}
              type='text'
              placeholder='Phone e.g. 080 123 4569'
              className='font-work-sans text-[14px] bg-transparent text-black leading-[24px] py-3 px-3 w-full outline-none border border-black focus:ring-0 focus:ring-none focus:outline-none'
            />
            {errors.phone && (
              <div className='error text-red-600 text-[13px] py-2'>
                {errors.phone.message}
              </div>
            )}
          </div>
          {/* email */}
          <div className='flex flex-col w-full'>
            <input
              {...register("email")}
              type='text'
              placeholder='Email address'
              className='font-work-sans text-[14px] bg-transparent text-black leading-[24px] py-3 px-3 w-full outline-none border border-black focus:ring-0 focus:ring-none focus:outline-none'
            />
            {errors.email && (
              <div className='error text-red-600 text-[13px] py-2'>
                {errors.email.message}
              </div>
            )}
          </div>
        </div>
        {/* submit button */}
        <button
          className='font-work-sans text-[12px] text-white hover:font-medium py-3 px-8 border bg-black border-black cursor-pointer hover:bg-black transform hover:-translate-y-1 transition-transform duration-200 uppercase tracking-widest w-full'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookNowModalChild;
