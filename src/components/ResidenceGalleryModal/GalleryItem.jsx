import Image from "next/image";
import React from "react";

const GalleryItem = ({ image }) => {
  return (
    <>
      <Image src={image.img1} alt='Residence_img' />
      <Image src={image.img2} alt='Residence_img' />
      <Image src={image.img3} alt='Residence_img' />
      <Image src={image.img4} alt='Residence_img' />
      <Image src={image.img5} alt='Residence_img' />
    </>
  );
};

export default GalleryItem;
