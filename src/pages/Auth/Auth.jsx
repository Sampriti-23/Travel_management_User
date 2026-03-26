import React, { useState } from "react";
import "./Auth.css";
import RegisterModal from "../Registration/Registration";
import Login from "../Login/Login";

const Auth = () => {

  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="auth">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Hodophile</div>
    {
      token?(
        <>
        <h1>user</h1>
        </>
      ):(
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
      <section className="hero">
        <div className="hero-overlay">
          <h1>Your Personalized Portal to The World</h1>

          <p>
            Discover amazing places, plan your trips and create unforgettable
            travel experiences.
          </p>

          <button className="trip-btn">Plan Your Trip</button>
        </div>
      </section>

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

    </div>
  );
};

export default Auth;