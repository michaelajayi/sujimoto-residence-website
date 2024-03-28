import React from "react";
import BodyAlt from "../BodyAlt/BodyAlt";
import { properties } from "../Gallery/Details/propertyIcons";
import HeaderAlt from "../HeaderAlt/HeaderAlt";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  return (
    <div className='property__details__wrapper'>
      <HeaderAlt />
      <BodyAlt property={properties} />
    </div>
  );
};

export default PropertyDetails;
