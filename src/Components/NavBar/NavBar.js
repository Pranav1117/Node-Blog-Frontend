import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "../Logo/logo.css";
function NavBar(props) {
  const status = props.status;
  console.log(status);
  return (
    <>
      <div className="navbar-container">
        <Link to="/" className="navbar">
          Home
        </Link>
        <Link to="/bollywood" className="navbar" state={status}>
          Bollywood
        </Link>
        <Link to="/hollywood" className="navbar">
          Hollywood
        </Link>
        <Link to="/fitness" className="navbar">
          Fitness
        </Link>
        <Link to="/technology" className="navbar">
          Technology
        </Link>
        <Link to="/gaming" className="navbar">
          Gaming
        </Link>
      </div>

      <div className="navbar-line"></div>
    </>
  );
}
export default NavBar;
