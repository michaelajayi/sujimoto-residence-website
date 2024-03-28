import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import "./LifestyleItem.css";
import bg01 from "../../assets/img/lifestyle-banners/01.svg";

const LifestyleItem = ({ item }) => {
  const BgImage = styled.div`
    & {
      width: 100vw;
      height: 100%;
      position: relative;
      padding: 13rem 10rem;
      display: grid;
      place-content: left center;
    }

    &:after {
      content: "";
      position: absolute;
      background-image: url(${item.bg});
      filter: brightness(0.7);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      object-fit: cover;
      width: 100vw;
      height: 100%;
      z-index: -99;
    }
  `;
  return (
    <BgImage>
      <div className='lifestyle__inner d-flex flex-column gap-3'>
        <h1 className='lifestyle__inner__title text-uppercase'>{item.title}</h1>
        <p className='lifestyle__inner__desc'>{item.desc}</p>
      </div>
    </BgImage>
  );
};

export default LifestyleItem;
