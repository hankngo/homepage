import React from 'react';
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <span>Official government website</span>
        <div className="icons">
          <i className="fas fa-question-circle"></i>
          <i className="fas fa-credit-card"></i>
          <i className="fas fa-exclamation-triangle"></i>
          <i className="fas fa-globe-americas"></i>
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="logo">
          <a href="/" className="logo-link">
            <img src="https://storage.googleapis.com/proudcity/williamstonmi/uploads/2023/09/City_Logo-149x128.png" alt="Williamston, MI Logo" />
            <span className="logo-text">Williamston, MI</span>
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#government">Government</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#businesses">Businesses</a></li>
          <li><a href="#events">Events/Meetings</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
