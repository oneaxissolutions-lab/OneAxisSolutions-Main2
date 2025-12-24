import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser'; 
import '../css/ContactModal.css'; 

const Interior = ({ isOpen, onClose }) => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'residential_full',
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
            New Interior Design Inquiry:
            ----------------------------
            Design Service: ${formData.service}
            Phone Number: ${formData.phone}
            
            Space Details / Vision:
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
                        service: 'residential_full',
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
                        <h2 className="contact-modal-title">Transform Your Space</h2>
                        
                        <p className="contact-modal-subtitle">
                            From dream homes to inspiring offices—tell us your vision and we'll help you build the perfect environment.
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
                            <h3>Request Received!</h3>
                            <p>Our design team will review your details and contact you shortly.</p>
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
                                    
                                    <label htmlFor="service">Design Service</label>
                                    
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <optgroup label="Residential Design">
                                            <option value="residential_full">Full Home Interior</option>
                                            <option value="residential_kitchen">Kitchen & Bath Remodel</option>
                                            <option value="residential_living">Living & Bedroom Styling</option>
                                            <option value="renovation">Home Renovation</option>
                                        </optgroup>
                                        
                                        <optgroup label="Commercial Design">
                                            <option value="commercial_office">Corporate/Office Space</option>
                                            <option value="commercial_retail">Retail & Showroom</option>
                                            <option value="hospitality">Restaurant & Hospitality</option>
                                        </optgroup>

                                        <optgroup label="Specialized Services">
                                            <option value="3d_rendering">3D Visualization & Rendering</option>
                                            <option value="space_planning">Space Planning & Layout</option>
                                            <option value="lighting">Lighting Design</option>
                                            <option value="consultation">Design Consultation (Hourly)</option>
                                        </optgroup>

                                        <optgroup label="Other">
                                            <option value="custom">Other / Custom Request</option>
                                        </optgroup>
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
                                    placeholder="Tell us about your space. Include estimated square footage, your preferred style (e.g., Modern, Minimalist, Bohemian), and your budget range..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="contact-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Book Consultation'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Interior;