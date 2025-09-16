import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // optional, create this CSS file for styling

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Ravindra Insurance</div>

      {/* Hamburger for mobile */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/life-insurance" onClick={() => setIsOpen(false)}>Life Insurance</Link></li>
        <li><Link to="/health-insurance" onClick={() => setIsOpen(false)}>Health Insurance</Link></li>
        <li><Link to="/bike-insurance" onClick={() => setIsOpen(false)}>Bike Insurance</Link></li>
        <li><Link to="/car-insurance" onClick={() => setIsOpen(false)}>Car Insurance</Link></li>
        <li><Link to="/home-fire-insurance" onClick={() => setIsOpen(false)}>Home & Fire Insurance</Link></li>
        <li><Link to="/business-insurance" onClick={() => setIsOpen(false)}>Business Insurance</Link></li>
        <li><Link to="/travel-insurance" onClick={() => setIsOpen(false)}>Travel Insurance</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
