import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./Offer.css";

const Offers_break = () => {
  const options = {
    rewind: true,
    perPage: 1,
  };
  return (
    <>
      <Container fluid>
        <Container>
          <Row className="Offer_break">
            <Splide className="splide_categories" options={options}>
              <SplideSlide>
                <Col>
                  <img src={img1} alt="" />
                </Col>
              </SplideSlide>
              <SplideSlide>
                <Col>
                  <img src={img2} alt="" />
                </Col>
              </SplideSlide>
            </Splide>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Offers_break;
