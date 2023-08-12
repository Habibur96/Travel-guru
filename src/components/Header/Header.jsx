import React, { useContext } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then((result) => {
        const loggedOut = result.user;
        console.log("Lougout successful", loggedOut);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar expand="lg" className="bg-info" style={{ height: "70px" }}>
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <img style={{ height: "40px" }} src={logo} alt="" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 ">
            <Link className="text-decoration-none ps-4 " to="/">
              Home
            </Link>

            <Link className="text-decoration-none ps-4" to="/login">
              Login
            </Link>

            <Link className="text-decoration-none ps-4" to="/register">
              Signup
            </Link>
          </Nav>

          <Nav className="ps-2">
            {user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>}

            {user ? (
              <Button onClick={handleLogout} variant="success">
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="success">Login</Button>
              </Link>
            )}
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
