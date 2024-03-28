import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import "./Details.css";
import img03 from "../../../assets/img/landing-icons/kitchen.svg";

const Details = ({ icons }) => {
  return (
    <Container
      fluid
      className='d-flex flex-column align-items-center justify-content-center bg-light details__wrapper'
      style={{ color: "#121212", gap: "3rem" }}
    >
      <h1 className='text-uppercase details__heading'>Details</h1>
      <div className='icon__box__container'>
        <Container>
          <Row>
            {icons.map((icon) => (
              <Col lg={3} md={4} className='my-4' key={icon.title}>
                <div className='icon__box d-flex flex-column align-items-center gap-4'>
                  <Image
                    src={icon.icon}
                    fluid
                    style={{ height: "30px", width: "35px" }}
                    alt="icon"
                  />
                  <p className='icon__box__text text-uppercase'>{icon.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Button className='book__now__btn text-uppercase border-0 shadow-0 rounded-0'>
        Book Now
      </Button>
    </Container>
  );
};

export default Details;
