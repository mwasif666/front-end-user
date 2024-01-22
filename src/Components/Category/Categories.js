import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import card1 from "../Components/Product_Categories3/Images/img5.jpg";
import card2 from "../Components/Product_Categories3/Images/img4.jpg";
import "./categories.css";
import "./Responsive.css";
import Categories_breakpoint from "../Categories_breakpoint";

const Categories = () => {
  return (
    <>
      <Container fluid>
        <Container>
          <Row className="categories Categories_item">
            <Col className="categories_1 p-5 " md="6">
              <img src={card1} alt="" />
              <div className="categories_content">
                <p>
                  CATCH HOTTEST <br /> <span className="span3"> DEALS</span> IN
                  CAMERAS CATEGORIES
                </p>
                <div className="btn_categories">
                  <div className="btn_shop_now">
                    <h5>Shop Now </h5>
                  </div>
                  <div className="categories_icons">
                    <i class="fa-solid fa-circle-chevron-right right_icons_cat"></i>
                    <i class="fa-solid fa-circle-chevron-right fa-rotate-90"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="categories_1 p-5" md="6">
              <img src={card2} alt="" />
              <div className="categories_content">
                <p>
                  CATCH HOTTEST <br /> <span className="span3"> DEALS</span> IN
                  CAMERAS CATEGORIES
                </p>
                <div className="btn_categories">
                  <div className="btn_shop_now">
                    <h5>Shop Now </h5>
                  </div>
                  <div className="categories_icons">
                    <i class="fa-solid fa-circle-chevron-right right_icons_cat"></i>
                    <i class="fa-solid fa-circle-chevron-right fa-rotate-90"></i>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Categories_breakpoint />
    </>
  );
};

export default Categories;
