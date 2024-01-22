import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../features/cartSlice";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Modal from "react-bootstrap/Modal";
import "../AllCategory/AllCategories.css";
import ReactImageMagnify from "react-image-magnify";
import imgFire from "../Assests/fire.png";
import { NavLink } from "react-router-dom";
import { Tooltip } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { addFav } from "../../features/favCartSlice";
import { ToastContainer } from "react-toastify";
import { Slider } from "antd";
import "./Product2.css";
import Accordion from "react-bootstrap/Accordion";

const Mobile = () => {
  // Fetch items from the Redux store. Initialize it as an empty array if needed.

  const items = useSelector((state) => state.allCart.items) || [];
  const dispatch = useDispatch();
  // State for the modal
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  // Function to open the modal and set the selected item
  const openModal = (item) => {
    console.log("Opening modal with item:", item);
    setSelectedItem(item);
    setShow(true);
  };

  // Function to close the modal
  const closeModal = () => {
    console.log("Closing modal");
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
  // Calculate the total quantity and price
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const handleWhislist = (item) => {
    dispatch(addFav(item));
  };
  const filteredItems = items
    .filter(
      (item) =>
        parseFloat(item.price) >= parseFloat(minPrice) &&
        parseFloat(item.price) <= parseFloat(maxPrice)
    )
    .filter(
      (item) =>
        selectedTitles.length === 0 || selectedTitles.includes(item.title)
    )
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleTitleCheckboxChange = (title) => {
    if (selectedTitles.includes(title)) {
      setSelectedTitles((prevTitles) =>
        prevTitles.filter((selectedTitle) => selectedTitle !== title)
      );
    } else {
      setSelectedTitles((prevTitles) => [...prevTitles, title]);
    }
  };

  const uniqueTitles = Array.from(new Set(items.map((item) => item.title)));

  return (
    <>
      <ToastContainer />

      <Container
        fluid
        className="con allcategories_container"
        style={{
          overflow: "hidden",
        }}
      >
        <Row>
          <Col md="3" className="mt-3 filtering">
            <Accordion defaultActiveKey="0" flush className="border-1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Filter by price</Accordion.Header>
                <Accordion.Body>
                  <Slider
                    range
                    min={0}
                    max={70000}
                    step={10}
                    value={[minPrice, maxPrice]}
                    onChange={([min, max]) => {
                      setMinPrice(min);
                      setMaxPrice(max);
                    }}
                  />
                  <div className="input-filters-number d-flex">
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      placeholder="Min Price"
                    />
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      placeholder="Max Price"
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Search Product</Accordion.Header>
                <Accordion.Body>
                  <input
                    type="text"
                    id="search-filter-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by title"
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Product Categories</Accordion.Header>
                <Accordion.Body>
                  <div>
                    {uniqueTitles.map((title) => (
                      <label key={title}>
                        <input
                          type="checkbox"
                          checked={selectedTitles.includes(title)}
                          onChange={() => handleTitleCheckboxChange(title)}
                        />
                        {title}
                      </label>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md="9">
            <Row>
              {filteredItems.map((item) => (
                <Col>
                  <div key={item.id}>
                    <Card className="allcategories_card allcategories_card-2">
                      <div className="iamges-categories">
                        <p>{item.category}</p>
                        <h4 className="text-center">{item.title}</h4>
                        <CardImg
                          src={item.img}
                          alt="..."
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="Box-icons2">
                        <div className="content-box-cart2">
                          <Tooltip placement="left" title="Add To Cart">
                            <p onClick={() => dispatch(addToCart(item))}>
                              <i className="bi bi-cart4"></i>
                            </p>
                          </Tooltip>

                          <Tooltip placement="left" title="Quick View">
                            <p onClick={() => openModal(item)}>
                              <i className="bi bi-info"></i>
                            </p>
                          </Tooltip>
                          <Tooltip placement="left" title="Wish List">
                            <p onClick={() => handleWhislist(item)}>
                              <i className="bi bi-heart"></i>
                            </p>
                          </Tooltip>
                          <Tooltip placement="left" title="View Item">
                            <p>
                              <NavLink to={`cartClickData/${item.id}`}>
                                <i className="bi bi-eye text-white"></i>
                              </NavLink>
                            </p>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="details-card-item text-center">
                        <h4>Rs {item.price}</h4>
                        <p className="Ratings">{item.ratingStarsIcons}</p>
                        <div className=" d-flex justify-content-center gap-2">
                          <p className="pt-1">Color:</p>
                          {item.availableColors &&
                            Array.isArray(item.availableColors) && (
                              <div className="colors-container">
                                {item.availableColors.map((colorObj, index) => (
                                  <div
                                    key={index}
                                    className="color-box"
                                    style={{
                                      backgroundColor: colorObj.boxColor,
                                    }}
                                  ></div>
                                ))}
                              </div>
                            )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
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
                        alt: selectedItem?.title,
                        isFluidWidth: true,
                        src: selectedItem?.img,
                      },
                      largeImage: {
                        src: selectedItem?.img,
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
              </div>
              <div className="col-md-7 modal-card-1">
                <div style={{ marginLeft: "10px" }}>
                  <h1>{selectedItem?.title}</h1>
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
                        <img src={imgFire} />
                      </div>
                      <div className="ratings-modal-sub-2">
                        <p>8 sold in last 10 hours</p>
                      </div>
                    </div>
                  </div>
                  <div className="modal-cart-price">
                    <h3>Rs {selectedItem?.price}</h3>
                    <p>{selectedItem?.description}</p>
                    <h6>Color: {selectedItem?.color}</h6>
                  </div>
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

export default Mobile;
