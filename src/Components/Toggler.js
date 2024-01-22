import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Responsive.css";
import { Link } from "react-router-dom";
import { Row, Container } from "react-bootstrap";

function Toggle() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="fa-solid fa-bars toggle_view"
        onClick={handleShow}
      ></Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="offcans_menu">
          <Offcanvas.Title className="offcans_menu">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul class="navbar-nav m-auto mb-2 mb-lg-0 linking">
            <Link to="/" className="anchors">
              Home
            </Link>

            <Link to="/" className="anchors">
              Gift Card
            </Link>

            <Link to="/About" className="anchors">
              About
            </Link>
            <Link to="/Contact" className="anchors anchor-contacts">
              Contact
            </Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Toggle;
