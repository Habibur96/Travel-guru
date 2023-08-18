import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { user, createUser, mailVarify } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);
  const [show, setShow] = useState(false);

  const handleAccepted = (event) => {
    setAccept(event.target.checked);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password);
    mailVarify();
    form.reset("");
    navigate("/");
    console.log(email, password);
  };
  return (
    <Container className="pt-4 mt-4">
      <Form onSubmit={handleSubmit} className="mx-auto w-50 mt-5 pt-4">
        <h3 className="text-success pb-3">Sign Up </h3>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
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
        </Form.Group>

        <p onClick={() => setShow(!show)}>
          {show ? <span>Hide password</span> : <span>Show Password</span>}
        </p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="check"
            label={
              <>
                Accepts{" "}
                <Link to="/terms" className="text-decoration-none">
                  Terms and conditions
                </Link>
              </>
            }
          />
        </Form.Group>
        <p>
          Already Have an Account? <></>
          <Link to="/login" className="text-success">
            Login
          </Link>
        </p>
        <Button variant="info" type="submit" disabled={!accept}>
          Submit
        </Button>
      </Form>
      <SocialLogin></SocialLogin>
    </Container>
  );
};

export default Register;
