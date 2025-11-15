import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>COMMUNITY</h4>
          <ul className="footer-links">
            <li><a href="/students">Students</a></li>
            <li><a href="/instructors">Instructors</a></li>
            <li><a href="/partners">Partners</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SUPPORT</h4>
          <ul className="footer-links">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/help">Help Center</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>LEGAL</h4>
          <ul className="footer-links">
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 LearnHub, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
