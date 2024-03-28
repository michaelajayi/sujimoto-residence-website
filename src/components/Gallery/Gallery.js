import React from "react";
import { Container } from "react-bootstrap";
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";
import "./Gallery.css";

const Gallery = ({ gallery }) => {
  return (
    <Container
      fluid
      className='d-flex flex-column align-items-center bg-light gallery__wrapper gallery__heading'
      style={{ color: "#121212" }}
    >
      <h1 className='text-uppercase gallery__heading'>Gallery</h1>
      <GalleryCarousel gallery={gallery} />
    </Container>
  );
};

export default Gallery;
