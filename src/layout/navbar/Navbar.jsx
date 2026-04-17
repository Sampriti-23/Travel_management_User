import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Navbar = ({ openLogin, openRegister }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar">
      
      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>RoamSpark</span>
      </div>

      {/* LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>Packages</li>
        <li>Hotels</li>
        <li>Car</li>
      </ul>

      {/* RIGHT SIDE */}
      {token ? (
        <div className="user-section" ref={dropdownRef}>
          <div
            className="avatar"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          {showDropdown && (
            <div className="dropdown">
              <p>My Profile</p>
              <p>My Bookings</p>
              <p onClick={handleLogout} className="logout">
                Logout
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="nav-buttons">
          <button onClick={openLogin} className="login-btn">
            Login
          </button>
          <button onClick={openRegister} className="register-btn">
            Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;