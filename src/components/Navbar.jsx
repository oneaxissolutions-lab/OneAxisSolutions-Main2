import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import ContactModal from './ContactModal';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        // Prevent body scroll when sidebar is open
        if (!isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        document.body.style.overflow = 'unset';
    };

    const openContactModal = () => {
        setIsContactModalOpen(true);
        setIsSidebarOpen(false);
    };

    const closeContactModal = () => {
        setIsContactModalOpen(false);
    };

    // Reset scroll position on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        const homeContainer = document.querySelector('.home-container');
        const softwaresContainer = document.querySelector('.softwares-container');
        const interiorPage = document.querySelector('.interior-design-page');
        if (homeContainer) {
            homeContainer.scrollTo(0, 0);
        }
        if (softwaresContainer) {
            softwaresContainer.scrollTo(0, 0);
        }
        if (interiorPage) {
            interiorPage.scrollTo(0, 0);
        }
        setIsVisible(true);
        setLastScrollY(0);
    }, [location.pathname]);

    // Universal scroll implementation that works on all pages
    useEffect(() => {
        const controlNavbar = () => {
            // Try to get scroll from window first, then try home-container, softwares-container, or interior-design-page
            let currentScrollY = window.pageYOffset || window.scrollY;
            
            // If window scroll is 0, check for custom scroll containers
            if (currentScrollY === 0) {
                const homeContainer = document.querySelector('.home-container');
                const softwaresContainer = document.querySelector('.softwares-container');
                const interiorPage = document.querySelector('.interior-design-page');
                
                if (homeContainer) {
                    currentScrollY = homeContainer.scrollTop;
                } else if (softwaresContainer) {
                    currentScrollY = softwaresContainer.scrollTop;
                } else if (interiorPage) {
                    currentScrollY = interiorPage.scrollTop;
                }
            }
            
            // Always show navbar at the very top
            if (currentScrollY < 10) {
                setIsVisible(true);
            }
            // Hide when scrolling down past 100px
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }
            // Show when scrolling up
            else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        // Small delay to ensure DOM is ready after navigation
        const timer = setTimeout(() => {
            // Add listeners to both window and container elements
            window.addEventListener('scroll', controlNavbar, { passive: true });
            
            const homeContainer = document.querySelector('.home-container');
            const softwaresContainer = document.querySelector('.softwares-container');
            const interiorPage = document.querySelector('.interior-design-page');
            
            if (homeContainer) {
                homeContainer.addEventListener('scroll', controlNavbar, { passive: true });
            }
            if (softwaresContainer) {
                softwaresContainer.addEventListener('scroll', controlNavbar, { passive: true });
            }
            if (interiorPage) {
                interiorPage.addEventListener('scroll', controlNavbar, { passive: true });
            }
        }, 100);
        
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', controlNavbar);
            const homeContainer = document.querySelector('.home-container');
            const softwaresContainer = document.querySelector('.softwares-container');
            const interiorPage = document.querySelector('.interior-design-page');
            
            if (homeContainer) {
                homeContainer.removeEventListener('scroll', controlNavbar);
            }
            if (softwaresContainer) {
                softwaresContainer.removeEventListener('scroll', controlNavbar);
            }
            if (interiorPage) {
                interiorPage.removeEventListener('scroll', controlNavbar);
            }
        };
    }, [lastScrollY, location.pathname]);

    // Cleanup body overflow on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <nav className={`navbar ${!isVisible ? 'navbar-hidden' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <div className="logo-text">
                        <span className="logo-one">One</span>
                        <span className="logo-axis">Axis</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="navbar-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    
                    <div className="nav-dropdown">
                        <a href="#services" className="nav-link">
                            Services
                            <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <div className="dropdown-menu">
                            <Link to="/softwares" className="dropdown-item">Web & SaaS Development</Link>
                            <Link to="/softwares" className="dropdown-item">Mobile Development</Link>
                            <Link to="/softwares" className="dropdown-item">AI Solutions</Link>
                            <Link to="/interior" className="dropdown-item">Interior Design</Link>
                        </div>
                    </div>
                </div>

                {/* Desktop Contact Button */}
                <button onClick={openContactModal} className="contact-btn">Contact Us</button>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-toggle" onClick={toggleSidebar} aria-label="Toggle menu">
                    <span className={`hamburger ${isSidebarOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <div className="sidebar-overlay" onClick={closeSidebar}></div>
            )}
            <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <div className="logo-text">
                            <span className="logo-one">One</span>
                            <span className="logo-axis">Axis</span>
                        </div>
                        <div className="logo-underline"></div>
                    </div>
                    <button className="sidebar-close" onClick={closeSidebar} aria-label="Close menu">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <nav className="sidebar-nav">
                    <Link to="/" className="sidebar-link" onClick={closeSidebar}>Home</Link>
                    
                    <div className="sidebar-dropdown">
                        <div className="sidebar-dropdown-label">Services</div>
                        <div className="sidebar-dropdown-content">
                            <Link to="/softwares" className="sidebar-sublink" onClick={closeSidebar}>Web & SaaS Development</Link>
                            <Link to="/softwares" className="sidebar-sublink" onClick={closeSidebar}>Mobile Development</Link>
                            <Link to="/softwares" className="sidebar-sublink" onClick={closeSidebar}>AI Solutions</Link>
                            <Link to="/interior" className="sidebar-sublink" onClick={closeSidebar}>Interior Design</Link>
                        </div>
                    </div>
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
