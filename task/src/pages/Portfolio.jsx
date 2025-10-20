import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const images = [
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
  ];

  return (
    <div className="portfolio">
      <h1>PORTFOLIO COMPONENT</h1>
      <div className="star-line">
        <i className="fa-solid fa-star"></i>
      </div>
      <div className="images">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`portfolio-${index}`} />
        ))}
      </div>
    </div>
  );
}
