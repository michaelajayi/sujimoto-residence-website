import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { FiArrowRight } from "react-icons/fi";

const Error404 = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

const NotFound = () => {
  return (
    <Error404>
      <div className='d-flex flex-column align-items-center justify-content-center gap-4'>
        <h1>Oops! Not Found</h1>
        <Link to='/' className='back__home d-flex align-items-center justify-content-center gap-2'>
          <p>Back Home</p>
          <FiArrowRight />
        </Link>
      </div>
    </Error404>
  );
};
export default NotFound;
