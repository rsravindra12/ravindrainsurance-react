import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

//export default App;

// ✅ Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Ravindra Insurance</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

// ✅ Pages
function Home() {
  return <h1>Welcome to Ravindra Insurance</h1>;
}

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li>✔ Life Insurance</li>
        <li>✔ Health Insurance</li>
        <li>✔ Vehicle Insurance</li>
        <li>✔ Travel Insurance</li>
        <li>✔ Business Insurance</li>
        <li>✔ Home & Fire Insurance</li>
        <li>✔ Employees Group Insurance</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>📞 Call: +91-XXXXXXXXXX</p>
      <p>💬 Chat with us on WhatsApp below!</p>
    </div>
  );
}

// ✅ Floating WhatsApp Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919885857958" // <-- replace with your number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </a>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}
