import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="navbar-brand">
        𝒹𝓇𝒾𝒷𝒷𝒷𝓁𝑒
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Inspiration
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Find Work
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Learn Design
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Go Pro
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Hire Designers
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search" className="search-input" />
        <a href="#" className="shopping-cart">
          <i className="fas fa-shopping-cart"></i>
        </a>
        <a href="#" className="user-avatar">
          <img src="asset/avatar.png" alt="User Avatar" />
        </a>
        <a href="#" class="upload-btn">
             Upload
            </a>

      </div>
    </nav>
  );
};

export default Navbar;