import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Featured from "./Components/FeaturedItems/Featured";
import Top20 from "./Components/TopItems/Top20";
import LaptopComp from "./Components/Navbar/Laptop&Comp";
import CartPage from "./Components/cartPage";
import Login from "./Components/login/login";
import Register from "./Components/Register/Register";
import MyAccount from "./Components/MyAccount/MyAccount";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Nav_Bar from "./Components/Navbar/navbar";
import CartClickData from "./Components/ClickData/cartClickData";
import Wishlist from "./Components/Wish List/wishlist";
import Mobile from "./Components/Navbar/Mobile";
import { AuthProvide } from "./context/AuthContext";
import Checkout from "./Components/Ceckout/Checkout";
import Camera from "./Components/Navbar/Camera";
import AllCategoryProducts from "./Components/Navbar/AllCategoryProducts";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvide>
          <Nav_Bar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Featured" element={<Featured />} />
            <Route path="Top20" element={<Top20 />} />
            <Route path="LaptopComp" element={<LaptopComp />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="cartClickData/:id" element={<CartClickData />} />
            <Route
              path="/Mobile/cartClickData/:id"
              element={<CartClickData />}
            />
            <Route path="MyAccount" element={<MyAccount />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="Mobile" element={<Mobile />} />
            <Route path="Camera" element={<Camera />} />
            <Route
              path="AllCategoryProducts"
              element={<AllCategoryProducts />}
            />
            <Route path="Checkout" element={<Checkout />} />
          </Routes>
        </AuthProvide>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
