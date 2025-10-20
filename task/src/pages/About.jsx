import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="content">
        <h2>ABOUT COMPONENT</h2>
        <div className="star-line">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="text">
          <p>
            Freelancer is a free Bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
          <p>
            You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
          </p>
        </div>
      </div>
    </div>
  );
}
