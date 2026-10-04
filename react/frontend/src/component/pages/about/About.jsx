import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-small-title">ABOUT US</p>

          <h1>
            We Build <span>Digital Experiences</span>
          </h1>

          <p>
            We create modern, simple and powerful digital solutions
            that help people and businesses grow in the digital world.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">

        <div className="about-image">
          <div className="image-box">
            <span>🚀</span>
            <h2>Innovation</h2>
            <p>Turning ideas into reality</p>
          </div>
        </div>

        <div className="about-content">
          <p className="section-title">WHO WE ARE</p>

          <h2>
            Creating solutions that make a difference
          </h2>

          <p>
            We are passionate about technology and innovation. Our goal
            is to create useful, reliable and easy-to-use digital
            experiences.
          </p>

          <p>
            We believe that great technology should be simple,
            beautiful and accessible to everyone. We continuously learn,
            improve and build better solutions.
          </p>

          <button className="about-btn">
            Learn More →
          </button>
        </div>

      </section>

      {/* Mission Section */}
      <section className="mission">

        <div className="mission-heading">
          <p className="section-title">OUR VALUES</p>

          <h2>What We Believe In</h2>

          <p>
            Our work is guided by these core principles.
          </p>
        </div>

        <div className="values-container">

          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>
              We always look for new and better ways to solve problems.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Quality</h3>
            <p>
              We focus on creating reliable and high-quality solutions.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Teamwork</h3>
            <p>
              We believe great results come from working together.
            </p>
          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="stats">

        <div className="stat">
          <h2>50+</h2>
          <p>Projects</p>
        </div>

        <div className="stat">
          <h2>20+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat">
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </section>

    </div>
  );
};

export default About;