import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  selectProperty,
  setCarousels,
} from "../../features/property/propertySlice";
import carousels from "../Carousel/carousels";
import Properties from "../Properties/Properties";
import "./Booking.css";

const Booking = () => {
  const { activeCarouselBg } = useSelector(selectProperty);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCarousels(carousels));
  }, [dispatch]);

  const TopOverlay = styled.div`
    &:after {
      content: "";
      position: absolute;
      width: 100vw;
      height: 701px;
      left: 0;
      top: 0;
      background: linear-gradient(
        180deg,
        #111111 19.26%,
        rgba(19, 19, 19, 0.9) 44.74%,
        rgba(20, 20, 19, 0) 100%
      );
      z-index: -99;
    }
  `;

  return (
    <Container
      fluid
      style={{
        background: `url(${activeCarouselBg}) no-repeat center center/cover`,
      }}
      className={`booking__wrapper px-0`}>
      <TopOverlay />
      <div className="booking__container d-flex flex-column align-items-center justify-content-center ">
        <div className="booking__text__wrapper">
          <h1 className="text-uppercase booking__heading mt-3 mb-4">
            Book An Apartment
          </h1>
        </div>
        {/* <BookingSelection /> */}
        <Properties />
      </div>
    </Container>
  );
};

export default Booking;
