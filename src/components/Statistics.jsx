import React, { useState, useEffect, useRef } from 'react';
import '../css/Statistics.css';
import { FaProjectDiagram, FaUsers, FaTrophy, FaCode } from 'react-icons/fa';

const Statistics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({
        projects: 0,
        clients: 0,
        experience: 0,
        technologies: 0
    });
    
    const sectionRef = useRef(null);

    const stats = [
        {
            id: 'projects',
            icon: <FaProjectDiagram />,
            target: 250,
            suffix: '+',
            label: 'Projects Completed',
            color: '#ff9a76'
        },
        {
            id: 'clients',
            icon: <FaUsers />,
            target: 180,
            suffix: '+',
            label: 'Happy Clients',
            color: '#7e9aff'
        },
        {
            id: 'experience',
            icon: <FaTrophy />,
            target: 8,
            suffix: '+',
            label: 'Years Experience',
            color: '#ff7e9a'
        },
        {
            id: 'technologies',
            icon: <FaCode />,
            target: 50,
            suffix: '+',
            label: 'Technologies',
            color: '#76d7ff'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) {
            stats.forEach((stat) => {
                let start = 0;
                const end = stat.target;
                const duration = 2000;
                const increment = end / (duration / 16);

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        setCounts(prev => ({ ...prev, [stat.id]: end }));
                        clearInterval(timer);
                    } else {
                        setCounts(prev => ({ ...prev, [stat.id]: Math.floor(start) }));
                    }
                }, 16);

                return () => clearInterval(timer);
            });
        }
    }, [isVisible]);

    return (
        <section className="statistics-section" ref={sectionRef}>
            <div className="statistics-container">
                {/* Header */}
                <div className="statistics-header">
                    <h2 className="statistics-title">
                        Our <span className="gradient-text">Impact</span> in Numbers
                    </h2>
                    <p className="statistics-subtitle">
                        These numbers reflect our commitment to excellence and the trust our clients place in us.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="statistics-grid">
                    {stats.map((stat, index) => (
                        <div 
                            key={stat.id} 
                            className="stat-card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div 
                                className="stat-icon" 
                                style={{ '--icon-color': stat.color }}
                            >
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <h3 className="stat-number">
                                    {counts[stat.id]}{stat.suffix}
                                </h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                            <div className="stat-progress">
                                <div 
                                    className="progress-bar"
                                    style={{ 
                                        '--progress-width': isVisible ? '100%' : '0%',
                                        '--progress-color': stat.color,
                                        transitionDelay: `${index * 0.15}s`
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decorations */}
            <div className="statistics-decoration statistics-decoration-1"></div>
            <div className="statistics-decoration statistics-decoration-2"></div>
            <div className="statistics-decoration statistics-decoration-3"></div>
        </section>
    );
};

export default Statistics;
