import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/authSlice";
import "./login.css";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  FloatingLabel,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(AuthContext)
  // const dispatch = useDispatch();
  // const selector = useSelector((state) => state.auth.authToken);
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    if( email && password){
      login(userData)
      setPassword("")
      setEmail("")
    }
  };
  return (
    <>
      <Container>
        <Row className="h-100">
          <Col md="6">
            <Form className="Login_form">
              <Card className="Card_login_form">
                <h2>Login</h2>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3 login_input"
                >
                  <Form.Control
                    type="email"
                    value={email}
                    name="email"
                    placeholder="name@example.com"
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-3 login_input"
                >
                  <Form.Control
                    type="password"
                    value={password}
                    name="password"
                    placeholder="name@example.com"
                    onChange={handleChange}
                  />
                </FloatingLabel>
                {/* <label htmlFor="">Email</label>
                <input
                  placeholder="wasi@gmil.com"
                  type="email"
                  value={email}
                  name="email"
                /> */}
                {/* <label htmlFor="">Password</label>
                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                /> */}
                <div className="btn-login-form w-100 d-flex justify-content-center p-4">
                  <button className="btn" onClick={handleClick}>
                    Submit
                  </button>
                </div>

                <div className="sign-up-link pb-4 text-end">
                  Do not have any Account? <Link to="/register">Sign Up</Link>
                </div>

               
              </Card>
            </Form>
          </Col>
          <Col md="1" className="line-form-main">
            <div className="lines-form">
              <p className="line-1"></p>
              <p>OR</p>
              <p className="line-2"></p>
            </div>
          </Col>
          <Col md="5" className="login-btns-social">
            <div className="login-btns-social-2">
              <div className="btn-login-twitter">
                <button className="btn">Twitter</button>
              </div>
              <div className="btn-login-facebook">
                <button className="btn">Facebook</button>
              </div>
              <div className="btn-login-google">
                <p className="text-center">or</p>
                <button className="btn">Google</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
