import React, { useState, useEffect } from 'react';
import '../css/Softwares.css';
import Ballpit from '../../Reactbits/Ballpit/Ballpit';
import { HiLightningBolt } from 'react-icons/hi';
import { MdDesignServices, MdCloud } from 'react-icons/md';
import Footer from '../components/Footer';
import Common from '../components/Common'; 
import ScheduleModal from '../components/ScheduleModal';
import Mobile from '../components/Mobile'; 
import {
    FaShieldAlt,
    FaMobile,
    FaRobot,
    FaGlobeAmericas,
    FaHandsHelping
} from 'react-icons/fa';

const BALLPIT_COLORS = [0xff9a76, 0xff7e9a, 0x7e9aff];

const Softwares = () => {
    
    // Screen size detect karne ke liye state
    const [isMobileScreen, setIsMobileScreen] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        return window.innerWidth <= 1024;
    });

    // Modals control karne ke liye states
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile file ke liye state

    useEffect(() => {
        const checkMobile = () => {
            if (typeof window === 'undefined') {
                return;
            }
            setIsMobileScreen(window.innerWidth <= 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="softwares-container">
            {/* Sabhi Modals/Components yahan defined hain */}
            <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
            <Common isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            
            {/* Mobile component toggle logic */}
            {isMobileOpen && <Mobile isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />}

            <div className="section section-1" style={{ zIndex: 1 }}>
                <Ballpit
                    colors={BALLPIT_COLORS}
                    count={80}
                    interactive={!isMobileScreen}
                    followCursor={!isMobileScreen}
                    gravity={0.05}
                />

                <div className="hero-content">
                    <h1 className="hero-title">
                        Innovative Software <span className="gradient-text">Solutions</span>
                    </h1>

                    <p className="hero-subtitle">
                        Transform your business with cutting-edge software development tailored to your needs
                    </p>

                    <div className="hero-buttons">
                        {/* Get Started par click karne par Mobile component khulega */}
                        <button 
                            className="btn-primary"
                            onClick={() => setIsMobileOpen(true)}
                        >
                            Get Started
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="section section-2" style={{ zIndex: 2 }}>
                <div className="section-2-inner">
                    
                    <section className="softwares-section expertise-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Our Expertise</span>
                            <h2>End-to-end digital product excellence</h2>
                            <p>
                                From concept to continuous improvement, our teams architect resilient platforms,
                                design premium experiences, and automate operations so you can scale with confidence.
                            </p>
                        </div>
                        <div className="expertise-grid">
                            <article className="expertise-card">
                                <span className="card-icon" aria-hidden="true">
                                    <MdDesignServices />
                                </span>
                                <h3>Web & SaaS Platforms</h3>
                                <p>Composable, high-performance web products engineered for growth.</p>
                                <ul>
                                    <li>Micro frontends & design systems</li>
                                    <li>Secure multi-tenant SaaS architectures</li>
                                </ul>
                            </article>
                            <article className="expertise-card">
                                <span className="card-icon" aria-hidden="true">
                                    <FaMobile />
                                </span>
                                <h3>Mobile Applications</h3>
                                <p>Native and cross-platform experiences optimized for retention.</p>
                                <ul>
                                    <li>Customer-grade UX informed by journey analytics</li>
                                    <li>Offline-first, secure feature delivery pipelines</li>
                                </ul>
                            </article>
                            <article className="expertise-card">
                                <span className="card-icon" aria-hidden="true">
                                    <FaRobot />
                                </span>
                                <h3>AI-Powered Solutions</h3>
                                <p>Responsible AI frameworks that amplify decision-making and automation.</p>
                                <ul>
                                    <li>Generative copilots, personalization, and intelligent routing</li>
                                    <li>ML Ops orchestration with transparent governance</li>
                                </ul>
                            </article>
                            <article className="expertise-card">
                                <span className="card-icon" aria-hidden="true">
                                    <MdCloud />
                                </span>
                                <h3>Cloud & DevOps</h3>
                                <p>Cloud-native foundations with observability, resilience, and automation.</p>
                                <ul>
                                    <li>Landing zones across AWS, Azure, and GCP</li>
                                    <li>GitOps, IaC, and zero-downtime release orchestration</li>
                                </ul>
                            </article>
                        </div>
                    </section>

                    <section className="softwares-section portfolio-showcase-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Our Work</span>
                            <h2>Products that drive measurable impact</h2>
                            <p>
                                Explore a selection of transformative digital platforms we&apos;ve built across industries,
                                from fintech to healthcare to e-commerce.
                            </p>
                        </div>
                        <div className="portfolio-showcase-grid">
                            <div className="showcase-card">
                                <div className="showcase-image">
                                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Analytics dashboard" loading="lazy" />
                                    <div className="showcase-overlay">
                                        <span className="showcase-tag">SaaS Platform</span>
                                        <h3>Enterprise Analytics Suite</h3>
                                        <p>Real-time BI platform serving 10K+ organizations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-image">
                                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Mobile banking" loading="lazy" />
                                    <div className="showcase-overlay">
                                        <span className="showcase-tag">Fintech</span>
                                        <h3>Digital Banking App</h3>
                                        <p>Secure, AI-powered mobile banking with 2M+ users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="softwares-section stack-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Technology Stack</span>
                            <h2>Future-proof and scalable engineering toolkits</h2>
                        </div>
                        <div className="stack-grid">
                            <div className="stack-card">
                                <h3>Experience Layer</h3>
                                <div className="stack-tags">
                                    <span>React</span><span>Next.js</span><span>TypeScript</span><span>Tailwind</span>
                                </div>
                            </div>
                            <div className="stack-card">
                                <h3>Intelligence</h3>
                                <div className="stack-tags">
                                    <span>OpenAI</span><span>Vertex AI</span><span>LangChain</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="softwares-section approach-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Why Choose Us</span>
                            <h2>An operating model engineered for certainty</h2>
                        </div>
                        <div className="approach-steps">
                            <div className="approach-step">
                                <span className="step-index">01</span>
                                <h3>Discover & Align</h3>
                                <p>Immersive workshops to clarify goals.</p>
                            </div>
                            <div className="approach-step">
                                <span className="step-index">02</span>
                                <h3>Build & Launch</h3>
                                <p>Agile delivery with automated QA.</p>
                            </div>
                        </div>
                    </section>

                    <section className="softwares-section contact-section">
                        <div className="contact-card">
                            <span className="section-eyebrow">Let&apos;s Collaborate</span>
                            <h2>Design the future of your digital business</h2>
                            <p>Share your vision and our strategists will craft a roadmap.</p>
                            <div className="contact-actions">
                                <button 
                                  onClick={() => setIsScheduleOpen(true)}
                                  className="btn-primary"
                                >
                                    Book a Strategy Call
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Softwares;