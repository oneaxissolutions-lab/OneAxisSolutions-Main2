import React, { useState, useEffect } from 'react';
import '../css/InteriorDesign.css';
import Footer from '../components/Footer';
import ScheduleModal from '../components/ScheduleModal'; 
import Interior from '../components/Interior'; 
import Interior1 from '../assets/Interior1.jpeg';
import Interior2 from '../assets/Interior2.jpeg';
import interior3 from '../assets/interior3.jpeg';
import interior4 from '../assets/interior4.jpeg';
import interior5 from '../assets/interior5.jpeg';
import interior6 from '../assets/interior6.jpeg';
import interior7 from '../assets/interior7.jpeg';
import interior9 from '../assets/interior9.jpeg';
import interior10 from '../assets/interior10.jpeg';
import interior11 from '../assets/interior11.jpeg';
import interior13 from '../assets/interior13.jpeg';
import interior14 from '../assets/interior14.jpeg';
import interior15 from '../assets/interior15.jpeg';
import whatsapp1 from '../assets/WhatsApp Image 2025-10-13 at 22.10.14.jpeg';
import whatsapp2 from '../assets/WhatsApp Image 2025-10-13 at 22.10.15.jpeg';
import whatsapp3 from '../assets/WhatsApp Image 2025-10-13 at 22.10.16.jpeg';

const InteriorDesign = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentHeroImage, setCurrentHeroImage] = useState(0);
    const [currentPhilosophyImage, setCurrentPhilosophyImage] = useState(0);
    
    
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);
    const [isInteriorOpen, setIsInteriorOpen] = useState(false); 

    const heroImages = [Interior1, Interior2, interior3, interior4, interior5];
    const philosophyImages = [interior6, interior7, interior9, interior10, interior11];

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        const heroInterval = setInterval(() => {
            setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(heroInterval);
    }, [heroImages.length]);

    useEffect(() => {
        const philosophyInterval = setInterval(() => {
            setCurrentPhilosophyImage((prev) => (prev + 1) % philosophyImages.length);
        }, 4000);
        return () => clearInterval(philosophyInterval);
    }, [philosophyImages.length]);

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'residential', name: 'Residential' },
        { id: 'commercial', name: 'Commercial' },
        { id: 'luxury', name: 'Luxury Spaces' },
        { id: 'minimalist', name: 'Minimalist' }
    ];

    const featuredDesigns = [
        {
            id: 1,
            title: 'Contemporary Luxury Villa',
            category: 'Luxury',
            image: interior13,
            description: 'A masterpiece of modern architecture harmoniously blending with nature. This stunning villa showcases our expertise in creating spaces that breathe elegance while maintaining functional excellence.',
            features: [
                'Open-concept living with floor-to-ceiling windows',
                'Premium Italian marble and custom woodwork',
                'Smart home integration throughout',
                'Infinity pool with panoramic views'
            ],
            stats: {
                area: '8,500 sq ft',
                year: '2024',
                location: 'Delhi'
            }
        },
        {
            id: 2,
            title: 'Modern Minimalist Penthouse',
            category: 'Residential',
            image: interior14,
            description: 'Minimalism meets sophistication in this breathtaking penthouse design. Every element is carefully curated to create a serene sanctuary above the city, where less truly becomes more.',
            features: [
                'Clean lines with neutral color palette',
                'Custom-designed furniture pieces',
                'Hidden storage solutions',
                'Natural light optimization'
            ],
            stats: {
                area: '4,200 sq ft',
                year: '2024',
                location: 'Gurugram'
            }
        },
        {
            id: 3,
            title: 'Executive Office Headquarters',
            category: 'Commercial',
            image: interior15,
            description: 'Redefining corporate spaces with this innovative office design that inspires creativity and collaboration. A perfect blend of professionalism and contemporary aesthetics.',
            features: [
                'Flexible workspace configurations',
                'Biophilic design elements',
                'State-of-the-art meeting facilities',
                'Wellness-focused break areas'
            ],
            stats: {
                area: '12,000 sq ft',
                year: '2023',
                location: 'Ghaziabad'
            }
        },
        {
            id: 4,
            title: 'Boutique Hotel Suites',
            category: 'Luxury',
            image: whatsapp1,
            description: 'Each suite tells a unique story, combining opulence with intimate comfort. Our design creates an unforgettable experience that guests will cherish long after their stay.',
            features: [
                'Bespoke furniture and fixtures',
                'Luxury spa-inspired bathrooms',
                'Private balconies with city views',
                'Art-focused interior curation'
            ],
            stats: {
                area: '1,800 sq ft',
                year: '2024',
                location: 'Noida'
            }
        },
        {
            id: 5,
            title: 'Scandinavian Family Home',
            category: 'Residential',
            image: whatsapp2,
            description: 'Warmth meets functionality in this beautiful family residence. Inspired by Scandinavian design principles, every space encourages togetherness while respecting individual needs.',
            features: [
                'Sustainable materials throughout',
                'Multi-functional living spaces',
                'Built-in family organization systems',
                'Indoor-outdoor connectivity'
            ],
            stats: {
                area: '3,600 sq ft',
                year: '2023',
                location: 'Gurgaon'
            }
        },
        {
            id: 6,
            title: 'Modern Coastal Retreat',
            category: 'Luxury',
            image: whatsapp3,
            description: 'Where luxury meets the ocean. This coastal masterpiece captures the essence of seaside living with sophisticated design that celebrates natural beauty and refined comfort.',
            features: [
                'Panoramic ocean views',
                'Weather-resistant premium finishes',
                'Outdoor entertainment spaces',
                'Coastal-inspired color schemes'
            ],
            stats: {
                area: '6,200 sq ft',
                year: '2024',
                location: 'Delhi'
            }
        }
    ];

    const projects = [
        {
            id: 1,
            title: 'Modern Minimalist Residence',
            category: 'residential',
            image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
            description: 'A serene living space combining functionality with aesthetic beauty',
            location: 'Delhi',
            area: '4,500 sq ft'
        },
        {
            id: 2,
            title: 'Executive Office Suite',
            category: 'commercial',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            description: 'Contemporary workspace designed for productivity and elegance',
            location: 'Gurugram',
            area: '3,200 sq ft'
        },
        {
            id: 3,
            title: 'Luxury Flat',
            category: 'luxury',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            description: 'Opulent living at its finest with panoramic city views',
            location: 'Ghaziabad',
            area: '1500 sq ft'
        },
        {
            id: 4,
            title: 'Scandinavian Retreat',
            category: 'minimalist',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            description: 'Clean lines and natural materials create a peaceful sanctuary',
            location: 'Noida',
            area: '2,800 sq ft'
        },
        {
            id: 5,
            title: 'Boutique Hotel Lobby',
            category: 'commercial',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
            description: 'Welcoming guests with timeless elegance and sophistication',
            location: 'Gurgaon',
            area: '5,000 sq ft'
        },
        {
            id: 6,
            title: 'Contemporary Villa',
            category: 'luxury',
            image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
            description: 'Where modern architecture meets luxurious comfort',
            location: 'Delhi',
            area: '4,000 sq ft'
        }
    ];

    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 6.5h0M17.5 6.5h0M6.5 17.5h0M17.5 17.5h0" strokeLinecap="round"/>
                </svg>
            ),
            title: 'Space\nPlanning',
            description: 'Optimizing layouts for functionality and aesthetic appeal'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11.5V20M12 11.5L3 6.5M12 11.5L21 6.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="11.5" r="1.5" fill="currentColor"/>
                </svg>
            ),
            title: 'Concept\nDevelopment',
            description: 'Creating unique design narratives tailored to your vision'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 3h6l6 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9l6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 3v6h6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 13h8M8 17h5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: 'Project\nManagement',
            description: 'Seamless execution from concept to completion'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="8" width="18" height="12" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12h18M7 8V5a1 1 0 011-1h8a1 1 0 011 1v3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8" cy="16" r="0.5" fill="currentColor"/>
                    <circle cx="16" cy="16" r="0.5" fill="currentColor"/>
                </svg>
            ),
            title: 'Custom\nFurniture',
            description: 'Bespoke pieces crafted to perfection'
        }
    ];

    const filteredProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="interior-design-page">
            
            
            
           
            <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
            
           
            <Interior isOpen={isInteriorOpen} onClose={() => setIsInteriorOpen(false)} />

            <div className="interior-section interior-section-1" style={{ zIndex: 1 }}>
                <div className={`interior-design-container ${isLoaded ? 'loaded' : ''}`}>
                    
                    <section className="interior-hero">
                      
                        <div className="interior-hero-backgrounds">
                            {heroImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`interior-hero-bg ${index === currentHeroImage ? 'active' : ''}`}
                                    style={{ backgroundImage: `url(${image})` }}
                                ></div>
                            ))}
                        </div>
                        <div className="interior-hero-overlay"></div>
                        <div className="interior-hero-content">
                            <h1 className="interior-hero-title">
                                <span className="interior-hero-subtitle">Luxury</span>
                                Interior Design
                            </h1>
                            <p className="interior-hero-description">
                                Transforming spaces into timeless masterpieces of elegance and sophistication
                            </p>
                            <div className="interior-hero-buttons">
                                <a href="https://portfolio-five-tan-20.vercel.app/" className="interior-hero-btn primary">
                                    View Portfolio
                                </a>
                                
                                <button onClick={() => setIsScheduleOpen(true)} className="interior-hero-btn secondary">
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                        <div className="interior-hero-scroll">
                            <div className="scroll-indicator">
                                <span></span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            
            <div className="interior-section interior-section-2" style={{ zIndex: 2 }}>
                <div className={`interior-design-container ${isLoaded ? 'loaded' : ''}`}>


                
                <section className="interior-philosophy">
                    <div className="interior-philosophy-container">
                        <div className="interior-philosophy-content">
                            <span className="interior-section-label">Our Philosophy</span>
                            <h2 className="interior-section-title">
                                Crafting Spaces That Inspire
                            </h2>
                            <p className="interior-philosophy-text">
                                At OneAxis, we believe that interior design is more than just aesthetics—it's about creating environments that enhance the way you live, work, and experience life. Our approach combines timeless elegance with contemporary innovation, resulting in spaces that are both beautiful and functional.
                            </p>
                            <p className="interior-philosophy-text">
                                Each project is a unique journey, guided by your vision and elevated by our expertise. We meticulously curate every detail, from the grandest architectural elements to the finest finishing touches, ensuring a harmonious blend of form and function.
                            </p>
                            <div className="interior-philosophy-stats">
                                <div className="interior-stat">
                                    <span className="interior-stat-number">10+</span>
                                    <span className="interior-stat-label">Projects Completed</span>
                                </div>
                                <div className="interior-stat">
                                    <span className="interior-stat-number">10+</span>
                                    <span className="interior-stat-label">Years Experience</span>
                                </div>
                                <div className="interior-stat">
                                    <span className="interior-stat-number">98%</span>
                                    <span className="interior-stat-label">Client Satisfaction</span>
                                </div>
                            </div>
                        </div>
                        <div className="interior-philosophy-image">
                            <div className="interior-image-wrapper interior-slider-wrapper">
                                
                                <div className="interior-image-carousel">
                                    {philosophyImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Interior Design ${index + 1}`}
                                            className={`interior-carousel-image ${index === currentPhilosophyImage ? 'active' : ''}`}
                                        />
                                    ))}
                                </div>
                               
                                <div className="interior-carousel-dots">
                                    {philosophyImages.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`interior-dot ${index === currentPhilosophyImage ? 'active' : ''}`}
                                            onClick={() => setCurrentPhilosophyImage(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                        ></button>
                                    ))}
                                </div>
                                <div className="interior-image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="interior-services">
                    <div className="interior-services-header">
                        <span className="interior-section-label">What We Offer</span>
                        <h2 className="interior-section-title">Comprehensive Design Services</h2>
                        <p className="interior-services-subtitle">
                            From concept to completion, we provide end-to-end solutions
                        </p>
                    </div>
                    <div className="interior-services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="interior-service-card">
                                <div className="interior-service-icon">{service.icon}</div>
                                <h3 className="interior-service-title">{service.title}</h3>
                                <p className="interior-service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                
                <section className="interior-featured-designs">
                    <div className="interior-featured-header">
                        <span className="interior-section-label">Our Masterpieces</span>
                        <h2 className="interior-section-title">Featured Designs</h2>
                        <p className="interior-featured-subtitle">
                            Discover our most celebrated projects that showcase innovation, elegance, and timeless design excellence
                        </p>
                    </div>

                    <div className="interior-featured-grid">
                        {featuredDesigns.map((design, index) => (
                            <div 
                                key={design.id} 
                                className={`interior-featured-item ${index % 2 === 1 ? 'reverse' : ''}`}
                            >
                                <div className="interior-featured-image">
                                    <img src={design.image} alt={design.title} loading="lazy" />
                                    <div className="interior-featured-image-overlay"></div>
                                </div>
                                <div className="interior-featured-content">
                                    <span className="interior-featured-badge">{design.category}</span>
                                    <h3 className="interior-featured-title">{design.title}</h3>
                                    <p className="interior-featured-description">{design.description}</p>
                                    <ul className="interior-featured-features">
                                        {design.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <div className="interior-featured-stats">
                                        <div className="interior-stat-item">
                                            <span className="stat-label">Area</span>
                                            <span className="stat-value">{design.stats.area}</span>
                                        </div>
                                        <div className="interior-stat-item">
                                            <span className="stat-label">Year</span>
                                            <span className="stat-value">{design.stats.year}</span>
                                        </div>
                                        <div className="interior-stat-item">
                                            <span className="stat-label">Location</span>
                                            <span className="stat-value">{design.stats.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                
                <section className="interior-process">
                    <div className="interior-process-header">
                        <span className="interior-section-label">Our Process</span>
                        <h2 className="interior-section-title">From Vision to Reality</h2>
                    </div>
                    <div className="interior-process-timeline">
                        <div className="interior-process-step">
                            <div className="interior-step-number">01</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Discovery</h3>
                                <p className="interior-step-description">
                                    Understanding your vision, lifestyle, and unique requirements
                                </p>
                            </div>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-number">02</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Concept Design</h3>
                                <p className="interior-step-description">
                                    Creating mood boards, sketches, and 3D visualizations
                                </p>
                            </div>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-number">03</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Development</h3>
                                <p className="interior-step-description">
                                    Detailed planning, material selection, and technical drawings
                                </p>
                            </div>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-number">04</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Execution</h3>
                                <p className="interior-step-description">
                                    Bringing the design to life with meticulous attention to detail
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="interior-cta">
                    <div className="interior-cta-content">
                        <h2 className="interior-cta-title">Ready to Transform Your Space?</h2>
                        <p className="interior-cta-description">
                            Let's create something extraordinary together. Schedule a consultation with our design experts.
                        </p>
                       
                        <button 
                            className="interior-cta-btn"
                            onClick={() => setIsInteriorOpen(true)}
                        >
                            Get Started Today
                        </button>
                    </div>
                </section>
                </div>
            <Footer />
            </div>

            
        </div>
    );
};

export default InteriorDesign;