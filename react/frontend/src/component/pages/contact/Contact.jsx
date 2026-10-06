import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            Have a question or need help? Feel free to contact us.
            We would love to hear from you.
          </p>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Sawantwadi, Maharashtra, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h3>✉️ Email</h3>
            <p>contact@example.com</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              required
            />

            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;