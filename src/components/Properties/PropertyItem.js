import React from "react";
import { Card, Button } from "react-bootstrap";
import cardBanner from "../../assets/img/card_bgs/01.svg";

const PropertyItem = () => {
  return (
    <Card
    //   style={{ width: "18rem", background: "purple !important" }}
      className='rounded-0'
    >
      <Card.Img variant='top' src={cardBanner} className='border-0 rounded-0' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PropertyItem;
