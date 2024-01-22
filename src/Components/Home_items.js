import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./Assests/img1.png";
import img2 from "./Assests/img2.png";
import img3 from "./Assests/img3.png";
import ParticleAnimation from "react-particles";
import "./Responsive.css";
function Home_items() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* <Container
        fluid
        style={{
          padding: "0",
        }}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel-main"
        >
          <Carousel.Item className="carousel-item">
            <Container>
              <Row>
                <Col xs="6" className="content-again">
                  <h1 className="content-h1">The New Standard</h1>
                  <p className="under">Under Favourable HeadPhones</p>
                  <div className="prize">
                    <sub>
                      <i class="fa-solid fa-rupee-sign"></i>
                    </sub>
                    <p>
                      1200. <sup>99</sup>
                    </p>
                  </div>
                  <button className="btn btn1" type="submit">
                    Start Buying
                  </button>
                </Col>
                <Col xs="6" className="image__style">
                  <img className="w-100 h-100" src={img1} alt="" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Container>
              <Row>
                <Col xs="6" className="content-again">
                  <h1 className="content-h1">The New Standard</h1>
                  <p className="under">Under Favourable Laptops</p>
                  <div className="prize">
                    <p>
                      <i class="fa-solid fa-rupee-sign"></i>
                      1200.99
                    </p>
                  </div>
                  <button className="btn btn1" type="submit">
                    Start Buying
                  </button>
                </Col>
                <Col xs="6" className="image__style position-relative dislazy">
                  <img className=" overlay-ui w-100 h-100" src={img2} alt="" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Container>
              <Row>
                <Col xs="6" className="content-again">
                  <h1 className="content-h1">The New Standard</h1>
                  <p className="under">Under Favourable Airbuds</p>
                  <div className="prize">
                    <p>
                      <i class="fa-solid fa-rupee-sign"></i>
                      1200.99
                    </p>
                  </div>
                  <button className="btn btn1" type="submit">
                    Start Buying
                  </button>
                </Col>
                <Col xs="6" className="image__style position-relative dislazy">
                  <img className=" overlay-ui w-100 h-100" src={img3} alt="" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container> */}
    </>
  );
}

export default Home_items;
