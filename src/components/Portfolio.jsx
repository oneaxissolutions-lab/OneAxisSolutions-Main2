import React, { useState } from 'react';
import '../css/Portfolio.css';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'web',
            description: 'Modern shopping experience with AI recommendations',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
            tags: ['React', 'Node.js', 'AI']
        },
        {
            id: 2,
            title: 'Fitness Tracking App',
            category: 'mobile',
            description: 'Complete health and workout tracking solution',
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
            tags: ['React Native', 'Firebase']
        },
        {
            id: 3,
            title: 'AI Chatbot Solution',
            category: 'ai',
            description: 'Intelligent customer support automation',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
            tags: ['Python', 'TensorFlow', 'NLP']
        },
        {
            id: 4,
            title: 'Modern Living Space',
            category: 'interior',
            description: 'Minimalist interior design transformation',
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
            tags: ['3D Design', 'Rendering']
        },
        {
            id: 5,
            title: 'SaaS Dashboard',
            category: 'web',
            description: 'Analytics and reporting platform',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
            tags: ['Vue.js', 'GraphQL']
        },
        {
            id: 6,
            title: 'Banking Mobile App',
            category: 'mobile',
            description: 'Secure digital banking experience',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
            tags: ['Flutter', 'Blockchain']
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web & SaaS' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'ai', label: 'AI Solutions' },
        { id: 'interior', label: 'Interior Design' }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                {/* Header */}
                <div className="portfolio-header">
                    <h2 className="portfolio-title">
                        Our Recent <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="portfolio-subtitle">
                        Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="portfolio-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="portfolio-grid">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="portfolio-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="card-image">
                                <img src={project.image} alt={project.title} />
                                <div className="card-overlay">
                                    <button className="view-btn">
                                        View Project
                                        <FaExternalLinkAlt />
                                    </button>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-description">{project.description}</p>
                                <div className="card-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="portfolio-cta">
                    <button className="view-all-btn">
                        View All Projects
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="portfolio-decoration portfolio-decoration-1"></div>
            <div className="portfolio-decoration portfolio-decoration-2"></div>
        </section>
    );
};

export default Portfolio;
