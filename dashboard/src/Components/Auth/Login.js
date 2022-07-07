import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";

import "./fonts/Linearicons-Free-v1.0.0/icon-font.min.css";

import "./vendor/animate/animate.css";

import "./vendor/css-hamburgers/hamburgers.min.css";

import "./vendor/animsition/css/animsition.min.css";

import "./vendor/select2/select2.min.css";
import "./vendor/daterangepicker/daterangepicker.css";

import "./css/util.css";
import "./css/main.css";

import BackgroundImage from "./images/bg-02.jpg";
import { useUserAuth } from "./Contexts/UserAuthContext";
import { signInWithGoogle, signInWithFacebook } from "../../firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/Dashboard");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (localStorage.getItem("name")) {
      navigate("/Dashboard");
      console.log("Logged in with Google");
    } else
      try {
        await logIn(email, password);
        navigate("/Dashboard");
      } catch (err) {
        setError(err.message);
      }
  };

  const handleSubmitGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/Dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmitFacebook = async (e) => {
    e.preventDefault();
    try {
      await signInWithFacebook();
      navigate("/Dashboard");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-43">
                Login to continue
              </span>
              {error !== "" ? (
                <div className="alert alert-danger">{error}</div>
              ) : null}
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="label-input100">Email</span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="label-input100">Password</span>
              </div>
              <div className="flex-sb-m w-full p-t-3 p-b-32">
                <div className="contact100-form-checkbox">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link to="/" className="txt1">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="container-login100-form-btn">
                <button
                  className="login100-form-btn"
                  type="Submit"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
              <div className="text-center p-t-20 p-b-20  ">
                <span className="txt2 font-weight-bold">
                  <Link to="/Signup" className="fs-25">
                    Sign Up
                  </Link>
                </span>
              </div>
              <div className="text-center p-b-20">
                <span className="txt2">or Login using</span>
              </div>
              <div className="login100-form-social flex-c-m">
                <button
                  className="login100-form-social-item flex-c-m bg1 m-r-10"
                  onClick={handleSubmitFacebook}
                >
                  <i className="fa fa-facebook-f" aria-hidden="true" />
                </button>
                <button
                  className="login100-form-social-item flex-c-m bg2 m-l-10"
                  onClick={handleSubmitGoogle}
                >
                  <i className="fa fa-google" aria-hidden="true" />
                </button>
              </div>
            </form>
            <div
              className="login100-more"
              style={{
                backgroundImage: `url(${BackgroundImage})`,
                filter: true,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
