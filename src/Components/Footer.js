import React from "react";
import "./footer.css";
import "../Pages/home.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box1">
        <div className="footer-boxes-heading">Popular Topics</div>
        <div className="footer-content">
          <ul>
            <li>Bollywood</li>
            <li>Hollywood</li>
            <li>Fitness</li>
            <li>Gaming</li>
            <li>Technology</li>
          </ul>
        </div>
      </div>

      <div className="footer-box2">
        <div className="footer-boxes-heading">Free Tools</div>
        <div className="footer-content">
          <ul>
            <li>Be a part of Company</li>
            <li>Write Us</li>
            <li>Suggestions </li>
            <li>New Request</li>
          </ul>
        </div>
      </div>

      <div className="footer-box3">
        <div className="footer-boxes-heading">Customer Support</div>
        <div className="footer-content">
          <ul>
            <li>Customer Service</li>
            <li>Join Local User Group</li>
            <li>Fitness</li>
          </ul>
        </div>
      </div>

      <div className="footer-box4">
        <div className="footer-boxes-heading">Company</div>
        <div className="footer-content">
          <ul>
            <li>Abouts Us</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
