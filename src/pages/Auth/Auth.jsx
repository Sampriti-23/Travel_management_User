import React, { useState, useEffect, useRef } from "react";
import "./Auth.css";
import RegisterModal from "../Registration/Registration";
import Login from "../Login/Login";
import Footer from "../../layout/footer/Footer";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import Navbar from "../../layout/navbar/Navbar";


const Auth = () => {
  const [activeModal, setActiveModal] = useState(null);

  const [index, setIndex] = useState(0);

  const totalCards = 10;
  const visibleCards = 3;
  const maxIndex = totalCards - visibleCards;

  const nextSlide = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };


  return (
    <div className="auth">
      {/* Navbar */}
       <Navbar
        openLogin={() => setActiveModal("login")}
        openRegister={() => setActiveModal("register")}
      />

      {/* Hero Section - https://images.unsplash.com/photo-1617380613434-7495e9b45dfb  */}
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

        <div className="search-container">
          <span className="search-icon">🔍</span>
            <input
             type="text"
             placeholder="Places to go, hotels, restaurants..."
             />

         <button className="check-btn">Search</button>
        </div>
      </section>

        {/* Culture Section */}
<section className="culture-section">

  {/* LEFT IMAGE */}
  <div className="culture-image">
    <img
      src="https://images.unsplash.com/photo-1548013146-72479768bada"
      alt="Indian Culture"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="culture-content">
    <h2>Respect & Explore Indian Culture</h2>

    <p>
      India is a land of diverse cultures, traditions, and heritage.
      Every region has its own unique identity, from colorful festivals
      to historic monuments and spiritual practices.
    </p>

    <p>
      As travelers, respecting local customs, traditions, and people
      enhances your journey and creates meaningful experiences.
      Explore responsibly and embrace the beauty of Indian culture.
    </p>

    <a
  href="https://en.wikipedia.org/wiki/Culture_of_India"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="explore-btn">Explore More</button>
</a>
  </div>

</section>

        {/* DESTINATION CAROUSEL */}
<section className="carousel-section">

      <h2>Explore India</h2>

      <div className="carousel-container">

        {/* LEFT BUTTON */}
        <button className="nav-btn" onClick={prevSlide}>
          &#10094;
        </button>

        {/* CARDS WRAPPER */}
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * 33.33}%)`,
            }}
          >

            <div className="card">
              <img src="https://images.unsplash.com/photo-1548013146-72479768bada" />
              <p>Taj Mahal</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a" />
              <p>Jaipur</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" />
              <p>Himalayas</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2" />
              <p>Kerala</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" />
              <p>Goa</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e" />
              <p>Ladakh</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66" />
              <p>Kashmir</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" />
              <p>Manali</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d" />
              <p>Coorg</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
              <p>Varanasi</p>
            </div>

          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button className="nav-btn" onClick={nextSlide}>
          &#10095;
        </button>

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