import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaTrophy, FaHome, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { translations } = useLanguage();

  return (
    <nav className="navbar-container">
      <Link to="/leaderboard" className="nav-item">
        <FaTrophy className="nav-icon" />
        <span className="nav-text">{translations.leaderboard}</span>
      </Link>
      
      <Link to="/" className="nav-item">
        <FaHome className="nav-icon" />
        <span className="nav-text">{translations.home}</span>
      </Link>
      
      <Link to="/profile" className="nav-item">
        <FaUser className="nav-icon" />
        <span className="nav-text">{translations.profile}</span>
      </Link>
    </nav>
  );
};

export default Navbar;