import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import BackgroundImage from "./images/bg-02.jpg";

import { useUserAuth } from "./Contexts/UserAuthContext";
import { signInWithGoogle, signInWithFacebook } from "../../firebase";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (password !== password1) return setError("Password Not Matched !");
      await signUp(email, password);
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
            <form
              className="login100-form validate-form"
              onSubmit={handleSubmit}
            >
              <span className="login100-form-title p-b-43">SignUP</span>
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
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="label-input100">Password</span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  onChange={(e) => setPassword1(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="label-input100">Repeat Password</span>
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
                <button className="login100-form-btn" type="Submit">
                  Login
                </button>
              </div>
              <div className="text-center p-t-46 p-b-20">
                <span className="txt2">or sign up using</span>
              </div>
              <div className="login100-form-social flex-c-m">
                <button
                  className="login100-form-social-item flex-c-m bg2 m-r-10"
                  onClick={handleSubmitFacebook}
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
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

export default Signup;
