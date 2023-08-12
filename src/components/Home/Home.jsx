import React from "react";

import Ractangle1 from "../../../images/Rectangle.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Sajek from "../../../images/Sajek.png";
import Sreemongol from "../../../images/Sreemongol.png";
import Sundorbon from "../../../images/sundorbon.png";

const Home = () => {
  return (
    <div>
      <img
        className="d-block w-100 mb-5"
        style={{ height: 890 }}
        src={Ractangle1}
        alt=""
      />
      <Container>
        <Row>
          <Col lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Sreemongol} />
            </Card>
          </Col>

          <Col lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Sundorbon} />
            </Card>
          </Col>

          <Col lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Sajek} />
              <Card.Body>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
