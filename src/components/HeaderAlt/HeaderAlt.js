import React from "react";
import styled from "styled-components";
import bg03 from "../../assets/img/banner/bg_overlay.svg";
import NavbarAlt from "../NavbarAlt/NavbarAlt";

const HeaderAlt = () => {
  const BgImage = styled.div`
    & {
      position: relative;
    }

    &:before {
      content: "";
      height: 100vh;
      width: 100vw;
      position: absolute;
      background-image: url(${bg03});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -99;
    }

    &:after {
      content: "";
      position: absolute;
      height: 100vh;
      width: 100vw;
      z-index: -99;
      background: linear-gradient(
        100deg,
        rgba(0, 0, 0, 41.78) 0%,
        rgba(0, 0, 0, 0.65) 15.27%,
        transparent 44.31%
      );

      /* @media (min-width: 320px) and (max-width: 768px) {
        width: 100vw;
        height: 50vh;
        top: 0;
        left: 0;
      } */
    }
  `;

  const BottomOverlay = styled.div`
    &:after {
      content: "";
      position: absolute;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 8.78) -13%,
        rgba(0, 0, 0, 0.65) 56.27%,
        transparent 92.31%
      );
      height: 25vh;
      width: 100%;
      top: 75.5vh;
      left: 0;
      z-index: -99;
    }
  `;

  const TopOverlay = styled.div`
    &:after {
      content: "";
      position: absolute;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 8.78) -13%,
        rgba(0, 0, 0, 0.65) 56.27%,
        transparent 92.31%
      );
      height: 25vh;
      width: 100%;
      top: 10.5vh;
      left: 0;
      z-index: -99;
    }
  `;
  return (
    <>
      <BgImage />
      <TopOverlay />
      <BottomOverlay />
      <NavbarAlt />
    </>
  );
};

export default HeaderAlt;
