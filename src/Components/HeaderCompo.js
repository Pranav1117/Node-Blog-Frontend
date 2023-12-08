import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import "./Logo/logo.css";
import { Link } from "react-router-dom";
import "../Pages/sign.css";
import User from "./User/user";
import NewNav from "./NewNav/NewNav";
import { useSelector } from "react-redux";
import { setLoggedInStatus } from "../Features/Slice";
import axios from "axios";
import { useDispatch } from "react-redux";
import userIcon from "../Media/user (1).png";

const HeaderCompo = (props) => {
  const status = useSelector((state) => state.slice.loggedIn);
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);
  const [showUser, setShowUser] = useState(true);

  const [showUserIcon, setShowUserIcon] = useState(false);

  const handleLogOut = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const resp = await axios(
      "https://node-project-backend.onrender.com/logout"
      // "http://localhost:8000/logout"
    );

    // console.log(resp);
    localStorage.setItem("token", null);
    dispatch(setLoggedInStatus(resp.data.isLoggedIn));
  };

  const handleShowIcon = () => {
    setShowUserIcon(!showUserIcon);
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleClickUser = () => {
    setShowUser(!showUser);
  };

  return (
    <div>
      <Logo />

      {show && <NewNav />}

      <img
        className="menu-icon"
        onClick={handleClick}
        src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
        alt="logo"
      />

      <img
        src={require("../icon/user.jpg")}
        onClick={handleClickUser}
        className="user-logo"
      ></img>

      {/*{showUser?*/}
      <div>
        <div className="user-icon-wrapper">
          <img src={userIcon} alt="User" onClick={handleShowIcon} />
        </div>
        {showUserIcon ? (
          <>
            {status ? (
              <div className="login-signup-container">
                <Link
                  to="#"
                  className="register-btn logout"
                  onClick={handleLogOut}
                >
                  LogOut
                </Link>
              </div>
            ) : (
              <div className="login-signup-container">
                <Link className="login-btn" to={"/user/login"}>
                  Login
                </Link>
                <Link className="register-btn" to="/user/register">
                  Register
                </Link>
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </div>
      {/*''*/}
    </div>
  );
};

export default HeaderCompo;
