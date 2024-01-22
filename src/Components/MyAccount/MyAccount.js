import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img2 from "../WasifImg/wasif_ava.jpg";
import "./MyAccount.css";
import "../Recoomended/Recommented.css";
import Recommented from "../Recoomended/Recommented";
const MyAccount = () => {
  return (
    <>
      <Container fluid className="MyAccount Recom">
        <h2 className="recom_heading">
          <span className="span-recom"> My Account</span>
        </h2>
        <Container className="py-5">
          <Row>
            <Col md="4">
              <div className="img-account">
                <img src={img2} alt="" />
              </div>
            </Col>
            <Col md="6">
              <Row>
                <Col md="2">
                  <p>Name:</p>
                </Col>
                <Col md="10">
                  <h5>Muhammad Wasif</h5>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <p>Email:</p>
                </Col>
                <Col md="10">
                  <h5>mwasif66625426@gmail.com</h5>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <p>Phone:</p>
                </Col>
                <Col md="10">
                  <h5>03461120978</h5>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <p>Country:</p>
                </Col>
                <Col md="10">
                  <h5>Pakistan</h5>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <p>City:</p>
                </Col>
                <Col md="10">
                  <h5>Karachi</h5>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <p>Zip Code:</p>
                </Col>
                <Col md="10">
                  <h5>76500</h5>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <p>Address:</p>
                </Col>
                <Col md="10">
                  <h5>Shahr-e-Faisal Karachi East, Pakistan</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Recommented />
    </>
  );
};

export default MyAccount;
