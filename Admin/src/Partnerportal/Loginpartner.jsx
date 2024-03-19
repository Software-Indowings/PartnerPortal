import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import img from "../images/2.png";
import logo from "../images/partner.png";
import backgroundImg from "../images/3.png";

function LoginPartner() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3307/login/", credentials);
      if (res.status === 200) {
        const { username, password, category, commission } = res.data;
        // console.log("-->", res.data);
        dispatch(
          login({
            // Dispatch the login action with user information
            username: username,
            password: password,
            category: category,
            commission: commission,
          })
        );
        setLoginStatus("success");
        navigate("/update_profile");
      } else {
        setLoginStatus("failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoginStatus("failed");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.8,
      }}
    >
      <MDBContainer className="my-5" style={{ padding: "5px" }}>
        <MDBCard
          style={{
            border: "2px solid orange",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src={img}
                alt="login form"
                className="rounded-start"
                style={{ width: "100%", height: "100%" }}
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column align-items-center">
                <div className="d-flex flex-row mt-2 align-items-center">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-0"
                    style={{ color: "#ff6219" }}
                  />
                  <img src={logo} alt="Logo" style={{ width: "280px" }} />
                </div>
                <h1
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontFamily: "Arial, sans-serif",
                    color: "black",
                  }}
                >
                  Welcome Partner!
                </h1>
                {loginStatus === "success" && (
                  <p
                    style={{
                      color: "green",
                      fontSize: "14px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Login Successful!
                  </p>
                )}
                {loginStatus === "failed" && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Login Failed!
                  </p>
                )}
                <br />

                <form onSubmit={handleSubmit} style={{ width: "80%" }}>
                  <div style={{ marginBottom: "30px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "13px",
                        fontFamily: "Arial, sans-serif",
                        color: "black",
                      }}
                      htmlFor="username"
                    >
                      <b>Email</b>
                    </label>
                    <MDBInput
                      wrapperClass="mb-6"
                      id="username"
                      type="email"
                      size="lg"
                      name="username"
                      value={credentials.username}
                      onChange={handleInputChange}
                      required
                      style={{
                        fontSize: "13px",
                        fontFamily: "Arial, sans-serif",
                        color: "black",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "13px",
                        fontFamily: "Arial, sans-serif",
                        color: "black",
                      }}
                      htmlFor="password"
                    >
                     <b>Password</b> 
                    </label>
                    <MDBInput
                      wrapperClass="mb-4"
                      id="password"
                      type="password"
                      size="lg"
                      name="password"
                      value={credentials.password}
                      onChange={handleInputChange}
                      required
                      style={{
                        fontSize: "13px",
                        fontFamily: "Arial, sans-serif",
                        color: "black",
                      }}
                    />
                  </div>
                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    type="submit"
                    required
                    style={{
                      width: "200px",
                      minWidth: "200px",
                      height: "50px",
                    }}
                  >
                    Login
                  </MDBBtn>
                  <br/>
                  <div >
                   <Link to="/registration" className='btn btn-secondary me-2'>Registration Form</Link>
                  </div>
                  <br/>
                  <div >
                   <Link to="/register" className='btn btn-primary me-2'>Register</Link>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default LoginPartner;
