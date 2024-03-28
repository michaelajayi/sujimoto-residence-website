import { DatePicker } from "antd";
import React, { useState } from "react";
import { Badge, Button, Form, Modal, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "./BookingModal.css";

import {
  selectProperty,
  setCurrent,
} from "../../features/property/propertySlice";

import {
  bookPropertyAsync,
  selectBooking,
} from "../../features/booking/bookingSlice";

const StyledRangePickerContainer = styled.div`
  @media (max-width: 576px) {
    .ant-picker-panels {
      flex-direction: column !important;
      top: 20px;
    }
  }
`;

const BookingModal = (props) => {
  const { RangePicker } = DatePicker;
  const { current, property, properties } = useSelector(selectProperty);
  const { loading } = useSelector(selectBooking);

  const dispatch = useDispatch();

  const [booking, setBooking] = useState({
    checkInDate: "",
    checkOutDate: "",
    noOfAdults: 0,
    noOfChildren: 0,
    email: "",
    phone: "",
  });

  const [propertyId, setPropertyId] = useState("");

  const clearBooking = () => {
    setBooking({
      checkInDate,
      checkOutDate,
      noOfAdults: 0,
      noOfChildren: 0,
      email: "",
      phone: "",
    });
    setPropertyId("");
  };

  const { checkInDate, checkOutDate, email, phone } = booking;

  const onChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(booking);
    // if (checkInDate === "" || checkOutDate === "" || email === "" || phone === "" || property === "") {
    //   toast.error("Please fill in the required data.");
    // } else {
    //   const bookingData = { ...booking, property: propertyId };
    //   dispatch(bookPropertyAsync(bookingData, props.onHide));
    //   clearBooking();
    // }
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='booking__modal'
      keyboard={false}
      backdrop='static'
    >
      <Modal.Body className='px-2 px-md-3 py-5'>
        <div className='d-flex flex-column flex-lg-row justify-content-center px-5 gap-5'>
          <small className='close__btn text-small' onClick={props.onHide}>
            {/* <AiOutlineClose size={20} /> */}
            <p className='text-uppercase text-danger'>Close</p>
          </small>
          <div className='info__section flex-grow-0 d-flex flex-column justify-content-between text-dark align-self-start gap-5'>
            <div className='property__details text-uppercase'>
              <h1 className='title__text pt-4'>{property && property.title}</h1>
              <h3 className='location__text px-0 text-start'>
                {property && property.location}
              </h3>
            </div>
            <p className='amount'>
              {property && property.price.$numberDecimal}
            </p>
            <div className='availability'>
              <p>
                {property && property.availability === "" ? "" : "Availability"}
              </p>
              <Badge bg='success'>{property && property.availability}</Badge>
            </div>
          </div>
          <div className='booking__section d-flex flex-column justify-content-between flex-grow-1'>
            <Form>
              <div className='d-flex flex-column flex-md-row justify-content-between dates'>
                <Form.Group className='mb-3 col-md-5'>
                  <RangePicker
                    getPopupContainer={(triggerNode) => {
                      return triggerNode.parentNode;
                    }}
                    panelRender={(panelNode) => (
                      <StyledRangePickerContainer>
                        {panelNode}
                      </StyledRangePickerContainer>
                    )}
                    name={["checkInDate", "checkOutDate"]}
                    defaultValue={[checkInDate, checkOutDate]}
                    className='flat-form__controls shadow-none check__in'
                    format='DD-MM-YYYY'
                    placeholder={["Check-In Date", "Check-Out Date"]}
                    onChange={(date, dateString) => setBooking(date)}
                  />
                </Form.Group>
              </div>

              {/* <div className='d-flex flex-column flex-md-row justify-content-between tag__along'>
                <Form.Group className='mb-3 col-md-5'>
                  <Form.Label className='adult__label'>No of Adults</Form.Label>
                  <Form.Control
                    type='number'
                    name='noOfAdults'
                    value={noOfAdults}
                    placeholder='Default'
                    className='flat-form__controls shadow-none'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className='mb-3 col-md-5'>
                  <Form.Label className='children__label'>
                    No of Children
                  </Form.Label>
                  <Form.Control
                    type='number'
                    name='noOfChildren'
                    value={noOfChildren}
                    placeholder='Default'
                    className='flat-form__controls shadow-none'
                    onChange={onChange}
                  />
                </Form.Group>
              </div> */}
              <Form.Group className='mb-3'>
                <Form.Select
                  id='selectProperty'
                  value={propertyId}
                  className='flat-form__controls shadow-none'
                  placeholder='Select Property'
                  onChange={(e) => {
                    setPropertyId(e.target.value);
                    dispatch(setCurrent(e.target.value));
                  }}
                >
                  <option value=''>Select Property</option>
                  {properties &&
                    properties.map((property) => (
                      <option key={property._id} value={property._id}>
                        {property.title}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={email}
                  className='flat-form__controls shadow-none'
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Control
                  type='phone'
                  name='phone'
                  value={phone}
                  className='flat-form__controls shadow-none'
                  placeholder='Phone number'
                  minLength={11}
                  maxLength={11}
                  onChange={onChange}
                />
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                className='book-now__btn shadow-none border-0 rounded-0 text-uppercase'
                onClick={(e) => onSubmit(e)}
              >
                {loading ? (
                  <Spinner animation='border' size='sm' />
                ) : (
                  "Book Now"
                )}
              </Button>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;
