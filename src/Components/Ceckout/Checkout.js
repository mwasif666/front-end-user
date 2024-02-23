import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import {
  getCartTotal,
  setEmptyCart,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../features/cartSlice";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function CheckoutForm() {
  const { authToken, user } = useContext(AuthContext);
  const [cusName, setCusName] = useState(user?.userName);
  const [email, setEmail] = useState(user?.email);
  const [shippingAddress, setShippingAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "shippingAddress") setShippingAddress(e.target.value);
    if (e.target.name === "phoneNo") setPhoneNo(e.target.value);
    if (e.target.name === "country") setCountry(e.target.value);
    if (e.target.name === "zipCode") setZipCode(e.target.value);
    if (e.target.name === "city") setCity(e.target.value);
  };

  const navigate = useNavigate();
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
<<<<<<< HEAD

  const handlePlaceOrder = async (e) => {
    alert(cart);
=======
  
  const handlePlaceOrder = async (e) => {
    alert(cart)
>>>>>>> 6e6aa7c6c928d52cc9a32735c650c05a70eda3a8
    try {
      const response = await fetch(
        "http://localhost:5000/api/order/v1/placeorder",
        {
          method: "POST",
          headers: {
            "auth-token": authToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cusName,
            email,
            phoneNo,
            country,
            zipCode,
            city,
            shippingAddress,
            orderStatus: "Pending",
            totalPrice: promoCode ? numberTotal : totalPrice,
            totalQty: totalQuantity,
            orderDetails: cart.map((item) => ({
              productName: item.prodTitle,
              productPrice: item.prodPrice,
              productColor: item.prodColor,
              productCategory: item.prodCategory,
              productFeature: item.productFeatured,
              ProductQty: item.prodQty,
            })),
          }),
        }
      );
<<<<<<< HEAD

=======
 
>>>>>>> 6e6aa7c6c928d52cc9a32735c650c05a70eda3a8
      const data = await response.json();
      if (data.success) {
        alert("Place Order ");
        navigate("/");
        dispatch(setEmptyCart());
      } else {
        alert(data.message || "Failed to add food.");
      }
    } catch (error) {
      console.log(error);
      console.error("Error adding food:", error);
    }
  };
  const [promoCode, setPromoCode] = useState("");
  const [numberTotal, setNumberTotal] = useState(0);
  useEffect(() => {
    if (totalQuantity >= 5) {
      setNumberTotal(150);
    } else {
      setNumberTotal(350);
    }
  }, [totalQuantity]);
  useEffect(() => {
    if (totalQuantity >= 5) {
      setNumberTotal(150);
    } else {
      setNumberTotal(350);
    }
  }, [totalQuantity]);

  var allPrice = totalPrice + numberTotal;
  const handleApplyPromoCode = () => {
    if (promoCode === "355") {
      // Decrease total price by 355
      setNumberTotal(numberTotal - 355);
      // Clear promo code input field after applying
      setPromoCode("");
    }
  };
  if (!authToken) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="App">
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 mb-4">
              <div className="card shadow-0 border">
                <div className="p-4">
                  <h5 className="card-title mb-3">Checkout</h5>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <p className="mb-0">First name</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control placeholder-active"
                          value={cusName}
                          onChange={handleChange}
                          disabled
                        />
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: "9px" }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: "0px" }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="typePhone">Phone Number</label>
                        <div className="input-group">
                          <span className="input-group-text">+92</span>
                          <input
                            type="tel"
                            id="typePhone"
                            className="form-control"
                            placeholder="Enter your phone number"
                            name="phoneNo" // Connect to formik state
                            value={phoneNo}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-6 mb-3">
                      <p className="mb-0">Email</p>
                      <div className="form-outline">
                        <input
                          type="email"
                          id="typeEmail"
                          placeholder="example@gmail.com"
                          className="form-control placeholder-active"
                          value={email}
                          onChange={handleChange}
                        />
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: "9px" }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: "0px" }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Keep me up to date on news
                    </label>
                  </div>

                  <hr className="my-4" />

                  <h5 className="card-title mb-3">Shipping info</h5>

                  <div className="row mb-3">
                    <div className="col-lg-4 mb-3">
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Express delivery <br />
                            <small className="text-muted">
                              3-4 days via Fedex
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Post office <br />
                            <small className="text-muted">
                              20-30 days via post
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault3"
                          >
                            Self pick-up <br />
                            <small className="text-muted">
                              Come to our shop
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-8 mb-3">
                      <p className="mb-0">Address</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control placeholder-active"
                          name="shippingAddress"
                          value={shippingAddress}
                          onChange={handleChange}
                        />
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: "9px" }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: "0px" }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <p className="mb-0">Country</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="country"
                          className="form-control placeholder-active"
                          name="country" // Connect to formik state
                          value={country}
                          onChange={handleChange}
                        />
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: "9px" }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: "0px" }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-6 mb-3">
                      <p className="mb-0">City</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="city"
                          className="form-control placeholder-active"
                          name="city"
                          value={city}
                          onChange={handleChange}
                        />
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: "9px" }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: "0px" }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-6 mb-3">
                      <p className="mb-0">Zip</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="zipCode"
                          className="form-control placeholder-active"
                          name="zipCode" // Connect to formik state
                          value={zipCode}
                          onChange={handleChange}
                        />
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: "9px" }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: "0px" }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault1"
                    />
                    <label className="form-check-label" for="flexCheckDefault1">
                      Save this address
                    </label>
                  </div>

                  <div className="mb-3">
                    <p className="mb-0">Message to seller</p>
                    <div className="form-outline">
                      <textarea
                        className="form-control placeholder-active"
                        id="textAreaExample1"
                        rows="2"
                      ></textarea>
                      <div className="form-notch">
                        <div
                          className="form-notch-leading"
                          style={{ width: "9px" }}
                        ></div>
                        <div
                          className="form-notch-middle"
                          style={{ width: "0px" }}
                        ></div>
                        <div className="form-notch-trailing"></div>
                      </div>
                    </div>
                  </div>

                  <div className="float-end">
                    <button className="btn btn-light border me-2">
                      Cancel
                    </button>
                    <button
                      className="btn btn-success shadow-0 border"
                      onClick={handlePlaceOrder}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 d-flex justify-content-center justify-content-lg-end">
              <div className="ms-lg-4 mt-4 mt-lg-0">
                <h6 className="mb-3">Summary</h6>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">Rs: {totalPrice}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Quantity:</p>
                  <p className="mb-2">
                    {totalQuantity} x {totalPrice}
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping cost:</p>
                  <p className="mb-2">+ Rs {numberTotal}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">{allPrice}</p>
                </div>

                <div className="input-group mt-3 mb-4">
                  <input
                    type="text"
                    className="form-control border"
                    name=""
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button
                    className="btn btn-light text-primary border"
                    onClick={handleApplyPromoCode}
                  >
                    Apply
                  </button>
                </div>

                <hr />

                {cart?.map((data) => (
                  <div className="row">
                    <div className="col-lg-5 col-md-12">
                      <div className="remove-item-btn">
                        <button
                          type="button"
                          className="btn btn-sm me-1 mb-2 remove-item-btnn"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => dispatch(removeItem(data._id))}
                        >
                          <i className="fas fa-close"></i>
                        </button>
                      </div>

                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={data?.prodImg1}
                          alt={data.prodTitle}
                          className="w-100"
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 pt-5">
                      <h4>
                        <strong>{data.prodTitle}</strong>
                      </h4>
                      <p>{data.prodColor}</p>
                      <p className="text-start">
                        <strong>{data.prodPrice}</strong>
                      </p>
                    </div>

                    <div className="col-lg-4 col-md-6 pt-5">
                      <div
                        className="d-flex mb-4 increase-decrease"
                        style={{ maxWidth: "150px" }}
                      >
                        <button
                          className="btn px-3 me-2"
                          onClick={() =>
                            dispatch(decreaseItemQuantity(data._id))
                          }
                        >
                          <i className="fas fa-minus"></i>
                        </button>

                        <div className="form-outline">
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={data.quantity}
                            type="text"
                            className="form-control border-0"
                            onChange={() => null}
                          />
                        </div>

                        <button
                          className="btn px-3 ms-2"
                          onClick={() =>
                            dispatch(increaseItemQuantity(data._id))
                          }
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <hr className="my-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckoutForm;
