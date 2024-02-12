import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem2,
  selectWishlistItems,
  // selectWishlistTotal,
  addToCart,
  decreaseItemQuantity2,
  increaseItemQuantity2,
  setFavProd,
} from "../../features/favCartSlice";
import Recommented from "../Recoomended/Recommented";
import { ToastContainer } from "react-toastify";

const Wishlist = () => {
  const wishlistItems = useSelector(selectWishlistItems);
  // const wishlistTotal = useSelector(selectWishlistTotal);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity2(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity2(itemId));
  };
  const handleAddToCartMain = (item) => {
    if (item) {
      dispatch(addToCart(item));
    }
  };
  useEffect(() => {
    dispatch(getCartTotal());
    dispatch(setFavProd());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <h2 className="text-center py-3">Wishlist Items</h2>
            <div
              className="col-md-10 card"
              style={{
                border: "none",
              }}
            >
              <h6>
                <h5 className="mb-0">
                  Wishlist - {wishlistItems?.length} items
                </h5>
              </h6>
              <div className="card-body">
                {!wishlistItems ? (
                  <div>No Item in whisList</div>
                ) : (
                  wishlistItems.map((item) => (
                    <div className="row" key={item._id}>
                      <div className="col-lg-3 col-md-12">
                        <div className="remove-item-btn">
                          <button
                            type="button"
                            className="btn btn-sm me-1 mb-2 remove-item-btnn"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => dispatch(removeItem2(item._id))}
                          >
                            <i className="fas fa-close"></i>
                          </button>
                        </div>
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={item?.prodImg1}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 pt-5">
                        <h4>
                          <strong>{item.prodTitle}</strong>
                        </h4>
                        <div className=" d-flex gap-2">
                          <p className="pt-1">Color: {item.prodColor}</p>
                        </div>
                        <p className="text-start">
                          <strong>{item.prodPrice}</strong>
                        </p>
                      </div>
                      <div className="col-lg-4 col-md-6 pt-5">
                        <div
                          className="d-flex mb-4 increase-decrease"
                          style={{ maxWidth: "150px" }}
                        >
                          <button
                            className="btn px-3 me-2"
                            onClick={() => handleDecreaseQuantity(item._id)}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <div className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={isNaN(item.quantity) ? 0 : item.quantity}
                              type="text"
                              className="form-control border-0"
                              onChange={() => null}
                            />
                          </div>
                          <button
                            className="btn px-3 ms-2"
                            onClick={() => handleIncreaseQuantity(item._id)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="increase-decrese-2 ">
                          <button
                            className="modal-cart-button btn"
                            onClick={() => handleAddToCartMain(item)}
                          >
                            <p>Add To Cart</p>
                            <i className="bi bi-cart4"></i>
                          </button>
                        </div>
                      </div>

                      <hr className="my-4" />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Recommented />
    </>
  );
};

export default Wishlist;
