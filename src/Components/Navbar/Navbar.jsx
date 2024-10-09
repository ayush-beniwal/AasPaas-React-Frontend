import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Toast from '../Toast/Toast';
import styles from "./Navbar.module.css";
import AasPaas_Black_Logo from "../../assets/Navbar/AasPaas_Black_Logo.webp";
import Search from "../../assets/Navbar/search_logo.webp";
import SignIn from "../../assets/Navbar/sign_in.webp";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null); // State to control toast message
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleProtectedNavigation = (path) => {
    if (user.isLoggedIn) {
      navigate(path);
    } else {
      setToastMessage("Please log in to access this page");
    }
  };

  return (
    <>
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      <nav className={styles.nav} role="navigation">
        {/* Logo Section */}
        <div className={styles.logo}>
          <Link to="/">
            <img alt="AasPaas Logo" src={AasPaas_Black_Logo} />
          </Link>
        </div>

        {/* Search Section */}
        <div className={styles.search}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for anything"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <img alt="search-Btn" src={Search} />
            </button>
          </form>
        </div>

        {/* Menu Toggle Button */}
        <button 
          className={styles.menuToggle} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <div className={styles.categories}>
            <Link to="/">Home</Link>
            <button 
              className={styles.navButton} 
              onClick={() => handleProtectedNavigation("/orders")}
            >
              Orders
            </button>
            <button 
              className={styles.navButton} 
              onClick={() => handleProtectedNavigation("/sell")}
            >
              Sell
            </button>
          </div>

          {/* User Authentication Links */}
          {!user.isLoggedIn || !user.name || typeof user.name !== 'string' || !user.name.includes(" ") ? (
            <Link to="/login" className={styles.signin}>
              <img alt="Profile" src={SignIn} />
              Sign in
            </Link>
          ) : (
            <Link to="/profile" className={styles.signin}>
              <img 
                alt="Profile" 
                src={user.photo || SignIn} 
                className={styles.profileImg} 
                onError={(e) => { e.target.onerror = null; e.target.src = SignIn; }} 
              />
              {user.name.split(" ")[0]}
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
