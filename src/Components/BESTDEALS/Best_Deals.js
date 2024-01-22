import * as React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "./Slider";


const BestDeals = () => {
  return (
    <>
      <main>
        <Container fluid className="con pb-5">
          <Row className="deals">
            <hr />
            <Col md="4"></Col>
            <Col className="p-1 Card-third " xs="12" md="4">
              <Row>
                <Col>
                  <Card className="Card-third1">
                    <Slider />
                    <div
                      className="card-body d-flex gap-2 px-5 pb-5"
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "50px",
                          fontWeight: "800",
                          color: "grey",
                        }}
                      >
                        RS
                      </h1>
                      <p
                        className="pt-1"
                        style={{
                          fontSize: "55px",
                          fontWeight: "800",
                          color: "#f6d600",
                        }}
                      >
                        650
                      </p>
                    </div>
                    <Card.Footer className="card-footer">
                      <small className="text-muted">
                        <p>
                          <i class="fa-regular fa-eye"></i> View
                        </p>
                        <p>
                          <i class="fa-regular fa-heart"></i> Wishlist
                        </p>
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="4"></Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default BestDeals;
