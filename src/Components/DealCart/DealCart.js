import React from "react";
import CountDown from "../FeaturedItems/countdown";

const DealCart = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="content-deal-cart">
                <h1>Weekly Deal</h1>
                <h4>RS 179,000.00</h4>
                <CountDown />
                <button className="btn btn1 w-25" type="submit">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="col">
              <div className="image-deal-cart">
                <img
                  src="https://html.themexplosion.com/goru/assets/images/home/1.jpg"
                  alt=""
                />
                <p className="d-flex align-items-center gap-2">
                  <h4>COUPON</h4> DEALS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealCart;
