import React, { useState } from "react";
import "./Auth.css";
import RegisterModal from "../Registration/Registration";
import Login from "../Login/Login";
import Footer from "../../layout/footer/Footer";

const Auth = () => {

  const [activeModal, setActiveModal] = useState(null);
  const token = sessionStorage.getItem("token");
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
    {
      token?(
        <>
        <div className="user-section">
            <span className="user-icon">👤</span>
            {/* <button onClick={() => dispatch(logout())}>Logout</button> */}
          </div>
        </>
      ):
      (
        <>
         <div className="nav-buttons">
          <button className="login-btn"
          onClick={() => setActiveModal('login')}
          >  
          Login</button>

          <button
            className="register-btn"
            onClick={() => setActiveModal('register')}
          >
            Register
          </button>
        </div>
        </>
      )
    }
       
      </nav>

      {/* Hero Section */}
      <div className="hero-container">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Discover The Beauty Of INDIA</h1>

          <p><t>
            Discover amazing places, plan your trips and create unforgettable
            travel experiences.
          </t></p>

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

      {/* Modal Call */}
      {activeModal === 'register' && (
        <RegisterModal closeModal={() => setActiveModal(null)} />
      )}
      {activeModal === 'login' && (
        <Login closeModal={() => setActiveModal(null)} />
      )}
      <Footer />
    </div>
  );
};

export default Auth;