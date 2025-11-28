import React, { useState } from 'react';
import '../css/FAQ.css';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What services does OneAxis offer?",
            answer: "OneAxis specializes in Mobile App Development, Web & SaaS Development, AI Solutions, and Interior Design services. We provide end-to-end solutions tailored to meet your specific business needs and help transform your vision into reality."
        },
        {
            question: "How long does it take to complete a project?",
            answer: "Project timelines vary based on complexity and requirements. A typical mobile app takes 8-16 weeks, web applications 6-12 weeks, and AI solutions 10-20 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
        },
        {
            question: "Do you provide post-launch support and maintenance?",
            answer: "Yes! We offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. Our dedicated support team ensures your application runs smoothly and stays up-to-date with the latest technologies."
        },
        {
            question: "What technologies do you work with?",
            answer: "We work with cutting-edge technologies including React, Node.js, Python, Flutter, React Native, AWS, Azure, TensorFlow, and more. Our team stays updated with the latest industry trends to deliver modern, scalable solutions."
        },
        {
            question: "How do you ensure project quality and security?",
            answer: "We follow industry best practices including code reviews, automated testing, security audits, and agile methodologies. All our projects undergo rigorous quality assurance processes and comply with international security standards to ensure enterprise-grade reliability."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer flexible pricing models including fixed-price projects, time and material, and dedicated team engagements. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed quote tailored to your specific requirements."
        },
        {
            question: "Can you help with existing projects or only new ones?",
            answer: "We work on both new projects and existing ones! Whether you need to modernize legacy systems, add new features, fix bugs, or scale your current application, our experienced team can seamlessly integrate and enhance your existing solutions."
        },
        {
            question: "How do we get started with OneAxis?",
            answer: "Getting started is easy! Simply reach out through our contact form, email, or phone. We'll schedule a free consultation to understand your requirements, discuss solutions, and provide a detailed proposal. From there, we'll guide you through every step of the development journey."
        }
    ];

    return (
        <section className="faq-section">
            <div className="faq-container">
                {/* Header */}
                <div className="faq-header">
                    <div className="faq-icon-wrapper">
                        <FaQuestionCircle className="faq-main-icon" />
                    </div>
                    <h2 className="faq-title">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="faq-subtitle">
                        Find answers to common questions about our services, processes, and how we can help transform your business.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button 
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="question-text">{faq.question}</span>
                                <span className="faq-icon">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>
                            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="faq-cta">
                    <p className="faq-cta-text">Still have questions?</p>
                    <button className="faq-cta-button">
                        Contact Us
                        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="faq-decoration faq-decoration-1"></div>
            <div className="faq-decoration faq-decoration-2"></div>
        </section>
    );
};

export default FAQ;
