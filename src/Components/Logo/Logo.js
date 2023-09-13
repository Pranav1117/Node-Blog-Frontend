import React from "react";
import "../Logo/logo.css";
import "../../icon/Menu_icon_icon-icons.com_71858.png";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="logo-container">
        <div className="the" onClick={handleClick}>
          The
        </div>
        <div className="siren" onClick={handleClick}>
          Siren
        </div>
      </div>
      <hr className="below-logo-hr" />
    </>
  );
};

export default Logo;
