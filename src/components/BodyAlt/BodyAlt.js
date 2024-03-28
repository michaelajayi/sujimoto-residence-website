import React from "react";
import Footer from "../Footer/Footer";
import Details from "../Gallery/Details/Details";
import Gallery from "../Gallery/Gallery";
import PropertyHero from "../PropertyHero/PropertyHero";
const BodyAlt = ({ property }) => {
  return (
    <>
      <PropertyHero
        description={property.description}
        location={property.location}
      />
      <Gallery gallery={property[0].gallery} />
      <Details icons={property[0].icons} />
      <Footer />
    </>
  );
};

export default BodyAlt;
