import React from "react";
import gglLogo from "../../../images/icons/google.png";
import { Container } from "react-bootstrap";
const SocialLogin = () => {
  return (
    <div className="w-50 mx-auto">
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-primary w-50"></div>
        <p className="mt-3 px-3">Or</p>
        <div style={{ height: "2px" }} className="bg-primary w-50"></div>
      </div>

      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-3"
        >
          <img style={{ width: "30px" }} src={gglLogo} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
