import React, { useContext, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Login = () => {
  const { login, resetPassword } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const emailRef = useRef();

  //console.log(user);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const from = location.state?.from?.pathname || "/";
    form.reset("");

    //Login
    login(email, password)
      .then((result) => {
        const loogedUser = result.user;
        navigate(from, { replace: true });
        console.log(loogedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    // const form = event.target;

    // form.reset("");
    console.log(email);
    if (!email) {
      alert("Please provide your email address to reset password");
    } else {
      toast("Email-sent");
      resetPassword(email)
        .then((result) => {
          const reset = result.user;
          console.log(reset);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <Container className="pt-5 mt-4">
      <Form onSubmit={handleLogin} className="mx-auto w-50 mt-5 pt-4">
        <h3 className="text-info">Please Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />

          <p className="pt-3" onClick={() => setShow(!show)}>
            {show ? <span>Hide Password</span> : <span>Show Password</span>}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkboxS" label="Check me out" />
        </Form.Group>
        <p>
          Don't have an account? <></>
          <Link className="text-success " to="/register">
            Sign UP
          </Link>
        </p>

        <p>
          Forget Password?
          <Button
            variant="info"
            className="btn btn-link text-secondary
             pe-auto text-decoration-none"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </p>
        <Button className="mb-5" variant="info" type="submit">
          Submit
        </Button>
      </Form>
      <SocialLogin></SocialLogin>
    </Container>
  );
};

export default Login;
