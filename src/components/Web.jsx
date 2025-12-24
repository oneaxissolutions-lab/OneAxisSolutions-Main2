import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser'; 
import '../css/ContactModal.css'; 

const Web = ({ isOpen, onClose }) => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'web_app', 
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

    
        const serviceID = 'oneaxissolutions';
        const templateID = 'oneaxissolutions';
        const publicKey = 'bGlJCtEzndEoeGkgf';

        
        const fullMessage = `
            New Web Project Inquiry:
            ------------------------
            Project Type: ${formData.service}
            Phone Number: ${formData.phone}
            
            Project Details:
            ${formData.message}
        `;

        
        const templateParams = {
            name: formData.name,       
            email: formData.email,     
            title: formData.service,   
            message: fullMessage       
        };


        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSubmitting(false);
                setShowSuccess(true);
                
                
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'web_app',
                        message: ''
                    });
                    setShowSuccess(false);
                    onClose();
                }, 2000);
            }, (err) => {
                console.log('FAILED...', err);
                setIsSubmitting(false);
                alert("Failed to send request. Please try again.");
            });
    };

    if (!isOpen) return null;

    return (
        <div className="contact-modal-overlay" onClick={onClose}>
            <div className="contact-modal-container" onClick={(e) => e.stopPropagation()}>
                
                <button className="contact-modal-close" onClick={onClose} aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                
                <div className="contact-modal-content">
                    <div className="contact-modal-header">
                        
                        <h2 className="contact-modal-title">Start Your Web Project</h2>
                        
                        <p className="contact-modal-subtitle">
                            Tell us about your website or SaaS idea and we'll get back to you within 24 hours.
                        </p>
                    </div>

                    {showSuccess ? (
                        <div className="contact-success-message">
                            <div className="success-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Message Sent Successfully!</h3>
                            <p>We'll analyze your requirements and reach out soon.</p>
                        </div>
                    ) : (
                        <form className="contact-modal-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div className="form-group">
                                    
                                    <label htmlFor="service">Project Type</label>
                                    
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="web_app">Web Application (React/Next.js)</option>
                                        <option value="saas">SaaS Platform</option>
                                        <option value="ecommerce">E-commerce Store</option>
                                        <option value="corporate">Corporate Website</option>
                                        <option value="landing">Landing Page</option>
                                        <option value="custom">Custom Solution</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Project Details</label>
                                
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Describe your project, features needed, or design preferences..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="contact-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Request Quote'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Web;