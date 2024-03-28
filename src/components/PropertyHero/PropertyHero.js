import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./PropertyHero.css";
import locationIcon from "../../assets/img/hero-icons/location.svg";
import luxury from "../../assets/img/hero-icons/luxury.svg";
import comfort from "../../assets/img/hero-icons/comfort.svg";

const PropertyHero = ({description}) => {
  return (
    <Container
      fluid
      className='hero__alt__container d-flex flex-column justify-content-end align-items-center gap-5'
    >
      <Row className='hero__alt'>
        <Col>
          <div className='hero__alt__icons d-flex align-items-center justify-content-center gap-4'>
            <div className='hero__alt__icon d-flex flex-column gap-3 align-items-center'>
              <Image
                src={locationIcon}
                fluid
                style={{ height: "30px", width: "35px" }}
                alt='location icon'
              />
              <p className='text-uppercase'>Location</p>
            </div>
            <div className='hero__alt__icon d-flex flex-column gap-3 align-items-center'>
              <Image
                src={luxury}
                fluid
                style={{ height: "30px", width: "35px" }}
                alt="luxury icon"
              />
              <p className='text-uppercase'>Luxury</p>
            </div>
            <div className='hero__alt__icon d-flex flex-column gap-3 align-items-center'>
              <Image
                src={comfort}
                fluid
                style={{ height: "30px", width: "35px" }}
                alt="comfort icon"
              />
              <p className='text-uppercase'>Comfort</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='align-items-center justify-content-center'>
        {/* <Col lg={6} md={10}>
          <p className='hero__alt__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget ipsum vitae risus pellentesque ullamcorper eget vel lorem.
            Phasellus lobortis urna a mauris eleifend facilisis. Ut accumsan dui
            nec dolor aliquet, non varius magna egestas.
          </p>
        </Col> */}
      </Row>
    </Container>
  );
};

export default PropertyHero;
