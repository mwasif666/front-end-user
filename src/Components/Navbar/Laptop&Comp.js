import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../features/cartSlice";
import { Card, Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { Tooltip } from "antd";
import { addFav } from "../../features/favCartSlice";
import { ToastContainer } from "react-toastify";
import { Slider } from "antd";
import Accordion from "react-bootstrap/Accordion";
import { AuthContext } from "../../context/AuthContext";
import ReactImageMagnify from "react-image-magnify";
import "./categorycard.css";

const LaptopComp = () => {
  const { isLoading, product } = useContext(AuthContext);
  const { items } = useSelector((state) => state.allCart) || [];
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(70000);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle opening and closing of modal
  const openModal = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShow(false);
  };

  // Decrease quantity
  const handleDecrease = () => {
    if (
      selectedItem &&
      selectedItem.quantity !== undefined &&
      selectedItem.quantity > 1
    ) {
      setSelectedItem((prevItem) => ({
        ...prevItem,
        quantity: prevItem.quantity - 1,
      }));
    }
  };

  // Increase quantity
  const handleIncrease = () => {
    if (selectedItem && selectedItem.quantity !== undefined) {
      setSelectedItem((prevItem) => ({
        ...prevItem,
        quantity: prevItem.quantity + 1,
      }));
    }
  };

  // Add to cart
  const handleAddToCart = () => {
    if (selectedItem) {
      dispatch(addToCart(selectedItem));
    }
  };

  // Add to cart for main items
  const handleAddToCartMain = (item) => {
    if (item) {
      dispatch(addToCart(item));
    }
  };

  // Add to wishlist
  const handleWhislist = (item) => {
    dispatch(addFav(item));
  };

  // Filter products based on filter values
  const filteredProducts = product.filter(
    (item) =>
      item.productFeatured.toLowerCase().includes("laptop-computer") &&
      parseFloat(item.prodPrice) >= minPrice &&
      parseFloat(item.prodPrice) <= maxPrice &&
      item.prodTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(item.productFeatured))
  );

  // Handle category checkbox change
  const handleCategoryCheckboxChange = (productFeatured) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(productFeatured)) {
        return prevCategories.filter((cat) => cat !== productFeatured);
      } else {
        return [...prevCategories, productFeatured];
      }
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer />
      <Container fluid className="con">
        <Row>
          <Col md="3" className="mt-3 filtering">
            <Accordion defaultActiveKey="0" flush className="border-1">
              {/* Filter by price */}
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
              {/* Search Product */}
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
              {/* Product Categories */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>Product Categories</Accordion.Header>
                <Accordion.Body>
                  <div>
                    {Array.from(
                      new Set(product.map((item) => item.productFeatured))
                    ).map((productFeatured) => (
                      <label key={productFeatured}>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(productFeatured)}
                          onChange={() =>
                            handleCategoryCheckboxChange(productFeatured)
                          }
                        />
                        {productFeatured}
                      </label>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          {/* Render filtered products  */}
          <Col md="9">
            <Row>
              {filteredProducts.map((item) => (
                <Col md="4">
                  <div key={item._id}>
                    <Card className="allcategories_card allcategories_card-2">
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
                        {/* Add ratings if available */}
                        {/* <p className="Ratings">{item.ratingStarsIcons}</p> */}
                        <div className=" d-flex justify-content-center gap-2">
                          <p className="pt-1">Color:{item.prodColor}</p>
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

export default LaptopComp;
