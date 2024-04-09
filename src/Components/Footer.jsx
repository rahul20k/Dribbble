import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4 className="pink">𝒹𝓇𝒾𝒷𝒷𝒷𝓁𝑒</h4>
          <p>Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-column">
          <h4>For designers</h4>
          <ul>
            <li>Go Pro!</li>
            <li>Explore design work</li>
            <li>Design blog</li>
            <li>Overtime podcast</li>
            <li>Playoffs</li>
            <li>Weekly Warm-Up</li>
            <li>Refer a Friend</li>
            <li>Code of conduct</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hire designers</h4>
          <ul>
            <li>Post a job opening</li>
            <li>Post a freelance project</li>
            <li>Search for designers</li>
            <p><strong>Brands</strong></p>
            <li>Advertise with us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Media kit</li>
            <li>API</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Directories</h4>
          <ul>
            <li>Design jobs</li>
            <li>Designers for hire</li>
            <li>Freelance designers for hire</li>
            <li>Tags</li>
            <li>Places</li>
            <p><strong>Design assets</strong></p>
            <li>Dribbble Marketplace</li>
            <li>Creative Market</li>
            <li>Fontspring</li>
            <li>Font Squirrel</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Design Resources</h4>
          <ul>
            <li>Freelancing</li>
            <li>Design Hiring</li>
            <li>Design Portfolio</li>
            <li>Design Education</li>
            <li>Creative Process</li>
            <li>Design Industry Trends</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Dribbble. All rights reserved.</p>
        <p>20,501,853 shots dribbbled</p>
      </div>
    </footer>
  );
};

export default Footer;