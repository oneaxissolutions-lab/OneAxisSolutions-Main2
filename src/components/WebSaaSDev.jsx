import React, { useState } from 'react'; 
import { useTheme } from '../context/ThemeContext';
import '../css/WebSaaSDev.css';
import { FaLock, FaEllipsisH, FaChartLine, FaUsers, FaCog } from 'react-icons/fa';
import Web from '../components/Web';

const WebSaaSDev = () => {
  const { isDark } = useTheme();
  
  
  const [isWebOpen, setIsWebOpen] = useState(false);
    
  const handleCloseWeb = () => setIsWebOpen(false);

  const dashboardStats = [
    { id: 1, title: 'Active Users', value: '2,543', trend: '+12%', icon: <FaUsers /> },
    { id: 2, title: 'Revenue', value: '$45.2K', trend: '+8%', icon: <FaChartLine /> },
    { id: 3, title: 'Performance', value: '98.5%', trend: '+2%', icon: <FaCog /> }
  ];

  return (
    <section className={`websaas-section ${isDark ? 'dark' : ''}`}>
      
      
      {isWebOpen && (
          <Web isOpen={isWebOpen} onClose={handleCloseWeb} />
      )}

      <div className="websaas-container">
        
        <div className="section-header-center">
          <p className="section-label">WEB & SAAS DEVELOPMENT</p>
        </div>
        
        
        <div className="websaas-left">
          <h1 className="websaas-main-title">
            Build powerful <span className="gradient-accent">web platforms</span> that scale.
          </h1>

          <div className="websaas-features-list">
            <div className="websaas-feature-item">
              <h3 className="feature-title"><span className="gradient-accent">Modern Web</span> Development</h3>
              <p className="feature-description">
                Create stunning, responsive websites using cutting-edge technologies like <span className="gradient-accent">React</span>, <span className="gradient-accent">Next.js</span>, and <span className="gradient-accent">Vue.js</span>. 
                We build fast, SEO-optimized web applications that deliver exceptional user experiences 
                across all devices and browsers with pixel-perfect design and blazing-fast performance.
              </p>
            </div>

            <div className="websaas-feature-item">
              <h3 className="feature-title"><span className="gradient-accent">SaaS</span> Platform Development</h3>
            </div>

            <div className="websaas-feature-item">
              <h3 className="feature-title"><span className="gradient-accent">Cloud</span> Integration</h3>
            </div>

            <div className="websaas-feature-item">
              <h3 className="feature-title">Scalable <span className="gradient-accent">Architecture</span></h3>
            </div>
          </div>
        </div>

       
        <div className="websaas-center">
          <div className="laptop-mockup">
            
            <div className="browser-window">
              <div className="browser-header">
                <div className="browser-controls">
                  <span className="control-dot red"></span>
                  <span className="control-dot yellow"></span>
                  <span className="control-dot green"></span>
                </div>
                <div className="browser-address-bar">
                  <FaLock className="lock-icon" />
                  <span className="url-text">www.yourplatform.com</span>
                </div>
                <div className="browser-menu">
                  <FaEllipsisH />
                </div>
              </div>

              
              <div className="browser-content">
                <div className="dashboard-header">
                  <h2 className="dashboard-title">Analytics Dashboard</h2>
                  <button className="dashboard-btn">View All</button>
                </div>

                <div className="dashboard-stats">
                  {dashboardStats.map((stat) => (
                    <div key={stat.id} className="stat-card">
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-info">
                        <h4 className="stat-title">{stat.title}</h4>
                        <div className="stat-value-row">
                          <span className="stat-value">{stat.value}</span>
                          <span className="stat-trend">{stat.trend}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                
                <div className="dashboard-chart">
                  <div className="chart-header">
                    <h3 className="chart-title">Growth Overview</h3>
                    <div className="chart-legend">
                      <span className="legend-item"><span className="legend-dot primary"></span>Revenue</span>
                      <span className="legend-item"><span className="legend-dot secondary"></span>Users</span>
                    </div>
                  </div>
                  <div className="chart-bars">
                    <div className="bar-group"><div className="bar primary" style={{ height: '60%' }}></div><div className="bar secondary" style={{ height: '45%' }}></div></div>
                    <div className="bar-group"><div className="bar primary" style={{ height: '75%' }}></div><div className="bar secondary" style={{ height: '60%' }}></div></div>
                    <div className="bar-group"><div className="bar primary" style={{ height: '85%' }}></div><div className="bar secondary" style={{ height: '70%' }}></div></div>
                    <div className="bar-group"><div className="bar primary" style={{ height: '95%' }}></div><div className="bar secondary" style={{ height: '85%' }}></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>

        
        <div className="websaas-right">
          <h2 className="websaas-secondary-title">
            Enterprise-grade solutions for modern businesses.
          </h2>
          <p className="websaas-secondary-description">
            We specialize in building <span className="gradient-accent">SaaS platforms</span> and web applications that handle millions of users. 
            From <span className="gradient-accent">e-commerce</span> to enterprise dashboards, we deliver secure, scalable solutions with 
            cutting-edge technology.
          </p>
          
          
          <button onClick={() => setIsWebOpen(true)} className="websaas-learn-more">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebSaaSDev;