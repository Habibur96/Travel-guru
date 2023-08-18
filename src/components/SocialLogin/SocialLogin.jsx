import React, { useContext } from "react";
import gglLogo from "../../../images/icons/google.png";
import facebook from "../../../images/icons/fb.png";
import gitHub from "../../../images/gitHub.png";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { gglLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    gglLogin()
      .then((result) => {
        const gglLogedIn = result.user;

        navigate("/");
        console.log(gglLogedIn);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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

        <button className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>

        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto"
        >
          <img style={{ width: "45px" }} src={gitHub} alt="" />
          <span className="px-2"> GitHub Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
