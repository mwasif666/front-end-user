// AntDesignMultilevelDropdown.jsx

import React from "react";
import { Menu } from "antd";

import "./Dropdownmenu.css";
import { Avatar } from "@mui/material";
import image1 from "../Assests/Cards/image.png";
import image2 from "../Assests/Cards/img2-removebg-preview.png";
import image3 from "../Assests/Cards/img8-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
import imgall from "./Image/all.png";

const DropdownLink = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Menu
      mode="horizontal"
      className="menu-dopdown"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Menu.SubMenu
        key="NewDropdown"
        title={
          <span className="menu-toggle-dropdown">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 75 64"
            >
              <path d="M8.896 0h0.832c4.608 0.064 8.768 3.968 9.088 8.576 0.32 3.456-1.472 7.040-4.416 8.832-2.944 1.856-6.976 1.856-9.92 0-2.624-1.6-4.288-4.48-4.48-7.552v-0.832c0.128-4.736 4.224-8.832 8.896-9.024zM22.72 8.256c0.448-2.496 2.88-4.544 5.44-4.48 13.184-0.064 26.368 0 39.616 0 1.408 0 3.008-0.128 4.352 0.576 1.792 0.832 3.008 2.688 3.2 4.672v0.704c-0.128 2.88-2.752 5.376-5.632 5.312-13.184 0.064-26.368 0-39.552 0-1.536 0-3.2 0.128-4.608-0.64-2.112-1.152-3.328-3.776-2.816-6.144zM0 31.616c0.128-4.928 4.544-9.152 9.408-9.024 3.2-0.064 6.336 1.728 8 4.416 1.92 3.072 1.856 7.232-0.128 10.176-1.728 2.624-4.736 4.224-7.872 4.224-4.864 0.128-9.28-4.096-9.408-8.96v-0.832zM22.72 30.848c0.448-2.496 2.88-4.544 5.44-4.48 13.248-0.064 26.432 0 39.616 0 1.472 0 3.008-0.128 4.352 0.512 1.792 0.896 3.008 2.752 3.2 4.736v0.704c-0.128 2.88-2.752 5.376-5.632 5.312-13.184 0-26.368 0-39.552 0-1.536 0-3.2 0.128-4.608-0.64-2.112-1.152-3.328-3.776-2.816-6.144zM3.392 47.36c2.24-1.92 5.504-2.624 8.384-1.856 2.752 0.704 5.184 2.752 6.272 5.312 1.344 3.072 0.896 6.784-1.088 9.408-1.664 2.24-4.288 3.584-7.040 3.776h-0.768c-4.8-0.064-8.96-4.16-9.152-8.96v-0.832c0.128-2.624 1.344-5.184 3.392-6.848zM23.872 51.008c1.216-1.536 3.2-2.24 5.12-2.048 12.8 0 25.6 0 38.4 0 1.6 0 3.264-0.192 4.736 0.576 1.792 0.832 3.008 2.688 3.2 4.672v0.704c-0.192 2.88-2.752 5.376-5.632 5.312-13.696 0-27.392 0-41.152 0-1.664 0.064-3.328-0.576-4.48-1.792-1.856-1.984-1.984-5.376-0.192-7.424z"></path>
            </svg>
            Categories
            {/* {isHovered ? (
              // <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              // <FontAwesomeIcon icon={faChevronDown} />
            )} */}
          </span>
        }
        className="menu-subdropdown"
      >
        <Menu.Item key="2ndLevel1" className="border-dropdown">
          <NavLink to="/AllCategoryProducts" className="item-dropdown">
            <Avatar alt="Remy Sharp" src={imgall} />
            <p>All Category</p>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2ndLevel1" className="border-dropdown">
          <Link to="/Mobile" className="item-dropdown">
            <Avatar alt="Remy Sharp" src={image1} />
            <p>Mobiles</p>
          </Link>
        </Menu.Item>
        <Menu.Item key="2ndLevel2" className="border-dropdown">
          <Link to="/LaptopComp" className="item-dropdown">
            <Avatar alt="Remy Sharp" src={image2} />
            <p>Laptop</p>
          </Link>
        </Menu.Item>
        <Menu.Item key="AnotherDropdown" className="border-dropdown">
          <Link to="/Camera" className="item-dropdown">
            <Avatar alt="Remy Sharp" src={image3} />
            <p>Camera</p>
          </Link>
        </Menu.Item>
        <Menu.SubMenu key="3rdLevel" title="Accessories">
          <Menu.Item key="3rdLevel1">3rd level dropdown</Menu.Item>
          <Menu.Item key="3rdLevel2">3rd level dropdown</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
  );
};

export default DropdownLink;
