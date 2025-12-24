import React, { useState } from 'react'; 
import '../css/Home.css';
import AboutUs from '../components/AboutUs';
import MobileDev from '../components/MobileDev';
import WebSaaSDev from '../components/WebSaaSDev';
import InteriorShowcase from '../components/InteriorShowcase';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Hyperspeed from '../../Reactbits/Hyperspeed/Hyperspeed';
import { HiLightningBolt } from 'react-icons/hi';
import { MdDesignServices } from 'react-icons/md';
import { FaShieldAlt } from 'react-icons/fa';
import ContactModal from '../components/ContactModal';

const Home = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="home-container">
           
            {isModalOpen && (
                <ContactModal 
                    isOpen={isModalOpen} 
                    onClose={closeModal} 
                />
            )}

            
            <div className="section section-1" style={{ zIndex: 1 }}>
                <Hyperspeed></Hyperspeed>

                
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <span>Transform Your</span>
                            <span className="gradient-text">Vision</span>
                        </h1>
                        <p className="hero-subtitle">
                            We craft cutting-edge solutions that accelerate your business forward
                        </p>
                        <div className="hero-buttons">
                            
                            <button 
                                className="btn-primary" 
                                onClick={() => setIsModalOpen(true)}
                            >
                                Get Started
                                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button className="btn-secondary">View Our Work</button>
                        </div>
                    </div>

                    <div className="hero-features">
                        <div className="feature-card">
                            <div className="feature-icon"><HiLightningBolt /></div>
                            <h3>Fast</h3>
                            <p>Lightning speed</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><MdDesignServices /></div>
                            <h3>Design</h3>
                            <p>Modern UI/UX</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><FaShieldAlt /></div>
                            <h3>Secure</h3>
                            <p>Enterprise grade</p>
                        </div>
                    </div>
                </div>

            </div>

            
            <div className="section section-2" style={{ zIndex: 2 }}>
                <AboutUs></AboutUs>
                <MobileDev></MobileDev>
                <WebSaaSDev></WebSaaSDev>
                <InteriorShowcase></InteriorShowcase>

                
                <Testimonials />

                
                <Statistics />

                
                <CTA />

                
                <FAQ />
                <Footer />
            </div>

        </div>
    );
};

export default Home;