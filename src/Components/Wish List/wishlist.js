// Wishlist.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFav,
  getCartTotal,
  selectWishlistItems,
  selectWishlistTotal,
} from "../../features/favCartSlice";

const Wishlist = () => {
  const wishlistItems = useSelector(selectWishlistItems);
  const wishlistTotal = useSelector(selectWishlistTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [wishlistItems, dispatch]);

  return (
    <div>
      <h2>Wishlist Items</h2>
      <h6>
        <h5 className="mb-0">Wishlist - {wishlistTotal} items</h5>
      </h6>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
