import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './HomePage.css';

const HomePage = () => {
  const { language, setLanguage, translations } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="home-container">

      {/* Header with Custom Image + Subtitle */}
      <div className="home-header">
        {/* Logo image */}
        <img 
          src="/logo.png"   // public folder me rakho
          alt="App Logo"
          className="header-logo"
        />

        {/* Subtitle */}
        <p className="subtitle-text">{translations.subtitle}</p>

        {/* New image with glow + motion effect */}
        <img 
          src="/minilogo.png"   // is image ko public/feature.png me rakho
          alt="Feature"
          className="feature-image"
        />
      </div>

      {/* Language Section */}
      <div className="language-section">
        <h2 className="section-title">{translations.selectLanguage}</h2>
        <div className="dropdown-wrapper">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="dropdown-btn"
          >
            <span className="capitalize">
              {language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : 'Odia'}
            </span>
            <FaChevronDown
              className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`}
            />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button
                onClick={() => handleLanguageChange('hi')}
                className="dropdown-item"
              >
                Hindi
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className="dropdown-item"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange('or')}
                className="dropdown-item"
              >
                Odia
              </button>
            </div>
          )}
        </div>
        <Link to="/home" className="start-adventure-btn glowing-border">
          {translations.startAdventure}
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
