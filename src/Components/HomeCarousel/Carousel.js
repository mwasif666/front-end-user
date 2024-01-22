import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Container
        fluid
        className="carousel-main"
        style={{
          padding: "0",
          paddingBottom: "50px",
        }}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={(s, time, progress) => {
            progressCircle.current.style.setProperty(
              "--progress",
              1 - progress
            );
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
          }}
          className="mySwiper"
          onActiveIndexChange={(swiper) => {}}
        >
          <SwiperSlide className="carousel-item carousel-item-1">
            <Container>
              <Row>
                <Col xs="6" className="">
                  <div className="content-again mt-5">
                    <h1 className="content-h1">The New Laptop</h1>
                    <h4 className="under">Under Favourable Laptops</h4>
                    <div className="prize">
                      <h3>RS</h3>
                      <p>15,000</p>
                    </div>
                    <button className="btn btn1 w-25" type="submit">
                      Shop Now
                    </button>
                  </div>
                </Col>
                <Col xs="5" className="image__style"></Col>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="carousel-item carousel-item-2">
            <Container>
              <Row>
                <Col xs="6">
                  <div className="content-again mt-5">
                    <h1 className="content-h1">World Smallest</h1>
                    <p className="under">Under Favourable SmartPhones</p>
                    <div className="prize">
                      <h3>RS</h3>
                      <p>5,000</p>
                    </div>
                    <button className="btn btn1 w-25" type="submit">
                      Shop Now
                    </button>
                  </div>
                </Col>
                <Col xs="5" className="image__style"></Col>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="carousel-item carousel-item-3">
            <Container>
              <Row>
                <Col xs="6">
                  <div className="content-again mt-5">
                    <h1 className="content-h1">Advanced Drones</h1>
                    <p className="under">Under Favourable Drones</p>
                    <div className="prize">
                      <h3>RS</h3>
                      <p>20,000</p>
                    </div>
                    <button className="btn btn1 w-25" type="submit">
                      Shop Now
                    </button>
                  </div>
                </Col>
                <Col xs="5" className="image__style"></Col>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="carousel-item carousel-item-4">
            <Container>
              <Row>
                <Col xs="6">
                  <div className="content-again offset-md-1 mt-5">
                    <h1 className="content-h1">High Quality Camera</h1>
                    <p className="under">Under Favourable Camera</p>
                    <div className="prize">
                      <h3>RS</h3>
                      <p>120,000</p>
                    </div>
                    <button className="btn btn1 w-25" type="submit">
                      Shop Now
                    </button>
                  </div>
                </Col>
                <Col xs="5" className="image__style">
                  {/* <img
                    src="https://demo.xpeedstudio.com/marketov2/home8/wp-content/uploads/sites/8/2018/05/07.png"
                    alt=""
                  /> */}
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </Container>
    </>
  );
};

export default Carousel;
