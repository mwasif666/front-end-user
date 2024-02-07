import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import "../Responsive.css";
import { Col, Row } from "react-bootstrap";
import Toggle from "../Toggler";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import img2 from "../WasifImg/wasif_ava.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../features/cartSlice";
import DropdownLink from "./Dropdown-menu";
import { AuthContext } from "../../context/AuthContext";
import ProductCard from "../ProductCard";

function Nav_Bar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { authToken } = useContext(AuthContext);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query.trim() !== "") {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };
  return (
    <>
      <section className="section">
        <Container>
          <div className="main">
            <div className="main1">
              <div className="box1">
                <i class="bi bi-telephone-fill"></i>
                <p id="phone">+92301 3769247</p>
                <p id="line">|</p>
              </div>
              <div className="box2">
                <i class="bi bi-envelope"></i>
                <p>mwasif66625426@gmail.com</p>
              </div>
            </div>
            <div className="main2">
              <div className="box3">
                <i class="bi bi-geo-alt"></i>
                <p id="location">Store Location</p>
              </div>
              <p id="line">|</p>
              {authToken === null ? (
                <div className="box4">
                  <i class="bi bi-person"></i>
                  <Link to="/login">Login or Register</Link>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
      <Navbar expand="lg" className="Navbar-home bord">
        <Container>
          <Link to="/" className="e-solution">
            <Navbar.Brand className="e-solution" href="#">
              <img
                src="https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/electron-logo-standart.png"
                alt=""
              />
            </Navbar.Brand>
          </Link>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
            <i className="bi bi-search"></i>
          </div>
          {showDropdown && (
            <div className="search-results-dropdown">
              <ProductCard searchQuery={searchQuery} />
            </div>
          )}
          <Row className="icons-navbar">
            <Col className="px-4">
              <Tooltip title="Wishlist" arrow className="icons-mui">
                <Link to="/wishlist">
                  <FavoriteBorderOutlinedIcon />
                </Link>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip title="Cart" arrow className="icons-mui">
                <Link to="/cart" className="icon-cart bi bi-cart4">
                  <span className="icon-cart-quantity">{totalQuantity}</span>
                </Link>
              </Tooltip>
            </Col>
            <Col>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar alt="Remy Sharp" src={img2} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/MyAccount" className="d-flex align-items-center">
                    <ListItemIcon>
                      <Avatar alt="Remy Sharp" src={img2} />
                    </ListItemIcon>
                    My Account
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="Navbar-home home2">
        <Container>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <Row>
              <Col md="7">
                <DropdownLink />
              </Col>
              <Col md="5">
                <ul class="navbar-nav m-auto mb-lg-0 linking">
                  <Link to="/" className="anchors">
                    Home
                  </Link>

                  <ul class="menu">
                    <li class="menu-item services">
                      <p className="anchors anchor-service">Collections</p>
                      <div class="mega-box">
                        <div class="content d-flex">
                          <div class="row-card">
                            <img
                              src="https://electrolyte5-store.myshopify.com/cdn/shop/files/speaker_6bdf9179-5d00-4a23-8d54-348daa057261.jpg?v=1647240299"
                              alt="Sample Image"
                            />
                          </div>
                          <div class="row-card">
                            <img
                              src="https://electrolyte5-store.myshopify.com/cdn/shop/files/camera_afdff232-c266-438c-b2a9-6119a5c59f08.jpg?v=1647240299"
                              alt="Sample Image"
                            />
                          </div>
                          <div class="row-card">
                            <img
                              src="https://electrolyte5-store.myshopify.com/cdn/shop/files/tab.jpg?v=1647087309"
                              alt="Sample Image"
                            />
                          </div>
                          <div class="row-card">
                            <img
                              src="https://electrolyte5-store.myshopify.com/cdn/shop/files/phone.jpg?v=1647087309"
                              alt="Sample Image"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Link to="/About" className="anchors">
                    About
                  </Link>
                  <Link to="/Contact" className="anchors anchor-contacts">
                    Contact
                  </Link>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </Navbar>
      <Toggle className="toggle_view" />
    </>
  );
}
export default Nav_Bar;
