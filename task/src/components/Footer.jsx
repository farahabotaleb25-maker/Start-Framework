import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-item">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
        </div>

        <div className="footer-item">
          <h3>AROUND THE WEB</h3>
          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-dribbble"></i>
          </div>
        </div>

        <div className="footer-item">
          <h3>ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, MIT licensed Bootstrap theme created by
            Route.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © Your Website 2024
      </div>
    </footer>
  );
}
