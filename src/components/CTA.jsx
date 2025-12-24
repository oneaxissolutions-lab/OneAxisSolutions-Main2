import React, { useState } from 'react';
import '../css/CTA.css';
import { FaRocket, FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa';
import ContactModal from './ContactModal'; 
import ScheduleModal from './ScheduleModal'; 

const CTA = () => {
    
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);

    return (
        <section className="cta-section">
            
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />

            <div className="cta-container">
                <div className="cta-content">
                    <div className="cta-icon">
                        <FaRocket />
                    </div>

                    <h2 className="cta-title">
                        Ready to <span className="gradient-text">Transform</span> Your Vision?
                    </h2>
                    <p className="cta-subtitle">
                        Let's bring your ideas to life with cutting-edge technology and innovative solutions. 
                        Our team is ready to help you achieve your business goals.
                    </p>

                    <div className="cta-features">
                        <div className="cta-feature">
                            <span className="feature-check">✓</span><span>Free Consultation</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-check">✓</span><span>Expert Team</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-check">✓</span><span>24/7 Support</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-check">✓</span><span>Fast Delivery</span>
                        </div>
                    </div>

                    <div className="cta-buttons">
                
                        <button 
                            className="cta-btn primary-btn"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Get Started Now
                            <FaArrowRight />
                        </button>
                        
                        
                        <button 
                            className="cta-btn secondary-btn"
                            onClick={() => setIsScheduleOpen(true)}
                        >
                            <FaPhone />
                            Schedule a Call
                        </button>
                    </div>

                    <div className="cta-contact">
                        <a href="mailto:oneaxissolutions@gmail.com" className="contact-link">
                            <FaEnvelope /> oneaxissolutions@gmail.com
                        </a>
                        <span className="contact-divider">|</span>
                        <a href="tel:+918954535455" className="contact-link">
                            <FaPhone /> +91 89545 35455
                        </a>
                    </div>
                </div>

                <div className="cta-shape cta-shape-1"></div>
                <div className="cta-shape cta-shape-2"></div>
                <div className="cta-shape cta-shape-3"></div>
            </div>
        </section>
    );
};

export default CTA;