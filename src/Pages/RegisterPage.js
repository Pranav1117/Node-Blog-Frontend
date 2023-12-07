import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let storedData = [];

const RegisterPage = () => {
  const nav = useNavigate();
  const [isSignedUp, setIsIgnedUp] = useState(false);

  const [responseData, setResponseData] = useState({});

  const [userRegisterData, setUserRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setUserRegisterData({
      ...userRegisterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempObj = {
      name: userRegisterData.name,
      email: userRegisterData.email,
      password: userRegisterData.password,
    };

    storedData.push(tempObj);

    await axios
      .post(
        "https://node-project-backend.onrender.com/register",
        // "http://localhost:8000/register",
        tempObj
      )
      .then((res) => {
        const status = res.data;
        console.log(status);
        //<Home status={res.data} />;
        setResponseData(status);
        console.log(responseData);
        setIsIgnedUp(true);
        localStorage.setItem("token", status.token);
        nav("/user/status", { state: status });
      })
      .catch((err) => {
        console.log(err);
      });

    setUserRegisterData({
      name: "",
      email: "",
      password: "",
    });
  };

  // useEffect(() => {
  //   if (responseData !== "undefined") {
  //     console.log(responseData, "in use effect");
  //     localStorage.setItem("token", responseData.token);
  //   }
  // }, [responseData]);

  return (
    <div className="container">
      <Link to="/" className="back-btn">
        Go Back
      </Link>

      <h2>Register your Acount</h2>
      <hr />
      <form action="/" method="post">
        <h3 className="text-sign-up">Sign Up</h3>
        <label> Name :</label>
        <input
          type="text"
          name="name"
          value={userRegisterData.name}
          onChange={handleOnChange}
          placeholder="enter your name"
        />

        <label>Email :</label>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          value={userRegisterData.email}
          onChange={handleOnChange}
        />

        <label>Password :</label>
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={userRegisterData.password}
          onChange={handleOnChange}
        />

        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
