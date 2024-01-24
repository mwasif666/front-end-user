import { getCardHeaderUtilityClass } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseItemQuantity,
  getCartTotal,
} from "../../features/cartSlice";
import { useLocation, useParams } from "react-router-dom";
import productData from "../../productData";
import imgFire from "../Assests/fire.png";
import "../AllCategory/AllCategories.css";
import Spinner from "react-bootstrap/Spinner";
import Recommented from "../Recoomended/Recommented";
import { AuthContext } from "../../context/AuthContext";

const CartClickData = () => {
  const items = useSelector((state) => state.allCart.items) || [];
  const {setIsLoading , isLoading , product} = useContext(AuthContext)
  const dispatch = useDispatch();
  // State for the modal
  const [selectedItem, setSelectedItem] = useState(null);
  const [productDetails, setProductDetails] = useState([]);

  // const selectedItem = location.state.selectedItem;
  const { id } = useParams();
  

  useEffect(() => {
    setIsLoading(true)
    // Fetch product details based on the ID and set it initially
    const check = product.find((x) => x._id === id);
    console.log(check);
    if (check) {
      setProductDetails(check);
      setSelectedItem({ ...check, quantity: 1 }); // Assuming a default quantity of 1
      setIsLoading(false)
    
    }
  }, []);

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

  const { cart } = useSelector((state) => state.allCart);
  // Calculate the total quantity and price
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div>
      {/* Render the selected item data here */}
      {!productDetails ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <div className="img-clickdata">
            <div className="row">
              <div className="col-md-4">
                <img src={`http://localhost:5000/${productDetails?.prodImg1}`} alt={productDetails.prodTitle} height={500} />
              </div>
              <div className="col-md-7 pt-5">
                <h1>{productDetails.prodTitle}</h1>
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
                      <img src={`http://localhost:5000/${productDetails?.prodImg1}`} alt={productDetails.prodTitle} />
                    </div>
                    <div className="ratings-modal-sub-2">
                      <p>8 sold in last 10 hours</p>
                    </div>
                  </div>
                </div>

                <div className="modal-cart-price">
                  <h3>Rs {productDetails.prodPrice}</h3>
                  <p>{productDetails?.prodDesc}</p>
                  <h6>Color: {productDetails?.prodColor}</h6>
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
          <Recommented />
        </div>
      )}
    </div>
  );
};

export default CartClickData;
