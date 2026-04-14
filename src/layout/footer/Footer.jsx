import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* LEFT */}
      <div className="footer-left">
        <h3>Hi Tourists!</h3>
        <p className="font">+91 8767926745</p>
        <p className="font">RoamSpark - 2026</p>

        <div className="social-icons">
          <span>🌐</span>
          <span>🐦</span>
          <span>▶️</span>
          <span>💼</span>
        </div>
      </div>

      {/* KOLKATA */}
      <div className="footer-section">
        <h4>KOLKATA OFFICE</h4>
        <p className="font">LG FLOOR</p>
        <p className="font">4-14 TABERNACLE STREET</p>
        <p className="font">KOLKATA</p>
        <p className="font">700012</p>
        <p className="font">INDIA</p>
        <p className="font">+91 33 2222 3333</p>
      </div>

      {/* DELHI */}
      <div className="footer-section">
        <h4>DELHI  OFFICE</h4>
        <p className="font">15 MADISON SQUARE WEST</p>
        <p className="font">12TH FLOOR</p>
        <p className="font">DELHI</p>
        <p className="font">110001</p>
        <p className="font">INDIA</p>
        <p className="font">+91 11 3333 3333</p>
      </div>

      {/* INFO */}
      <div className="footer-section">
        <h4> INFORMATION</h4>
        <p className="font">HI TOURS GROUP</p>
        <p className="font">TRAVEL SAFETY</p>
        <p className="font">TEAM</p>
        <p className="font">CAREERS</p>
        <p className="font">SUSTAINABILITY</p>
        <p className="font">PRIVACY POLICY</p>
      </div>

    </footer>
  );
};

export default Footer;