import React from "react";
import { Link } from "react-router-dom";
import { BiLogoReact } from "react-icons/bi";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <BiLogoReact />
        <span>React Router</span>
      </Link>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>

        <Link to="/about" className="navbar-link">
          About
        </Link>

        <Link to="/contact" className="navbar-link">
          Contact
        </Link>

        <Link to="/services" className="navbar-link">
          Services
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
