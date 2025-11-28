import React, { useState } from 'react';
import '../css/Testimonials.css';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO, TechStart Inc',
            image: 'https://i.pravatar.cc/150?img=1',
            rating: 5,
            text: 'OneAxis transformed our vision into reality with their exceptional web development skills. The team was professional, responsive, and delivered beyond our expectations. Our platform now handles 10x more traffic seamlessly!',
            project: 'E-Commerce Platform'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Founder, FitLife App',
            image: 'https://i.pravatar.cc/150?img=13',
            rating: 5,
            text: 'The mobile app they developed for us is simply outstanding! User engagement increased by 300% within the first month. Their attention to detail and commitment to quality is unmatched.',
            project: 'Fitness Mobile App'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Director, SmartAI Solutions',
            image: 'https://i.pravatar.cc/150?img=5',
            rating: 5,
            text: 'Working with OneAxis on our AI chatbot was a game-changer. They understood our complex requirements and delivered a solution that reduced customer support costs by 60%. Highly recommended!',
            project: 'AI Chatbot Integration'
        },
        {
            id: 4,
            name: 'David Williams',
            role: 'Owner, Modern Spaces',
            image: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
            text: 'Their interior design team brought our dream home to life! The 3D renderings were so accurate, and the final result exceeded all our expectations. Professional service from start to finish.',
            project: 'Residential Interior Design'
        },
        {
            id: 5,
            name: 'Lisa Anderson',
            role: 'CTO, DataFlow Corp',
            image: 'https://i.pravatar.cc/150?img=9',
            rating: 5,
            text: 'The SaaS dashboard they built for us is incredibly intuitive and powerful. Our clients love the user experience, and we\'ve seen a 45% increase in user retention. Outstanding work!',
            project: 'Analytics Dashboard'
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                {/* Header */}
                <div className="testimonials-header">
                    <h2 className="testimonials-title">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="testimonials-subtitle">
                        Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div className="testimonial-slider">
                    <button 
                        className="slider-btn prev-btn" 
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft />
                    </button>

                    <div className="testimonial-content">
                        <div className="quote-icon">
                            <FaQuoteLeft />
                        </div>
                        
                        <div className="testimonial-card">
                            <div className="client-info">
                                <img 
                                    src={testimonials[currentIndex].image} 
                                    alt={testimonials[currentIndex].name}
                                    className="client-image"
                                />
                                <div className="client-details">
                                    <h3 className="client-name">{testimonials[currentIndex].name}</h3>
                                    <p className="client-role">{testimonials[currentIndex].role}</p>
                                    <div className="rating">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                                            <FaStar key={index} className="star-icon" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="testimonial-text">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div className="project-badge">
                                Project: {testimonials[currentIndex].project}
                            </div>
                        </div>
                    </div>

                    <button 
                        className="slider-btn next-btn" 
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="slider-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToTestimonial(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Background Decorations */}
            <div className="testimonials-decoration testimonials-decoration-1"></div>
            <div className="testimonials-decoration testimonials-decoration-2"></div>
        </section>
    );
};

export default Testimonials;
