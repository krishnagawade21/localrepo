import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <p className="small-title">WELCOME TO OUR WEBSITE</p>

          <h1>
            Build Something
            <span> Amazing</span>
          </h1>

          <p className="hero-text">
            Create beautiful, modern and powerful digital experiences
            with our simple and innovative solutions.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started →</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="circle"></div>

          <div className="card-content">
            <h2>Innovation</h2>
            <p>Simple. Modern. Powerful.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;