import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import Offers_break from "./Offers_break";
const Offer = () => {
  return (
    <>
      <Container fluid>
        <Container>
          <Row className="Offer py-5">
            <Col md="6">
              <img src={img1} alt="" />
            </Col>
            <Col md="6">
              <img src={img2} alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Offers_break />
    </>
  );
};

export default Offer;
