"use client";
import { formatCurrency } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import moment, { Moment } from "moment";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import * as Yup from "yup";
import propertyArray from "./Properties/property-array";
dayjs.extend(dayOfYear);

const BookNowModalChild = () => {
  const [displayPrice, setDisplayPrice] = useState<{
    minPrice: number | null;
    maxPrice: number | null;
  }>({
    minPrice: null,
    maxPrice: null,
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDates, setSelectedDates] = useState<
    [Dayjs | null, Dayjs | null] | null
  >(null);

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

  const validateSchema = Yup.object().shape({
    firstname: Yup.string().required("Name is required"),
    lastname: Yup.string().required("Name is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be a number")
      .min(11, "Phone number must be 11 digits")
      .max(11, "Phone number must be 11 digits"),
    email: Yup.string().email("Must be a valid email"),
    property: Yup.string().required("Property is required"),
    dates: Yup.array()
      .of(Yup.date().required("Date is required"))
      .required("Check in date and check out date is required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    property: "",
    dates: [],
    phone: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);

    // reset form values
    setSelectedOption(null);
    setSelectedDates(null);

    setDisplayPrice({
      minPrice: null,
      maxPrice: null,
    });
    reset(defaultValues);
  };

  return (
    <div className='w-full h-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full flex flex-col space-y-5 justify-center items-center px-5 py-5'
      >
        {displayPrice.minPrice !== null && displayPrice.maxPrice !== null && (
          <div className='flex flex-col w-full'>
            <label className='font-work-sans text-[12px] tracking-wider uppercase text-black'>
              Price:{" "}
            </label>
            <input
              type='text'
              value={`${formatCurrency(
                displayPrice.minPrice,
                "NGN"
              )} - ${formatCurrency(displayPrice.maxPrice, "NGN")}`}
              readOnly
              className='font-work-sans text-[14px] bg-transparent text-black leading-[24px] py-3 px-3 w-full outline-none border border-black focus:ring-0 focus:ring-none focus:outline-none font-semibold tracking-wider'
            />
          </div>
        )}
        <div className='w-full'>
          <RangePicker
            {...register("dates")}
            placeholder={["Check In Date", "Check Out Date"]}
            value={selectedDates}
            size='large'
            onChange={(dateString) => {
              // console.log(dateString);

              if (dateString) {
                setValue(
                  "dates",
                  dateString.map((ds: any) => new Date(ds))
                );

                setSelectedDates(dateString);
              } else {
                setValue("dates", []);
                setSelectedDates(null);
              }
              trigger("dates");
            }}
            className='rounded-none font-work-sans text-[14px] w-full py-3 px-3 border border-black focus:ring-0 focus:ring-none focus:outline-none'
            disabledDate={(current) => {
              {
                // Can not select days before today and today
                return (
                  current &&
                  (current < moment().startOf("day") ||
                    (current.dayOfYear() === moment().dayOfYear() &&
                      moment().hour() + moment().minute() / 60 < 12.5))
                );
              }
            }}
          />
          {errors.dates && (
            <div className='error text-red-600 text-[13px] py-2'>
              {errors.dates.message}
            </div>
          )}
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
            {...register("property")}
            options={propertyOptions}
            value={selectedOption}
            onChange={(value: any) => {
              setValue("property", value.value);
              setSelectedOption(value); // Update the selected option when the value changes
              setDisplayPrice({
                minPrice:
                  propertyArray.find(
                    (property) => property.title === value.value
                  )?.minPrice || 0,
                maxPrice:
                  propertyArray.find(
                    (property) => property.title === value.value
                  )?.maxPrice || 0,
              });
              trigger("property");
            }}
            styles={{
              ...customStyles,
              menuPortal: (base) => ({
                ...base,
                zIndex: 9999,
              }),
            }}
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
            menuPortalTarget={document.body}
          />
          {errors.property && (
            <div className='error text-red-600 text-[13px] py-2'>
              {errors.property.message}
            </div>
          )}
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
