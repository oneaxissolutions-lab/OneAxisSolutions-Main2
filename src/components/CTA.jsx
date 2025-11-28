import React from 'react';
import '../css/CTA.css';
import { FaRocket, FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <div className="cta-content">
                    {/* Icon */}
                    <div className="cta-icon">
                        <FaRocket />
                    </div>

                    {/* Main Content */}
                    <h2 className="cta-title">
                        Ready to <span className="gradient-text">Transform</span> Your Vision?
                    </h2>
                    <p className="cta-subtitle">
                        Let's bring your ideas to life with cutting-edge technology and innovative solutions. 
                        Our team is ready to help you achieve your business goals.
                    </p>

                    {/* Features */}
                    <div className="cta-features">
                        <div className="cta-feature">
                            <span className="feature-check">✓</span>
                            <span>Free Consultation</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-check">✓</span>
                            <span>Expert Team</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-check">✓</span>
                            <span>24/7 Support</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-check">✓</span>
                            <span>Fast Delivery</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="cta-buttons">
                        <button className="cta-btn primary-btn">
                            Get Started Now
                            <FaArrowRight />
                        </button>
                        <button className="cta-btn secondary-btn">
                            <FaPhone />
                            Schedule a Call
                        </button>
                    </div>

                    {/* Contact Info */}
                    <div className="cta-contact">
                        <a href="mailto:info@oneaxis.com" className="contact-link">
                            <FaEnvelope />
                            info@oneaxis.com
                        </a>
                        <span className="contact-divider">|</span>
                        <a href="tel:+918954535455" className="contact-link">
                            <FaPhone />
                            +91 89545 35455
                        </a>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="cta-shape cta-shape-1"></div>
                <div className="cta-shape cta-shape-2"></div>
                <div className="cta-shape cta-shape-3"></div>
            </div>
        </section>
    );
};

export default CTA;
