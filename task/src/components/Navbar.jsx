import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", text: "HOME" },
    { to: "/about", text: "ABOUT" },
    { to: "/portfolio", text: "PORTFOLIO" },
    { to: "/contact", text: "CONTACT" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">START FRAMEWORK</Link>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? "active" : ""}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
