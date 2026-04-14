import React from "react";
import "./About.css";

const About = () => {
  return (
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
  );
};

export default About;