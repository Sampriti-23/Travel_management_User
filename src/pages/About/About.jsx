import React from "react";
import "./About.css";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";

const About = () => {
  return (
    <div className="container">
        <Navbar />
    <div className="about">
        
      {/* TOP HEADING */}
      <section className="about-header">
        <h1>Transforming How The World Travels</h1>
        <p>
          RoamSpark helps travelers explore the world effortlessly through
          personalized trip planning, smart deals, and reliable travel partners.
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="about-content">

        {/* LEFT TEXT */}
        <div className="about-left">
          <h2>Creating Personalized Trips For Every Traveler</h2>

          <p>
            We tailor every itinerary to match your style, interests, and budget
            — making every journey smooth, comfortable, and completely unforgettable.
          </p>

          <button className="about-btn">Show All</button>
        </div>

        {/* CENTER IMAGE */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="travel team"
          />
        </div>

        {/* RIGHT STATS */}
        <div className="about-right">

          <div className="stats">
            <h2>150K+</h2>
            <p>Happy Travelers</p>
          </div>

          <div className="stats">
            <h2>120+</h2>
            <p>Dream Destinations</p>
          </div>

          <div className="about-small-img">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="beach"
            />
          </div>

        </div>

      </section>
      </div>
      {/* ===== SIMPLE FEATURES SECTION ===== */}
<section className="features-section">

  {/* TOP 3 IMAGES */}
  <div className="features-grid">

    <div className="feature-card">
      <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" />
      <h3>COMFORT</h3>
    </div>

    <div className="feature-card">
      <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
      <h3>MEMORIES</h3>
    </div>

    <div className="feature-card">
      <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98" />
      <h3>HAPPINESS</h3>
    </div>

  </div>

  {/* ===== ICON SECTION ===== */}
  <div className="features-icons">

    <div className="icon-box">
      🛏️
      <p>Stay</p>
    </div>

    <div className="icon-box">
      🍽️
      <p>Food</p>
    </div>

    <div className="icon-box">
      ✈️
      <p>Travel</p>
    </div>

    <div className="icon-box">
      🏝️
      <p>Explore</p>
    </div>

    <div className="icon-box">
      🤝
      <p>Connections</p>
    </div>

    <div className="icon-box">
      🎒
      <p>Adventure</p>
    </div>

    <div className="icon-box">
      🏞️
      <p>Treks</p>
    </div>

    <div className="icon-box">
      🎉
      <p>Events</p>
    </div>

  </div>

</section>

{/* ===== WHAT WE CAN DO ===== */}
<section className="services-section">

  <h1>
    WHAT WE <span>CAN DO</span>
  </h1>

  <div className="service-box">
    <h2>TRAVEL PLANNING</h2>
    <p>
      Our platform helps you plan personalized trips with ease — from choosing
      destinations to creating complete travel itineraries tailored to your
      preferences and budget.
    </p>
  </div>

  <div className="service-box">
    <h2>SMART BOOKING</h2>
    <p>
      Discover and compare the best hotels, transport, and travel packages.
      We ensure seamless booking experiences with reliable partners and
      real-time availability.
    </p>
  </div>

  <div className="service-box">
    <h2>LIVE TRACKING & GUIDANCE</h2>
    <p>
      Stay updated with real-time travel insights, route suggestions, and
      location-based services — helping you navigate smoothly and explore
      confidently.
    </p>
  </div>

</section>
    <Footer />
    </div>
    
  );
};

export default About;