import React from "react";
import Product_Categories_3 from "./bestsells/Product_Categories_3";
import Offer from "./Offers/Offer";
import Carousel from "./HomeCarousel/Carousel";
import ProductCard2 from "./ProductCard2";
import VideoDrone from "./VideoDrone/VideoDrone";
import FeaturedTabs from "./FeaturedItems/Featured-Tabs";
import "./product.css";
import TopItem from "./TopItems/TopItem";
import DealCart from "./DealCart/DealCart";
import CustomCursor from "./Cursor";
import RecomendedTabs from "./Recoomended/RecomendedTab";

const Home = () => {
  return (
    <>
      <CustomCursor />
      <Carousel />
      <ProductCard2 />
      <Offer />
      <DealCart />
      <FeaturedTabs />
      <Product_Categories_3 />
      <TopItem />
      <VideoDrone />
      <RecomendedTabs />
    </>
  );
};

export default Home;
