import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";
import "./AllCategory/AllCategories.css";
import Recommented from "./Recoomended/Recommented";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const { authToken } = useContext(AuthContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="mb-4">
                <div className="py-3">
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </div>
                <div className="card-body">
                  {cart?.map((data) => (
                    <div className="row">
                      <div className="col-lg-3 col-md-12">
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

                      <div className="col-lg-5 col-md-6 pt-5">
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
            <div className="col-md-4 pt-2">
              <div className="card checkout-card p-4">
                <div className="py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="increase-decrese-2 ">
                    {authToken ? (
                      <Link to="/Checkout">
                        <button
                          type="button"
                          className="modal-cart-button btn text-white"
                        >
                          Go to checkout
                          <i className="bi bi-cart4"></i>
                        </button>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="modal-cart-button btn text-white"
                        disabled={true}
                      >
                        Go to checkout
                        <i className="bi bi-cart4"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Recommented />
    </div>
  );
};

export default CartPage;
