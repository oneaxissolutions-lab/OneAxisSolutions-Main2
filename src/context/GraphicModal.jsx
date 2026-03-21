import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Graphicmodal.css';

const GraphicModal = ({ isOpen, onClose }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'brand_identity',
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
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceID  = 'oneaxissolutions';
        const templateID = 'oneaxissolutions';
        const publicKey  = 'bGlJCtEzndEoeGkgf';

        const fullMessage = `
            New Graphic Design Inquiry:
            ----------------------------
            Design Service : ${formData.service}
            Phone Number   : ${formData.phone}

            Project Details:
            ${formData.message}
        `;

        const templateParams = {
            name:    formData.name,
            email:   formData.email,
            title:   formData.service,
            message: fullMessage
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSubmitting(false);
                setShowSuccess(true);
                setTimeout(() => {
                    setFormData({ name:'', email:'', phone:'', service:'brand_identity', message:'' });
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
        <div className="gm-overlay" onClick={onClose}>
            <div className="gm-container" onClick={(e) => e.stopPropagation()}>

                {/* Close Button */}
                <button className="gm-close" onClick={onClose} aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                {showSuccess ? (
                    <div className="gm-success">
                        <div className="gm-success-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>Message Sent!</h3>
                        <p>We'll review your brief and reach out within 24 hours.</p>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="gm-header">
                            <h2 className="gm-title">Graphic Design Project</h2>
                            <p className="gm-subtitle">
                                Tell us about your design needs and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="gm-form" onSubmit={handleSubmit}>

                            {/* Row 1 — Name + Email */}
                            <div className="gm-row">
                                <div className="gm-group">
                                    <label htmlFor="gm-name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="gm-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="gm-group">
                                    <label htmlFor="gm-email">Email *</label>
                                    <input
                                        type="email"
                                        id="gm-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            {/* Row 2 — Phone + Service */}
                            <div className="gm-row">
                                <div className="gm-group">
                                    <label htmlFor="gm-phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="gm-phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div className="gm-group">
                                    <label htmlFor="gm-service">Design Service</label>
                                    <select
                                        id="gm-service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="brand_identity">Brand Identity</option>
                                        <option value="logo_design">Logo Design</option>
                                        <option value="motion_animation">Motion & Animation</option>
                                        <option value="ui_ux">UI/UX Design</option>
                                        <option value="packaging">Packaging Design</option>
                                        <option value="social_media">Social Media Kit</option>
                                        <option value="editorial">Editorial & Print</option>
                                        <option value="custom">Custom Project</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="gm-group">
                                <label htmlFor="gm-message">Project Details</label>
                                <textarea
                                    id="gm-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Describe your brand, style preferences, references, or anything else..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="gm-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                        </form>
                    </>
                )}

            </div>
        </div>
    );
};

export default GraphicModal;