import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAdjust } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onDarkModeToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      const offset = navbar.offsetTop + navbar.clientHeight;

      if (window.pageYOffset > offset) {
        navbar.classList.add("fixed-navbar");
      } else {
        navbar.classList.remove("fixed-navbar");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="https://cutm.ac.in/wp-content/uploads/Centurion_University_of_Technology_and_Management_Logo.webp"
              width={50}
              height={75}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </div>
        <button className="dark-mode-button" onClick={onDarkModeToggle}>
          <FontAwesomeIcon icon={faAdjust} />
        </button>
        <div
          className={`menu-icon ${mobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/teacher" onClick={closeMobileMenu}>
              Teacher
            </NavLink>
          </li>
          <li>
            <NavLink to="/course" onClick={closeMobileMenu}>
              Course
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
