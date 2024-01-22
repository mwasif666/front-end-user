import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./AllCategories.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";
import Rate from "../rate";
import Tooltip_hover from "../Popover/popover";

import { Container, Row } from "react-bootstrap";

const AllCategories = () => {
  return (
    <>
      <Container fluid className="con allcategories_container">
        <Row className="swiper-card-allcategorie">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper AllCategories"
          >
            <SwiperSlide className="swiper-card-allcategories">
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
                    <Tooltip_hover />
                    <Rate />
                    <h6>Home Entertainment</h6>
                    <h5>RS 7600</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-card-allcategories">
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
                    <Tooltip_hover />
                    <Rate />
                    <h6>Home Entertainment</h6>
                    <h5>RS 7600</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-card-allcategories">
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
                    <Tooltip_hover />
                    <Rate />
                    <h6>Home Entertainment</h6>
                    <h5>RS 7600</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-card-allcategories">
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
                    <Tooltip_hover />
                    <Rate />
                    <h6>Home Entertainment</h6>
                    <h5>RS 7600</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-card-allcategories">
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
                    <Tooltip_hover />
                    <Rate />
                    <h6>Home Entertainment</h6>
                    <h5>RS 7600</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-card-allcategories">
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
                    <Tooltip_hover />
                    <Rate />
                    <h6>Home Entertainment</h6>
                    <h5>RS 7600</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-card-allcategories">
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
                    <Tooltip_hover />
                    <Rate />
                    <h6>Home Entertainment</h6>
                    <h5>RS 7600</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-card-allcategories">
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
                    <Tooltip_hover />
                    <Rate />
                    <h6>Home Entertainment</h6>
                    <h5>RS 7600</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </>
  );
};
export default AllCategories;
