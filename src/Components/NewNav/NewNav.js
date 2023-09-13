import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./newnav.css";
const NewNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/bollywood">Bollywood</NavLink>
        </li>

        <li>
          <NavLink to="/hollywood">Hollywood</NavLink>
        </li>

        <li>
          <NavLink to="/technology">Technology</NavLink>
        </li>

        <li>
          <NavLink to="/fitness">Fitness</NavLink>
        </li>

        <li>
          <NavLink to="/gaming">Gaming</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NewNav;
