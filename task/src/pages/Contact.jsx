import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h2>CONTACT SECTION</h2>
        <div className="star-line">
          <i className="fa-solid fa-star"></i>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="User Name" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="User Age" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="User Email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="User Password" />
          </div>
          <button className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}
