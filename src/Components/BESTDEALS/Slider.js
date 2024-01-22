import React from "react";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Container, Row } from "react-bootstrap";
import img1 from "../Assests/Cards/1.webp";
import img2 from "../Assests/Cards/2.webp";
import img3 from "../Assests/Cards/3.webp";

const images = [
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img3,
    thumbnail: img3,
  },
];
const Slider = () => {
  return (
    <Container fluid className="wrapper">
      <Row>
        <ImageGallery items={images} />
      </Row>
    </Container>
  );
};

export default Slider;
