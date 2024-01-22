import * as React from "react";
import "./cards.css";
import { Container, Row, Col } from "react-bootstrap";

function Cards() {
  return (
    <>
      <Container fluid>
        <Row className="">
          <Col className="p-1" xs="6" lg="4">
            <div className="card allcategories_card">
              <div className="iamges-categories">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p9_large.jpg?v=1674275297"
                  alt=""
                  className="categories-img-1"
                />
                <img
                  src="	https://drou-electronics-store.myshopify.com/cdn/shop/products/p2_large.jpg?v=1674275320"
                  alt=""
                  className="categories-img-2"
                />
              </div>
              <div className="allcategories-content d-flex justify-content-center text-center">
                <div className="allcategories-content1">
                  <h6>Home Entertainment</h6>
                  <h5>RS 7600</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col className="p-1 carding" xs="6" lg="4">
            <div className="card allcategories_card">
              <div className="iamges-categories">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p9_large.jpg?v=1674275297"
                  alt=""
                  className="categories-img-1"
                />
                <img
                  src="	https://drou-electronics-store.myshopify.com/cdn/shop/products/p2_large.jpg?v=1674275320"
                  alt=""
                  className="categories-img-2"
                />
              </div>
              <div className="allcategories-content d-flex justify-content-center text-center">
                <div className="allcategories-content1">
                  <h6>Home Entertainment</h6>
                  <h5>RS 7600</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col className="p-1 carding" xs="6" lg="4">
            <div className="card allcategories_card">
              <div className="iamges-categories">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/products/p9_large.jpg?v=1674275297"
                  alt=""
                  className="categories-img-1"
                />
                <img
                  src="	https://drou-electronics-store.myshopify.com/cdn/shop/products/p2_large.jpg?v=1674275320"
                  alt=""
                  className="categories-img-2"
                />
              </div>
              <div className="allcategories-content d-flex justify-content-center text-center">
                <div className="allcategories-content1">
                  <h6>Home Entertainment</h6>
                  <h5>RS 7600</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cards;