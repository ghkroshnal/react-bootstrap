import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/images/logos/logo.svg";
import "../../Assests/css/style.css";
import "../../Assests/css/fontawesome.css";
import "../../scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
      <div className="container">
        <a className="navbar-brand" href="https://smartcod.info">
          <img src={logo} alt="smart code logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Testimonials" className="nav-link">
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Faq" className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Portfolio" className="nav-link">
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                contact
              </Link>
            </li>
          </ul>
          <button type="button" className="rounded-pill btn-rounded">
            +1 728365413
            <span>
              <i className="fas fa-phone-alt"></i>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
