import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './components/HomePage';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import RegisterPage from './components/RegisterPage';
import LeaderboardPage from './components/LeaderboardPage';
import ProfilePage from './components/ProfilePage'; // Import the ProfilePage component
import './App.css';

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <div className="app-container">
          <div className="stars-container">
            <span className="star star-1"></span>
            <span className="star star-2"></span>
            <span className="star star-3"></span>
            <span className="star star-4"></span>
            <span className="star star-5"></span>
            <span className="star star-6"></span>
            <span className="star star-7"></span>
            <span className="star star-8"></span>
          </div>
          <div className="content-wrapper">
            <Routes>
              {/* Route for the initial Home Page */}
              <Route path="/" element={<HomePage />} />
              
              {/* Route for the Main Content (subject cards) page */}
              <Route path="/home" element={<MainContent />} />
              
              {/* Route for the Registration/Login page */}
              <Route path="/register" element={<RegisterPage />} />
              
              {/* Route for the Leaderboard page */}
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              
              {/* Route for the Profile page */}
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
          <Navbar />
        </div>
      </LanguageProvider>
    </Router>
  );
};

export default App;