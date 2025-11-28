import React, { useState, useEffect } from 'react';
import '../css/Softwares.css';
import Ballpit from '../../Reactbits/Ballpit/Ballpit';
import { HiLightningBolt } from 'react-icons/hi';
import { MdDesignServices, MdCloud } from 'react-icons/md';
import Footer from '../components/Footer';
import {
    FaShieldAlt,
    FaMobile,
    FaRobot,
    FaGlobeAmericas,
    FaHandsHelping
} from 'react-icons/fa';

const BALLPIT_COLORS = [0xff9a76, 0xff7e9a, 0x7e9aff];

const Softwares = () => {
    // Detect if device is mobile/tablet for disabling ball interaction
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        return window.innerWidth <= 1024;
    });

    useEffect(() => {
        const checkMobile = () => {
            if (typeof window === 'undefined') {
                return;
            }
            setIsMobile(window.innerWidth <= 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="softwares-container">
            {/* Section 1 - Hero Section */}
            <div className="section section-1" style={{ zIndex: 1 }}>
                <Ballpit
                    colors={BALLPIT_COLORS}
                    count={80}
                    interactive={!isMobile}
                    followCursor={!isMobile}
                    gravity={0.05}
                />

                {/* Hero Content */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        Innovative Software <span className="gradient-text">Solutions</span>
                    </h1>

                    <p className="hero-subtitle">
                        Transform your business with cutting-edge software development tailored to your needs
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">
                            Get Started
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button className="btn-secondary">View Services</button>
                    </div>
                </div>
            </div>

            {/* Section 2 - Elevation Narrative */}
            <div className="section section-2" style={{ zIndex: 2 }}>
                <div className="section-2-inner">
                    {/* Expertise & Capabilities */}
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

                    {/* Portfolio Showcase Grid */}
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
                                    <img 
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                                        alt="Analytics dashboard showing real-time metrics"
                                        loading="lazy"
                                    />
                                    <div className="showcase-overlay">
                                        <span className="showcase-tag">SaaS Platform</span>
                                        <h3>Enterprise Analytics Suite</h3>
                                        <p>Real-time business intelligence platform serving 10K+ organizations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                                        alt="Mobile banking application interface"
                                        loading="lazy"
                                    />
                                    <div className="showcase-overlay">
                                        <span className="showcase-tag">Fintech</span>
                                        <h3>Digital Banking App</h3>
                                        <p>Secure, AI-powered mobile banking with 2M+ active users</p>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" 
                                        alt="Healthcare telemedicine platform"
                                        loading="lazy"
                                    />
                                    <div className="showcase-overlay">
                                        <span className="showcase-tag">Healthcare</span>
                                        <h3>Telemedicine Platform</h3>
                                        <p>HIPAA-compliant virtual care connecting patients and providers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80" 
                                        alt="E-commerce platform with AI recommendations"
                                        loading="lazy"
                                    />
                                    <div className="showcase-overlay">
                                        <span className="showcase-tag">E-Commerce</span>
                                        <h3>AI-Powered Marketplace</h3>
                                        <p>Intelligent shopping experience with personalized recommendations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                                        alt="Team collaboration workspace platform"
                                        loading="lazy"
                                    />
                                    <div className="showcase-overlay">
                                        <span className="showcase-tag">Productivity</span>
                                        <h3>Unified Workspace</h3>
                                        <p>All-in-one collaboration hub for distributed teams</p>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase-card">
                                <div className="showcase-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" 
                                        alt="IoT smart home control system"
                                        loading="lazy"
                                    />
                                    <div className="showcase-overlay">
                                        <span className="showcase-tag">IoT</span>
                                        <h3>Smart Home Ecosystem</h3>
                                        <p>Connected devices platform with voice and AI automation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technology Stack */}
                    <section className="softwares-section stack-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Technology Stack</span>
                            <h2>Future-proof and scalable engineering toolkits</h2>
                            <p>
                                We select the most modern, battle-tested technologies to accelerate delivery while
                                maintaining flexibility for your roadmap.
                            </p>
                        </div>
                        <div className="stack-grid">
                            <div className="stack-card">
                                <h3>Experience Layer</h3>
                                <div className="stack-tags">
                                    <span>React</span>
                                    <span>Next.js</span>
                                    <span>TypeScript</span>
                                    <span>Tailwind</span>
                                </div>
                            </div>
                            <div className="stack-card">
                                <h3>Platforms & APIs</h3>
                                <div className="stack-tags">
                                    <span>Node.js</span>
                                    <span>Python</span>
                                    <span>GraphQL</span>
                                    <span>Java</span>
                                </div>
                            </div>
                            <div className="stack-card">
                                <h3>Cloud & Data</h3>
                                <div className="stack-tags">
                                    <span>AWS</span>
                                    <span>Azure</span>
                                    <span>GCP</span>
                                    <span>Snowflake</span>
                                </div>
                            </div>
                            <div className="stack-card">
                                <h3>Intelligence</h3>
                                <div className="stack-tags">
                                    <span>OpenAI</span>
                                    <span>Vertex AI</span>
                                    <span>LangChain</span>
                                    <span>TensorFlow</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* AI & Future-Ready Solutions */}
                    <section className="softwares-section future-section">
                        <div className="future-copy">
                            <span className="section-eyebrow">AI & Future-Ready</span>
                            <h2>Intelligent ecosystems designed to evolve</h2>
                            <p>
                                Our AI practice blends data strategy, ethical frameworks, and accelerated delivery to
                                unlock transformative value without compromising trust.
                            </p>
                            <ul className="future-list">
                                <li>Responsible AI governance with bias monitoring and model lifecycle controls</li>
                                <li>Domain-specific copilots that augment teams and boost productivity</li>
                                <li>Predictive insights, autonomous workflows, and decision intelligence dashboards</li>
                            </ul>
                        </div>
                        <div className="future-panel">
                            <div className="panel-card">
                                <HiLightningBolt aria-hidden="true" />
                                <div>
                                    <h3>Intelligence Accelerators</h3>
                                    <p>
                                        Reusable blueprints for rapid experimentation, MLOps automation, and scalable
                                        deployment into your enterprise ecosystem.
                                    </p>
                                </div>
                            </div>
                            <div className="panel-card">
                                <FaHandsHelping aria-hidden="true" />
                                <div>
                                    <h3>Co-innovation Pods</h3>
                                    <p>
                                        Cross-disciplinary teams that co-create with your stakeholders to deliver
                                        measurable outcomes and continuous optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Approach / Why Choose Us */}
                    <section className="softwares-section approach-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Why Choose Us</span>
                            <h2>An operating model engineered for certainty</h2>
                            <p>
                                We orchestrate every engagement with clarity, velocity, and measurable outcomes so
                                your teams can focus on strategic vision.
                            </p>
                        </div>
                        <div className="approach-steps">
                            <div className="approach-step">
                                <span className="step-index">01</span>
                                <h3>Discover & Align</h3>
                                <p>Immersive workshops and discovery sprints to clarify goals and success metrics.</p>
                            </div>
                            <div className="approach-step">
                                <span className="step-index">02</span>
                                <h3>Design the Experience</h3>
                                <p>Experience strategy, product design, and architecture blueprints built in tandem.</p>
                            </div>
                            <div className="approach-step">
                                <span className="step-index">03</span>
                                <h3>Build & Launch</h3>
                                <p>Agile delivery with automated QA, DevSecOps, and progressive rollouts.</p>
                            </div>
                            <div className="approach-step">
                                <span className="step-index">04</span>
                                <h3>Optimize & Scale</h3>
                                <p>Continuous insights, A/B experimentation, and product growth roadmapping.</p>
                            </div>
                        </div>
                    </section>

                    {/* Process Visualization */}
                    <section className="softwares-section process-visual-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">How We Work</span>
                            <h2>Transparent delivery at every milestone</h2>
                            <p>
                                Our proven methodology blends agile sprints with design thinking and continuous
                                stakeholder collaboration to deliver exceptional outcomes.
                            </p>
                        </div>
                        <div className="process-visual-grid">
                            <div className="process-item">
                                <div className="process-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                                        alt="Team workshop and discovery session"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="process-content">
                                    <span className="process-badge">Phase 1</span>
                                    <h3>Discovery & Strategy</h3>
                                    <p>
                                        We immerse ourselves in your business context through stakeholder interviews,
                                        user research, and competitive analysis. Our discovery sprints uncover hidden
                                        opportunities and define clear success metrics aligned with your strategic goals.
                                    </p>
                                    <ul className="process-features">
                                        <li>Stakeholder alignment workshops</li>
                                        <li>User journey mapping & persona development</li>
                                        <li>Technical feasibility assessment</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="process-item process-item-reverse">
                                <div className="process-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80" 
                                        alt="Design and prototyping workspace"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="process-content">
                                    <span className="process-badge">Phase 2</span>
                                    <h3>Design & Architecture</h3>
                                    <p>
                                        Our design system approach ensures consistency at scale. We create high-fidelity
                                        prototypes validated through user testing while our architects design resilient,
                                        scalable backend systems that anticipate future growth.
                                    </p>
                                    <ul className="process-features">
                                        <li>Component-based design systems</li>
                                        <li>Interactive prototypes & usability testing</li>
                                        <li>Scalable architecture blueprints</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="process-item">
                                <div className="process-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                                        alt="Development team collaborating on code"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="process-content">
                                    <span className="process-badge">Phase 3</span>
                                    <h3>Agile Development</h3>
                                    <p>
                                        Our cross-functional pods deliver working software every sprint. Automated testing,
                                        continuous integration, and transparent communication ensure you see progress in
                                        real-time while maintaining enterprise-grade quality standards.
                                    </p>
                                    <ul className="process-features">
                                        <li>2-week sprint cycles with demos</li>
                                        <li>Automated testing & CI/CD pipelines</li>
                                        <li>Real-time progress dashboards</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="process-item process-item-reverse">
                                <div className="process-image">
                                    <img 
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                                        alt="Analytics and optimization dashboard"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="process-content">
                                    <span className="process-badge">Phase 4</span>
                                    <h3>Launch & Optimization</h3>
                                    <p>
                                        Post-launch isn&apos;t the end—it&apos;s the beginning. We monitor performance metrics,
                                        gather user feedback, and continuously optimize through A/B testing and data-driven
                                        iterations to maximize ROI and user satisfaction.
                                    </p>
                                    <ul className="process-features">
                                        <li>Performance monitoring & observability</li>
                                        <li>A/B testing & conversion optimization</li>
                                        <li>Ongoing enhancement roadmap</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Client Success & Global Reach */}
                    <section className="softwares-section reach-section">
                        <div className="reach-heading">
                            <span className="section-eyebrow">Client Success</span>
                            <h2>Global impact with measurable outcomes</h2>
                            <p>
                                We partner with venture-backed innovators, scale-ups, and Fortune enterprises across
                                the globe to deliver category-defining products.
                            </p>
                        </div>
                        <div className="reach-wrapper">
                            <div className="reach-left">
                                <div className="reach-intro">
                                    <FaGlobeAmericas aria-hidden="true" />
                                    <p>
                                        Always-on teams across North America, Europe, and Asia Pacific ensure around-the-
                                        clock momentum and localization expertise.
                                    </p>
                                </div>
                                <div className="reach-intro">
                                    <FaShieldAlt aria-hidden="true" />
                                    <p>
                                        Enterprise-grade security, compliance frameworks, and transparent governance built into every engagement.
                                    </p>
                                </div>
                            </div>
                            <div className="stat-grid">
                                <div className="stat-card">
                                    <strong>50M+</strong>
                                    <span>Active users supported</span>
                                </div>
                                <div className="stat-card">
                                    <strong>40%</strong>
                                    <span>Average efficiency uplift post launch</span>
                                </div>
                                <div className="stat-card">
                                    <strong>24/7</strong>
                                    <span>Global delivery coverage</span>
                                </div>
                                <div className="stat-card">
                                    <strong>AA+</strong>
                                    <span>Security posture ratings</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About / Who We Are */}
                    <section className="softwares-section about-section">
                        <div className="section-copy">
                            <span className="section-eyebrow">Who We Are</span>
                            <h2>Modern product teams for ambitious leaders</h2>
                            <p>
                                OneAxis assembles elite strategists, designers, and engineers to build digital
                                products that outperform business goals. We blend Silicon Valley velocity with
                                enterprise-grade rigor, giving you a partner that can imagine, engineer, and evolve
                                the platforms powering your next decade.
                            </p>
                            <div className="about-highlights">
                                <div className="about-card">
                                    <h3>Strategic Vision</h3>
                                    <p>
                                        Product-first mindset anchored in human-centered design, measurable value,
                                        and future-ready architectures.
                                    </p>
                                </div>
                                <div className="about-card">
                                    <h3>Embedded Partnerships</h3>
                                    <p>
                                        Dedicated pods that integrate with your teams, guided by transparent delivery
                                        rituals and C-suite visibility.
                                    </p>
                                </div>
                                <div className="about-card">
                                    <h3>Security & Trust</h3>
                                    <p>
                                        Secure-by-design frameworks, compliance-ready pipelines, and automated
                                        quality checkpoints from day one.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="about-identity">
                            <div className="identity-card">
                                <span className="identity-badge">Award-Winning Delivery</span>
                                <h3>Purpose-built for high-growth and enterprise programs</h3>
                                <ul className="identity-list">
                                    <li>Global talent hubs operating in 3 time zones</li>
                                    <li>Design-led engineering with measurable business KPIs</li>
                                    <li>Proactive governance, security reviews, and observability</li>
                                </ul>
                            </div>
                            <div className="identity-stats">
                                <div className="stat-block">
                                    <strong>95%</strong>
                                    <span>Client retention and renewals</span>
                                </div>
                                <div className="stat-block">
                                    <strong>30+</strong>
                                    <span>Global enterprise launches</span>
                                </div>
                                <div className="stat-block">
                                    <strong>6-8 weeks</strong>
                                    <span>Average time to MVP release</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team & Culture Highlights */}
                    <section className="softwares-section culture-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Our Culture</span>
                            <h2>Where innovation meets collaboration</h2>
                            <p>
                                Behind every exceptional product is an exceptional team. Meet the people who bring
                                passion, expertise, and creativity to every engagement.
                            </p>
                        </div>
                        <div className="culture-grid">
                            <div className="culture-card culture-card-large">
                                <img 
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80" 
                                    alt="Diverse team collaborating in modern workspace"
                                    loading="lazy"
                                />
                                <div className="culture-overlay">
                                    <h3>Collaborative Excellence</h3>
                                    <p>Cross-disciplinary teams working in harmony</p>
                                </div>
                            </div>
                            <div className="culture-card">
                                <img 
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" 
                                    alt="Team member presenting ideas on whiteboard"
                                    loading="lazy"
                                />
                                <div className="culture-overlay">
                                    <h3>Continuous Learning</h3>
                                    <p>Weekly knowledge shares & workshops</p>
                                </div>
                            </div>
                            <div className="culture-card">
                                <img 
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" 
                                    alt="Team celebrating project success"
                                    loading="lazy"
                                />
                                <div className="culture-overlay">
                                    <h3>Celebrating Wins</h3>
                                    <p>Recognizing impact & shared success</p>
                                </div>
                            </div>
                            <div className="culture-card">
                                <img 
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" 
                                    alt="Remote team video conference collaboration"
                                    loading="lazy"
                                />
                                <div className="culture-overlay">
                                    <h3>Global Connectivity</h3>
                                    <p>Seamless remote & hybrid collaboration</p>
                                </div>
                            </div>
                            <div className="culture-card">
                                <img 
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80" 
                                    alt="Creative brainstorming session with team"
                                    loading="lazy"
                                />
                                <div className="culture-overlay">
                                    <h3>Innovation Labs</h3>
                                    <p>Dedicated time for experimentation</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact / CTA */}
                    <section className="softwares-section contact-section">
                        <div className="contact-card">
                            <span className="section-eyebrow">Let&apos;s Collaborate</span>
                            <h2>Design the future of your digital business</h2>
                            <p>
                                Share your product vision and our strategists will craft a tailored roadmap, complete
                                with investment-ready milestones, technology recommendations, and acceleration models.
                            </p>
                            <div className="contact-actions">
                                <button type="button" className="btn-primary">Book a Strategy Call</button>
                                <button type="button" className="btn-secondary">Download Capability Deck</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
            {/* Footer Outside section-2 */}
            <Footer></Footer>
        </div>
    );
};

export default Softwares;
