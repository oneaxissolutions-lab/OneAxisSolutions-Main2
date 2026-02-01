// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import ContactModal from "./ContactModal";

import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? "hidden" : "unset";
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = "unset";
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
    setIsSidebarOpen(false);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  // scroll reset on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    setLastScrollY(0);
  }, [location.pathname]);

  // hide/show navbar on scroll
  useEffect(() => {
    const controlNavbar = () => {
      let currentScrollY = window.pageYOffset || window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <nav className={`navbar ${!isVisible ? "navbar-hidden" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="OneAxis Logo" className="navbar-logo-img" />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <div className="nav-dropdown">
            <a href="#services" className="nav-link">
              Services
              <svg
                className="dropdown-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div className="dropdown-menu">
              <Link to="/Webdevelopment" className="dropdown-item">
                Website Development
              </Link>
              <Link to="/softwares" className="dropdown-item">
                Mobile Development
              </Link>
              <Link to="/interior" className="dropdown-item">
                Interior Design
              </Link>
              <Link to="/automation" className="dropdown-item">
                Automation Services
              </Link>
            </div>
          </div>

          {/* HOUSE CLEANING PRODUCTS */}
          <Link to="/cleaning" className="nav-link">
            House Cleaning Products
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <button
          className="contact-btn"
          onClick={() =>
            window.open("https://wa.me/918954535455", "_blank")
          }
        >
          Contact Us
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isSidebarOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Link to="/" onClick={closeSidebar}>
              <img
                src={logoImg}
                alt="OneAxis Logo"
                className="sidebar-logo-img"
              />
            </Link>
          </div>
          <button
            className="sidebar-close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-link" onClick={closeSidebar}>
            Home
          </Link>

          {/* SERVICES DROPDOWN (MOBILE) */}
          <div className="sidebar-dropdown">
            <div className="sidebar-dropdown-label">Services</div>
            <div className="sidebar-dropdown-content">
              <Link
                to="/Webdevelopment"
                className="sidebar-sublink"
                onClick={closeSidebar}
              >
                Website Development
              </Link>
              <Link
                to="/softwares"
                className="sidebar-sublink"
                onClick={closeSidebar}
              >
                Mobile Development
              </Link>
              <Link
                to="/interior"
                className="sidebar-sublink"
                onClick={closeSidebar}
              >
                Interior Design
              </Link>
              <Link
                to="/automation"
                className="sidebar-sublink"
                onClick={closeSidebar}
              >
                Automation Services
              </Link>
            </div>
          </div>

          {/* HOUSE CLEANING PRODUCTS (MOBILE) */}
          <Link
            to="/cleaning"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            House Cleaning Products
          </Link>
        </nav>

        <div className="sidebar-footer">
          <button onClick={openContactModal} className="sidebar-contact-btn">
            Contact Us
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </nav>
  );
};

export default Navbar;
