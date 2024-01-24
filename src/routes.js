import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Featured from "./Components/FeaturedItems/Featured";
import OnSale from "./Components/FeaturedItems/On_Sale";
import Top20 from "./Components/TopItems/Top20";
import Mobile_Tab from "./Components/TopItems/Mobile&Tab";
import Laptop_Comp from "./Components/TopItems/Laptop&Comp";
import Videocamera from "./Components/TopItems/Videocamera";
import CartPage from "./Components/cartPage";
import Login from "./Components/login/login";
import Register from "./Components/Register/Register";
import MyAccount from "./Components/MyAccount/MyAccount";
import TOPrate from "./Components/FeaturedItems/TOPrate";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Nav_Bar from "./Components/Navbar/navbar";
import CartClickData from "./Components/ClickData/cartClickData";
import Wishlist from "./Components/Wish List/wishlist";
import Mobile from "./Components/TopItems/Mobile";
import { AuthProvide } from "./context/AuthContext";

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
          <Route path="OnSale" element={<OnSale />} />
          <Route path="TOPrate" element={<TOPrate />} />
          <Route path="Top20" element={<Top20 />} />
          <Route path="Mobile_Tab" element={<Mobile_Tab />} />
          <Route path="Laptop_Comp" element={<Laptop_Comp />} />
          <Route path="Videocamera" element={<Videocamera />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cartClickData/:id" element={<CartClickData />} />
          <Route path="MyAccount" element={<MyAccount />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="Mobile" element={<Mobile />} />
        </Routes>
        </AuthProvide>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
