import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign.css";
import { Link } from "react-router-dom";
import axios from "axios";

import { setLoggedInStatus } from "../Features/Slice";
import { useDispatch, useSelector } from "react-redux";

let storedData = [];

const LoginPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.slice.value);
  const nav = useNavigate();

  const [resStatus, setResStatus] = useState("");

  const [userLoginData, setUserLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempObj = {
      name: userLoginData.name,
      email: userLoginData.email,
      password: userLoginData.password,
    };

    storedData.push(tempObj);

    await axios
      .post(
        "https://node-project-backend.onrender.com/login",
        // "http://localhost:8000/login",
        tempObj
      )
      .then((res) => {
        const status = res.data;
        
        setResStatus(status);

        localStorage.setItem("token", status.token);
        dispatch(setLoggedInStatus(status.isLoggedIn));

        if (status.msg === "Login succesfull") {
          dispatch(setLoggedInStatus(true));

          nav("/");
        }
      })
      .catch((err) => {
        console.log(err, "errrrrr");
      });

    setUserLoginData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <Link to="/" className="back-btn">
        Go Back
      </Link>

      <h3>LoginPage</h3>
      <hr />
      <form action="" method="post">
        <h3 className="text-sign-up">Login In</h3>

        <label>Email :</label>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          value={userLoginData.email}
          onChange={handleOnChange}
        />

        <label>Password :</label>
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={userLoginData.password}
          onChange={handleOnChange}
        />

        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Login
        </button>
        <div className="resStatus">{resStatus.msg}</div>
      </form>
    </div>
  );
};

export default LoginPage;
