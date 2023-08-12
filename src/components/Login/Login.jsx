import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  //console.log(user);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset("");
    //Login
    login(email, password)
      .then((result) => {
        const loogedUser = result.user;
        console.log(loogedUser);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };
  return (
    <Container className="pt-5 mt-4">
      <Form onSubmit={handleLogin} className="mx-auto w-50 mt-5 pt-4">
        <h3 className="text-success">Please Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p>
          Don't have an account?
          <Link className="text-success" to="/register">
            Sign UP
          </Link>
        </p>

        <Button className="mb-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <SocialLogin></SocialLogin>
    </Container>
  );
};

export default Login;
