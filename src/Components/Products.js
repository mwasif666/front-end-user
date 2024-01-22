import React from "react";
import "./product.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Navbar className="P_link py-5 d-flex justify-content-center">
        <Nav className="linking2">
          <Link to="/" className="anchors2 active">
            Featured
          </Link>
          <Link to="/OnSale" className="anchors2">
            On Sale
          </Link>
          <Link to="/TopRated" className="anchors2">
            Top Rated
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Products;
