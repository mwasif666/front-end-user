import * as React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../Producs-Categories/Images/img1.png";
import img2 from "../Assests/Cards/image.png";
import img3 from "../Assests/Cards/image (2).png";
import img4 from "../Assests/Cards/image (1).png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../Producs-Categories/cards.css";
import "./Recommented.css";
import { Container, Row, Col } from "react-bootstrap";

function Recommented() {
  const options = {
    rewind: true,
    perPage: 6,
  };
  return (
    <>
      <Container fluid className="con Recom">
        <Row className="">
          <h4 className="recom_heading">
            <span className="span-recom">Recommendations for you</span>
          </h4>
          <Splide className="splide_categories py-4" options={options}>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img1} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img2} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img3} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img4} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img1} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img2} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img3} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img4} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img1} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img2} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img3} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
            <SplideSlide>
              <Col className="p-1 carding-recommented" xs="6" lg="3">
                <Card className="ProductCards Product_Card_line Discount ">
                  <p className="upper-product">Samsung</p>
                  <Card.Title className="title">Galaxy Tab A8</Card.Title>
                  <div className="upper-box2">
                    <h6>45%</h6>
                  </div>
                  <Card.Img className="Card-img" variant="top" src={img4} />
                  <div className="down-content2 Cards-Main">
                    <p className="down-content-3">
                      <i class="fa-solid fa-rupee-sign">
                        : 19000
                        <sup>
                          <del id="DEL">25500</del>
                        </sup>
                      </i>
                      <i class="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                  <Card.Footer className="card-footer">
                    <small className="text-muted">
                      <p>
                        <i class="fa-regular fa-eye"></i> View
                      </p>
                      <p>
                        <i class="fa-regular fa-heart"></i> Wishlist
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </SplideSlide>
          </Splide>
        </Row>
      </Container>
    </>
  );
}

export default Recommented;
