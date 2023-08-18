import React from "react";

import Ractangle1 from "../../../images/Rectangle.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import Sajek from "../../../images/Sajek.png";
import Sreemongol from "../../../images/Sreemongol.png";
// import Sundorbon from "../../../images/sundorbon.png";

// import { useNavigate } from "react-router-dom";

const Home = ({ infoo }) => {
  console.log("Noyon");
  console.log(infoo);
  // const { name, description } = info
  // const navigate = useNavigate();
  // const navigatteToPlaces = (name) => {
  //   navigate(`/placeDetails/${name}`);
  // };
  return (
    <div>
      <img
        className="d-block w-100 mb-5"
        style={{ height: 890 }}
        src={Ractangle1}
        alt=""
      />
      {/* <Container>
        <Row>
          <Col lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Sreemongol} />
            </Card>
            <Card.Body>
              <Link to="/sreemongol">
                <Button variant="info">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Col>

          <Col lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Sundorbon} />
            </Card>
            <Card.Body>
              <Link to="/sundorbon">
                <Button variant="info">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Col>

          <Col lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Sajek} />
              <Card.Body>
                <Link to="/sajek">
                  <Button variant="info">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>  */}
      <Container>
        <Row>
          <Col lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Sreemongol} />
            </Card>
            <Card.Title className="fw-bold fs-3"></Card.Title>
            <Card.Text style={{ textAlign: "justify" }}></Card.Text>
            <Card.Body>
              {/* <Button onClick={() => navigatteToPlaces(name)} variant="info">
                Go somewhere
              </Button> */}
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
