import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="top-row">
        {/* Hamburger Icon */}
        <div className="hamburger">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            <i className="fas fa-bars"></i>
          </label>
          <div className="menu-items">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>

        {/* Logo and Site Name */}
        <div className="logo">
          <img src="./img/logo.png" alt="Logo" />
          <span className="site-name">My Site</span>
        </div>
      </div>

      {/* Search Box, User Icon, and Cart Icon in second row */}
      <div className="bottom-row">
        <div className="search-box">
          <input type="text" placeholder="Search..." className="search-input" />
          <i className="fas fa-search search-icon"></i>
        </div>
        <div className="user-actions">
          <a href="#" className="icon">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <a href="#" className="icon">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
