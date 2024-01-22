// AntDesignMultilevelDropdown.jsx

import React from "react";
import { Menu } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Dropdownmenu.css";
import { Avatar } from "@mui/material";
import image1 from "../Assests/Cards/image.png";
import image2 from "../Assests/Cards/img2-removebg-preview.png";
import image3 from "../Assests/Cards/img8-removebg-preview.png";
import { Link } from "react-router-dom";

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
          <Link to="/Mobile" className="item-dropdown">
            <Avatar alt="Remy Sharp" src={image1} />
            <p>Mobiles</p>
          </Link>
        </Menu.Item>
        <Menu.Item key="2ndLevel2" className="border-dropdown">
          <Link to="/Mobile" className="item-dropdown">
            <Avatar alt="Remy Sharp" src={image2} />
            <p>Laptop</p>
          </Link>
        </Menu.Item>
        <Menu.Item key="AnotherDropdown" className="border-dropdown">
          <Link to="/Mobile" className="item-dropdown">
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
