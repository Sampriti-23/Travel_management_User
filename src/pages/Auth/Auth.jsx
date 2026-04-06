import React, { useState, useEffect, useRef } from "react";
import "./Auth.css";
import RegisterModal from "../Registration/Registration";
import Login from "../Login/Login";
import Footer from "../../layout/footer/Footer";

const Auth = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));

  const dropdownRef = useRef();

  // close dropdown when clicking outside
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
    <div className="auth">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h2>Hodophile</h2>
        </div>

        <div className="pages">
          <ul className="nav-links">
            <li>About Us</li>
            <li>Packages</li>
            <li>Hotels</li>
            <li>Car</li>
          </ul>
        </div>

        {token ? (
          <div className="user-section" ref={dropdownRef}>
            
            {/* Avatar */}
            <div
              className="avatar"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            {/* Dropdown */}
            {showDropdown && (
              <div className="dropdown">
                <p onClick={() => alert("Go to Profile")}>My Profile</p>
                <p onClick={() => alert("Go to Bookings")}>My Bookings</p>
                <p onClick={handleLogout} className="logout">
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="nav-buttons">
            <button
              className="login-btn"
              onClick={() => setActiveModal("login")}
            >
              Login
            </button>

            <button
              className="register-btn"
              onClick={() => setActiveModal("register")}
            >
              Register
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="hero-container">
        <section className="hero">
          <div className="hero-overlay">
            <h1>Discover The Beauty Of INDIA</h1>

            <p>
              Discover amazing places, plan your trips and create unforgettable
              travel experiences.
            </p>

            <button className="trip-btn">Plan Your Trip</button>
          </div>
        </section>
      </div>

      {/* Search Section */}
      <section className="search-section">
        <h2>Where to?</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Places to go, hotels, restaurants..."
          />
          <button>Search</button>
        </div>
      </section>

      {/* Modal */}
      {activeModal === "register" && (
  <RegisterModal
    closeModal={() => setActiveModal(null)}
    openLogin={() => setActiveModal("login")}
  />
)}

{activeModal === "login" && (
  <Login
    closeModal={() => setActiveModal(null)}
    openRegisterModal={() => setActiveModal("register")}
  />
)}
      <Footer />
    </div>
  );
};

export default Auth;