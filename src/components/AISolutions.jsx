import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../css/AISolutions.css';
import { FaBrain, FaRobot, FaChartLine, FaLightbulb, FaMicrochip, FaNetworkWired } from 'react-icons/fa';

const AISolutions = () => {
  const { isDark } = useTheme();

  const aiFeatures = [
    {
      id: 1,
      icon: <FaBrain />,
      title: 'Machine Learning',
      status: 'Active'
    },
    {
      id: 2,
      icon: <FaRobot />,
      title: 'AI Automation',
      status: 'Processing'
    },
    {
      id: 3,
      icon: <FaChartLine />,
      title: 'Predictive Analytics',
      status: 'Optimized'
    }
  ];

  return (
    <section className={`ai-section ${isDark ? 'dark' : ''}`}>
      <div className="ai-container">
        {/* Section Header */}
        <div className="section-header-center">
          <p className="section-label">AI SOLUTIONS</p>
        </div>
        
        {/* Left Content */}
        <div className="ai-left">
          <h1 className="ai-main-title">
            Empower your business with <span className="gradient-accent">AI Solutions</span> that solve real problems.
          </h1>

          <div className="ai-features-list">
            <div className="ai-feature-item">
              <h3 className="feature-title"><span className="gradient-accent">Intelligent</span> Automation</h3>
              <p className="feature-description">
                Leverage cutting-edge <span className="gradient-accent">Machine Learning</span> and <span className="gradient-accent">Deep Learning</span> algorithms 
                to automate complex business processes. Our <span className="gradient-accent">AI-powered solutions</span> reduce manual effort, 
                increase accuracy, and deliver insights that drive strategic decisions. From natural language processing 
                to computer vision, we implement AI that transforms operations.
              </p>
            </div>

            <div className="ai-feature-item">
              <h3 className="feature-title"><span className="gradient-accent">Predictive</span> Analytics</h3>
            </div>

            <div className="ai-feature-item">
              <h3 className="feature-title"><span className="gradient-accent">Natural Language</span> Processing</h3>
            </div>

            <div className="ai-feature-item">
              <h3 className="feature-title"><span className="gradient-accent">Computer Vision</span> Solutions</h3>
            </div>
          </div>
        </div>

        {/* Center - AI Interface Mockup */}
        <div className="ai-center">
          <div className="ai-interface">
            {/* Neural Network Visualization */}
            <div className="neural-network">
              <div className="network-header">
                <div className="header-indicator">
                  <span className="pulse-dot"></span>
                  <span className="status-text">AI Processing</span>
                </div>
                <FaMicrochip className="chip-icon" />
              </div>

              {/* Network Nodes */}
              <div className="network-canvas">
                <svg className="network-svg" viewBox="0 0 400 400">
                  {/* Connection Lines */}
                  <g className="connections">
                    {[...Array(12)].map((_, i) => (
                      <line
                        key={`line-${i}`}
                        x1={50 + (i % 3) * 50}
                        y1={100 + Math.floor(i / 3) * 80}
                        x2={200}
                        y2={200}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        opacity="0.3"
                        className="network-line"
                      />
                    ))}
                  </g>
                  
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff9a76" />
                      <stop offset="50%" stopColor="#ff7e9a" />
                      <stop offset="100%" stopColor="#7e9aff" />
                    </linearGradient>
                  </defs>

                  {/* Input Layer Nodes */}
                  {[...Array(4)].map((_, i) => (
                    <circle
                      key={`input-${i}`}
                      cx="50"
                      cy={100 + i * 80}
                      r="8"
                      fill="url(#gradient)"
                      className="network-node"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}

                  {/* Hidden Layer Nodes */}
                  {[...Array(5)].map((_, i) => (
                    <circle
                      key={`hidden-${i}`}
                      cx="150"
                      cy={80 + i * 70}
                      r="10"
                      fill="url(#gradient)"
                      className="network-node"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}

                  {/* Output Layer Nodes */}
                  {[...Array(3)].map((_, i) => (
                    <circle
                      key={`output-${i}`}
                      cx="250"
                      cy={130 + i * 80}
                      r="12"
                      fill="url(#gradient)"
                      className="network-node pulse"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    />
                  ))}

                  {/* Center Core */}
                  <circle
                    cx="350"
                    cy="200"
                    r="15"
                    fill="url(#gradient)"
                    className="network-core"
                  />
                </svg>
              </div>

              {/* AI Feature Cards */}
              <div className="ai-feature-cards">
                {aiFeatures.map((feature) => (
                  <div key={feature.id} className="ai-card">
                    <div className="card-icon">{feature.icon}</div>
                    <div className="card-content">
                      <h4 className="card-title">{feature.title}</h4>
                      <span className="card-status">{feature.status}</span>
                    </div>
                    <div className="card-indicator">
                      <div className="progress-ring"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Processing Info */}
              <div className="processing-info">
                <div className="info-item">
                  <FaNetworkWired className="info-icon" />
                  <div className="info-text">
                    <span className="info-label">Neural Networks</span>
                    <span className="info-value">Active</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaLightbulb className="info-icon" />
                  <div className="info-text">
                    <span className="info-label">AI Models</span>
                    <span className="info-value">12 Running</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="ai-right">
          <h2 className="ai-secondary-title">
            Next-generation AI that drives innovation.
          </h2>
          <p className="ai-secondary-description">
            From <span className="gradient-accent">chatbots</span> and <span className="gradient-accent">recommendation systems</span> to 
            advanced <span className="gradient-accent">predictive models</span>, we build AI solutions that learn, adapt, and evolve. 
            Our expertise spans across <span className="gradient-accent">NLP</span>, computer vision, and custom AI implementations 
            tailored to your unique challenges.
          </p>
          <button className="ai-learn-more">
            Explore AI Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
