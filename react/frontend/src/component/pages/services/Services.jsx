import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <p className="services-small-title">OUR SERVICES</p>

          <h1>
            Solutions Designed
            <span> For You</span>
          </h1>

          <p>
            We provide modern and reliable digital solutions to help
            individuals and businesses achieve their goals.
          </p>
        </div>
      </section>


      {/* Services Section */}
      <section className="services-section">

        <div className="services-heading">
          <p className="section-title">WHAT WE DO</p>

          <h2>Our Professional Services</h2>

          <p>
            Explore our range of services designed to make your digital
            journey simple and effective.
          </p>
        </div>


        <div className="services-container">

          {/* Service 1 */}
          <div className="service-card">
            <div className="service-icon">💻</div>

            <h3>Web Development</h3>

            <p>
              We create modern, responsive and user-friendly websites
              using the latest web technologies.
            </p>

            <button>Learn More →</button>
          </div>


          {/* Service 2 */}
          <div className="service-card">
            <div className="service-icon">🎨</div>

            <h3>UI / UX Design</h3>

            <p>
              We design clean and attractive user interfaces that provide
              an excellent user experience.
            </p>

            <button>Learn More →</button>
          </div>


          {/* Service 3 */}
          <div className="service-card">
            <div className="service-icon">📱</div>

            <h3>Mobile Development</h3>

            <p>
              Build fast and reliable mobile applications that work
              smoothly across different devices.
            </p>

            <button>Learn More →</button>
          </div>


          {/* Service 4 */}
          <div className="service-card">
            <div className="service-icon">⚙️</div>

            <h3>Software Development</h3>

            <p>
              Custom software solutions designed according to your
              specific business and project requirements.
            </p>

            <button>Learn More →</button>
          </div>


          {/* Service 5 */}
          <div className="service-card">
            <div className="service-icon">☁️</div>

            <h3>Cloud Solutions</h3>

            <p>
              Secure and scalable cloud solutions that help you manage
              your applications and data efficiently.
            </p>

            <button>Learn More →</button>
          </div>


          {/* Service 6 */}
          <div className="service-card">
            <div className="service-icon">🔒</div>

            <h3>Security Solutions</h3>

            <p>
              Protect your applications and data with reliable and
              secure technology solutions.
            </p>

            <button>Learn More →</button>
          </div>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="why-section">

        <div className="why-content">
          <p className="section-title">WHY CHOOSE US</p>

          <h2>We Focus On Your Success</h2>

          <p>
            We combine technology, creativity and experience to provide
            solutions that are simple, effective and reliable.
          </p>
        </div>

        <div className="why-points">

          <div className="why-card">
            <span>✓</span>
            <div>
              <h3>Modern Technology</h3>
              <p>We use modern tools and technologies.</p>
            </div>
          </div>

          <div className="why-card">
            <span>✓</span>
            <div>
              <h3>Quality Work</h3>
              <p>We focus on quality and reliable results.</p>
            </div>
          </div>

          <div className="why-card">
            <span>✓</span>
            <div>
              <h3>Customer Support</h3>
              <p>We are always ready to help our customers.</p>
            </div>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="services-cta">

        <h2>Have a Project in Mind?</h2>

        <p>
          Let's work together and turn your idea into reality.
        </p>

        <button>Get Started →</button>

      </section>

    </div>
  );
};

export default Services;