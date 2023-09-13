import React from "react";
import "../global.css";
import { Link, useLocation } from "react-router-dom";

const AuthStatusPage = () => {
  const location = useLocation();

  const status = location.state.msg;

  console.log(status);

  const a = localStorage.getItem("token");

  // console.log(a);

  return (
    <div className="AuthBody">
      {" "}
      <h2 className="login-btn-auth-status">{`${status} please login`}</h2>
      <Link className="home-link" to="/">
        Home
      </Link>
      <Link className="login-link" to="/user/login">
        Login
      </Link>
    </div>
  );
};

export default AuthStatusPage;
