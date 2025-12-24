import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../css/ContactModal.css';
import { FaCalendarAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const ScheduleModal = ({ isOpen, onClose }) => {
    
    const [step, setStep] = useState(1);
    
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        topic: 'Consultation'
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => document.body.style.overflow = 'unset';
    }, [isOpen]);

    const handleChange = (e) => {
        setBookingData({
            ...bookingData,
            [e.target.name]: e.target.value
        });
    };

    const handleNext = () => {
        if (step === 1 && !bookingData.date) return alert("Please select a date first.");
        if (step === 2 && !bookingData.time) return alert("Please select a time first.");
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        
        const serviceID = 'oneaxissolutions';  
        const templateID = 'oneaxissolutions';
        const publicKey = 'bGlJCtEzndEoeGkgf'; 

        
        const fullMessage = `
            New Meeting Request Details:
            ----------------------------
            Topic: ${bookingData.topic}
            Date: ${bookingData.date}
            Time: ${bookingData.time}
            
            Client Email: ${bookingData.email}
        `;

       
        const templateParams = {
            name: bookingData.name,      
            email: bookingData.email,    
            title: bookingData.topic,   
            message: fullMessage         
        };

      
        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSubmitting(false);
                setShowSuccess(true);

               
                setTimeout(() => {
                    setShowSuccess(false);
                    setBookingData({ name: '', email: '', date: '', time: '', topic: 'Consultation' });
                    onClose();
                }, 3000);
            }, (err) => {
                console.log('FAILED...', err);
                setIsSubmitting(false);
                alert("Submission failed. Please check console for details.");
            });
    };

    if (!isOpen) return null;

    return (
        <div className="contact-modal-overlay" onClick={onClose}>
            <div className="contact-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="contact-modal-close" onClick={onClose}>&times;</button>

                <div className="contact-modal-content">
                    
                    {!showSuccess && (
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', gap: '10px' }}>
                            <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: step >= 1 ? '#3b82f6' : '#e5e7eb' }}></span>
                            <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: step >= 2 ? '#3b82f6' : '#e5e7eb' }}></span>
                            <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: step >= 3 ? '#3b82f6' : '#e5e7eb' }}></span>
                        </div>
                    )}

                    <div className="contact-modal-header">
                        <h2 className="contact-modal-title">
                            {showSuccess ? "Success!" : (
                                step === 1 ? "Select a Date" : 
                                step === 2 ? "Pick a Time" : "Final Details"
                            )}
                        </h2>
                    </div>

                    {showSuccess ? (
                        <div className="contact-success-message">
                            <div className="success-icon"><FaCheckCircle /></div>
                            <h3>Request Sent!</h3>
                            <p>We have received your request.</p>
                            <p>We will contact you at <b>{bookingData.email}</b> shortly.</p>
                        </div>
                    ) : (
                        <form className="contact-modal-form" onSubmit={handleSubmit}>
                            
                           
                            {step === 1 && (
                                <div className="step-container" style={{ textAlign: 'center' }}>
                                    <div className="form-group" style={{ marginBottom: '20px' }}>
                                        <FaCalendarAlt size={40} color="#3b82f6" style={{ marginBottom: '15px' }} />
                                        <input 
                                            type="date" name="date" required min={new Date().toISOString().split('T')[0]} 
                                            value={bookingData.date} onChange={handleChange}
                                            style={{ width: '100%', padding: '15px', fontSize: '1.2rem', textAlign: 'center', border: '2px solid #e5e7eb', borderRadius: '12px' }}
                                        />
                                    </div>
                                    <button type="button" className="contact-submit-btn" onClick={handleNext}>Next: Pick Time</button>
                                </div>
                            )}

                           
                            {step === 2 && (
                                <div className="step-container" style={{ textAlign: 'center' }}>
                                    <div className="form-group" style={{ marginBottom: '20px' }}>
                                        <FaClock size={40} color="#3b82f6" style={{ marginBottom: '15px' }} />
                                        <input 
                                            type="time" name="time" required 
                                            value={bookingData.time} onChange={handleChange}
                                            style={{ width: '100%', padding: '15px', fontSize: '1.5rem', textAlign: 'center', border: '2px solid #e5e7eb', borderRadius: '12px' }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button type="button" className="contact-submit-btn secondary" onClick={handleBack} style={{ background: '#64748b' }}>Back</button>
                                        <button type="button" className="contact-submit-btn" onClick={handleNext}>Next: Details</button>
                                    </div>
                                </div>
                            )}

                           
                            {step === 3 && (
                                <div className="step-container">
                                    <div className="form-group">
                                        <label>Your Name *</label>
                                        <input type="text" name="name" placeholder="Name" required value={bookingData.name} onChange={handleChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input type="email" name="email" placeholder="Email" required value={bookingData.email} onChange={handleChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Topic</label>
                                        <select name="topic" value={bookingData.topic} onChange={handleChange}>
                                            <option value="Consultation">General Consultation</option>
                                            <option value="Project Review">Project Review</option>
                                            <option value="Pricing">Pricing & Quote</option>
                                        </select>
                                    </div>

                                    <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '15px', textAlign: 'center' }}>
                                        Scheduling for <strong>{bookingData.date}</strong> at <strong>{bookingData.time}</strong>
                                    </p>

                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button type="button" className="contact-submit-btn secondary" onClick={handleBack} style={{ background: '#64748b' }}>Back</button>
                                        <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Confirm Meeting'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScheduleModal;