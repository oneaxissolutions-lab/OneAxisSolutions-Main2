import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure react-router-dom is installed
import '../css/Webdevelopment.css';
import { 
  FaCode, FaLayerGroup, FaMobileAlt, FaChartLine, 
  FaFigma, FaSearchDollar, FaCheckCircle 
} from 'react-icons/fa';
import ScheduleModal from '../components/ScheduleModal';
import Web from '../components/Web';

const Webdevelopment = () => {
  const navigate = useNavigate();
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const services = [
    { icon: <FaCode />, title: "Web Development", desc: "Custom, high-performance websites built with modern frameworks." },
    { icon: <FaLayerGroup />, title: "UI/UX Design", desc: "Immersive 3D interfaces and user-centric digital experiences." },
    { icon: <FaMobileAlt />, title: "App Solutions", desc: "Responsive mobile applications designed for all platforms." },
    { icon: <FaChartLine />, title: "Digital Strategy", desc: "Data-driven growth strategies to scale your digital presence." }
  ];

  const processSteps = [
    { icon: <FaSearchDollar />, title: "Discovery", desc: "Understanding goals and auditing current digital assets." },
    { icon: <FaFigma />, title: "Design", desc: "Creating prototypes." },
    { icon: <FaCode />, title: "Build", desc: "Clean engineering." },
    { icon: <FaCheckCircle />, title: "Launch", desc: "Rigorous testing." }
  ];

  // --- RESTORED FUNCTIONS TO FIX THE ERROR ---
  const handleInteraction = (e) => {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const x = (window.innerWidth / 2 - clientX) / 45;
    const y = (window.innerHeight / 2 - clientY) / 45;
    setRotate({ x, y });
  };

  const resetRotate = () => setRotate({ x: 0, y: 0 });

  // --- NAVIGATION LOGIC ---
  const [isWebOpen, setIsWebOpen] = useState(false);
      
    const handleCloseWeb = () => setIsWebOpen(false);
  

  return (
    <div className="web-page-wrapper">
      {/* --- HERO SECTION --- */}
       {isWebOpen && (
          <Web isOpen={isWebOpen} onClose={handleCloseWeb} />
      )}
      <section 
        className="web-agency-section"
        onMouseMove={handleInteraction}
        onMouseLeave={resetRotate}
      >
        <div className="web-agency-container">
          <div className="web-agency-laptop-box animate-top">
            <div className="laptop-3d-frame" style={{
              transform: `rotateX(${10 + rotate.y}deg) rotateY(${rotate.x}deg)`
            }}>
              <div className="laptop-screen-unit">
                <div className="internal-ui-3d">
                  <div className="site-mini-nav">
                      <div className="mini-logo">CORE<span>3D</span></div>
                  </div>
                  <div className="ui-3d-content">
                    <div className="three-d-sphere s1"></div>
                    <div className="three-d-sphere s2"></div>
                    <div className="hero-text-3d">
                      <div className="badge-3d">Next-Gen Tech</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="laptop-keyboard-unit"></div>
            </div>
          </div>

          <div className="web-agency-content animate-bottom">
            <h2 className="main-brand-title">ONE AXIS SOLUTIONS</h2>
            <h1 className="display-title">
              Transform ideas with <br /> <span className="blue-gradient">Desktop & Web</span> excellence.
            </h1>
            <button className="cta-button" onClick={() => setIsWebOpen(true)}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVICE CARDS --- */}
      <section className="services-cards-section">
        <div className="cards-grid-container">
          {services.map((service, index) => (
            <div className="service-card-item" key={index}>
              <div className="card-icon-circle">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- WORKFLOW SECTION --- */}
      <section className="tech-process-section">
        <div className="section-header">
          <h2 className="section-title">Development <span className="blue-gradient">Workflow</span></h2>
        </div>
        <div className="process-flow-container">
          {processSteps.map((step, idx) => (
            <div className="process-step" key={idx}>
              <div className="step-number">0{idx + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
              {idx !== processSteps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="cta-banner-section">
        <div className="cta-banner-card">
          <div className="label-pill">Let's Collaborate</div>
          <h2>Design the future of your digital business</h2>
          <p>
            Share your product vision and our strategists will craft a tailored roadmap.
          </p>
          <button 
            className="cta-banner-btn" 
            onClick={() => setIsScheduleOpen(true)}
          >
            Book a Strategy Call
          </button>
        </div>
      </section>

      {/* --- MODAL --- */}
      {isScheduleOpen && (
        <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
      )}
    </div>
  );
};

export default Webdevelopment;