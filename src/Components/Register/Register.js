import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../../features/authSlice";
import "../login/login.css";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  FloatingLabel,
} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const {authToken ,signUp} = useContext(AuthContext)
 


  const handleChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") setPassword(e.target.value);
  };
  
  const handleClick = async (e) => {
    e.preventDefault();
    const userData = { userName, email, password };
    if(userName && email && password){
      signUp(userData)
      setUserName("")
      setPassword("")
      setEmail("")
    }else{
      alert("Fill Form Properly")
    }
  };

  if(authToken){
    return <Navigate to="/" replace={true} />
   }
  return (
    <Container>
      <Row className="h-100">
        <Col md="6">
          <Form className="Login_form">
            <Card className="Card_login_form">
              <h2>Sign Up</h2>
              <FloatingLabel
                controlId="floatingInput"
                label="User Name"
                className="mb-3 login_input"
              >
                <Form.Control
                  type="text"
                  value={userName}
                  name="userName"
                  placeholder="UserName"
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3 login_input"
              >
                <Form.Control
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Email"
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
                  placeholder="Password"
                  onChange={handleChange}
                />
              </FloatingLabel>
              <div className="btn-login-form w-100 d-flex justify-content-center p-4">
                <button
                  className="btn"
                  onClick={(e) => handleClick(e)}
                >
                  Register
                </button>
              </div>

              <div className="sign-up-link pb-4 text-end">
                Do You have Account? <Link to="/login">Login</Link>
              </div>
             
            </Card>
          </Form>
        </Col>
        <Col md="1" className="line-form-main">
          <div className="lines-form">
            <p className="line-3"></p>
            <p>OR</p>
            <p className="line-4"></p>
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
    // <div>
    //   <label htmlFor="">Username</label>
    //   <input
    //     placeholder="wasi"
    //     type="text"
    //     value={userName}
    //     name="userName"
    //     onChange={handleChange}
    //   />
    //   <label htmlFor="">Email</label>
    //   <input
    //     placeholder="wasig@ial.com"
    //     type="email"
    //     value={email}
    //     name="email"
    //     onChange={handleChange}
    //   />
    //   <label htmlFor="">Password</label>
    //   <input
    //     type="password"
    //     value={password}
    //     name="password"
    //     onChange={handleChange}
    //   />
    //   <button onClick={() => handleClick(userName, email, password)}>
    //     Register
    //   </button>
    //   {authToken == null ? (
    //     <div>
    //       wasif don {authToken} and the message is {message}
    //     </div>
    //   ) : (
    //     <div>
    //       wasif not don {authToken} and the message is {message}
    //     </div>
    //   )}
    //   {errors ? (
    //     <div>error {errors[0].msg}</div>
    //   ) : (
    //     <div>not error , {errors}</div>
    //   )}
    // </div>
  );
};

export default Register;
