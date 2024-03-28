import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import "./BookingSelection.css";
import Select from "react-select";
import carousels from "../Carousel/carousels";

const BookingSelection = () => {
  const properties = carousels.map((carousel) => {
    return { value: carousel.title, label: carousel.title };
  });

  const apartmentRef = useRef("");

  const [property, setProperty] = useState({
    arrival: "",
    departure: "",
    contact: "",
  });

  return (
    <Container
      fluid
      className='booking__selection__container d-flex align-items-center justify-content-center'
    >
      <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center'>
        <div>
          <Form.Control
            type='date'
            placeholder='Arrival'
            className='rounded-0 bg-white py-3 border-0 form__control shadow-none'
          />
        </div>
        <div>
          <Form.Control
            type='date'
            placeholder='Departure'
            className='rounded-0 bg-white py-3 border-0 form__control shadow-none'
          />
        </div>
        <div>
          <Form.Select
            aria-label='Default select example'
            className='py-3 rounded-0 border-0 shadow-none form-control form__control'
          >
            <option>Select Apartment</option>
            {carousels.map((carousel) => (
              <option value={carousel.title} key={carousel.title}>
                {carousel.title}
              </option>
            ))}
          </Form.Select>
        </div>
        <div>
          <Form.Control
            type='text'
            placeholder='Phone/Email'
            className='rounded-0 bg-white py-3 border-0 shadow-none'
          />
        </div>
        <div>
          <Button
            className='rounded-0 py-3 px-5 submit__btn border-0 shadow-none text-uppercase'
            variant='primary'
            type='submit'
          >
            Book Now
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default BookingSelection;
