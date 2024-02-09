import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, fetchProduct, getCartTotal } from "../features/cartSlice";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Modal from "react-bootstrap/Modal";
import "./AllCategory/AllCategories.css";
import ReactImageMagnify from "react-image-magnify";
import imgFire from "./Assests/fire.png";
import { NavLink } from "react-router-dom";
import { Tooltip } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addFav } from "../features/favCartSlice";
import { AuthContext } from "../context/AuthContext";

const ProductCard = () => {
  const { items } = useSelector((state) => state.allCart) || [];
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { isLoading, product } = useContext(AuthContext);

  const openModal = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShow(false);
  };

  const handleDecrease = () => {
    if (selectedItem && selectedItem.quantity !== undefined) {
      const updatedItem = { ...selectedItem };
      if (updatedItem.quantity > 1) {
        updatedItem.quantity -= 1;
        setSelectedItem(updatedItem);
      }
    }
  };

  const handleIncrease = () => {
    if (selectedItem && selectedItem.quantity !== undefined) {
      const updatedItem = { ...selectedItem };
      updatedItem.quantity += 1;
      setSelectedItem(updatedItem);
    }
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      dispatch(addToCart(selectedItem));
    }
  };

  const handleAddToCartMain = (item) => {
    if (item) {
      dispatch(addToCart(item));
    }
  };

  const { cart } = useSelector((state) => state.allCart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const handleWhislist = (item) => {
    dispatch(addFav(item));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer />

      <Container fluid className="con allcategories_container">
        <Row className="swiper-card-allcategorie">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper AllCategories"
          >
            {product.map((item) => (
              <SwiperSlide key={item._id} className="swiper-card-allcategories">
                <Col>
                  <Card className="allcategories_card">
                    <NavLink to={`cartClickData/${item._id}`}>
                      <div className="iamges-categories">
                        <p>{item.category}</p>
                        <h4 className="text-center">{item.prodTitle}</h4>
                        <img
                          src={item?.prodImg1}
                          alt={item.prodTitle}
                          style={{ objectFit: "cover" }}
                          id="img1"
                        />
                        <img
                          src={item?.prodImg2}
                          alt={item.prodTitle}
                          style={{ objectFit: "cover" }}
                          id="img2"
                        />
                      </div>
                    </NavLink>
                    <div className="Box-icons2">
                      <div className="content-box-cart2">
                        <Tooltip placement="left" title="Add To Cart">
                          <p onClick={() => handleAddToCartMain(item)}>
                            <i className="bi bi-cart4"></i>
                          </p>
                        </Tooltip>

                        <Tooltip
                          placement="left"
                          title="Quick View"
                          onClick={() => openModal(item)}
                        >
                          <p>
                            <i className="bi bi-info"></i>
                          </p>
                        </Tooltip>
                        <Tooltip placement="left" title="Wish List">
                          <p onClick={() => handleWhislist(item)}>
                            <i className="bi bi-heart"></i>
                          </p>
                        </Tooltip>
                        <NavLink to={`cartClickData/${item._id}`}>
                          <Tooltip placement="left" title="View Item">
                            <p>
                              <i className="bi bi-eye text-white"></i>
                            </p>
                          </Tooltip>
                        </NavLink>
                      </div>
                    </div>
                    <div className="details-card-item text-center">
                      <h4>Rs {item.prodPrice} </h4>
                      <p className="Ratings">{item.ratingStarsIcons}</p>
                      <div className=" d-flex justify-content-center gap-2">
                        <p className="pt-1">Color:{item.prodColor}</p>
                      </div>
                    </div>
                  </Card>
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={closeModal}
        dialogClassName="extra-large-modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-info">
          <Modal.Header
            className="modal-header-close-btn"
            closeButton
          ></Modal.Header>
        </div>

        <Modal.Body className="extra-large-modal-body">
          <div className="d-flex">
            <div className="row">
              <div className="col-md-5">
                <div className="image-magnify">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: selectedItem?.prodTitle,
                        isFluidWidth: true,
                        src: `http://localhost:5000/${selectedItem?.prodImg1}`,
                      },
                      largeImage: {
                        src: `http://localhost:5000/${selectedItem?.prodImg1}`,
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-md-7 modal-card-1">
                <div style={{ marginLeft: "10px" }}>
                  <h1>{selectedItem?.prodTitle}</h1>
                  <div className="ratings-modal d-flex gap-3">
                    <div className="ratings-modal-1">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="ratings-modal-2 d-flex gap-2">
                      <div className="ratings-modal-sub-1">
                        <p>5 Reviews</p>
                      </div>
                      <div className="ratings-modal-sub-2 ps-4">
                        <i class="fa-solid fa-truck-fast"></i>
                      </div>
                      <div className="ratings-modal-sub-2">
                        <p>
                          <span>{selectedItem?.prodQty}</span> Items in stock
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="modal-cart-price">
                    <h3>Rs {selectedItem?.prodPrice}</h3>
                    <p>{selectedItem?.prodDesc}</p>
                    <h6>Color: {selectedItem?.prodColor}</h6>
                  </div>
                </div>
                <div className="buttons">
                  {selectedItem && selectedItem.quantity !== undefined ? (
                    <div className="col-lg-12 col-md-6 mb-4 mb-lg-0 d-flex gap-4">
                      <div
                        className="d-flex mb-4 increase-decrease"
                        style={{ maxWidth: "150px" }}
                      >
                        <button
                          className="btn px-3 me-2"
                          onClick={() => handleDecrease(selectedItem)}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <div className="form-outline">
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={selectedItem.quantity}
                            type="text"
                            className="form-control border-0"
                            onChange={() => null}
                          />
                        </div>
                        <button
                          className="btn px-3 ms-2"
                          onClick={() => handleIncrease(selectedItem)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <div className="increase-decrese-2 ">
                        <button
                          className="modal-cart-button btn"
                          onClick={() => dispatch(addToCart(selectedItem))}
                        >
                          <p>Add To Cart</p>
                          <i className="bi bi-cart4"></i>
                        </button>
                      </div>
                      <p className="text-start text-md-center d-none">
                        <strong>{selectedItem.price}</strong>
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductCard;
