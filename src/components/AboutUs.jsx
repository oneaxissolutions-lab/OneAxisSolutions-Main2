import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../css/AboutUs.css';

const AboutUs = () => {
  const { isDark } = useTheme();

  return (
    <section className={`aboutus-section ${isDark ? 'dark' : ''}`}>
      <div className="aboutus-container">
        {/* Left Side - Icon and Image */}
        <div className="aboutus-left">
          <div className="icon-and-image">
            <div className="aboutus-icon">
              <svg viewBox="0 0 100 100" className="icon-svg">
                <g transform="translate(50, 50)">
                  {[...Array(16)].map((_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="-40"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      transform={`rotate(${i * 22.5})`}
                    />
                  ))}
                </g>
              </svg>
            </div>
            <div className="aboutus-image">
              <div className="image-placeholder">
                <img 
                  src="https://img.freepik.com/free-photo/medium-shot-smiley-business-woman-with-laptop_23-2149457713.jpg" 
                  alt="Professional business woman with laptop"
                  className="aboutus-actual-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="aboutus-right">
          <h2 className="aboutus-title">OUR <span className="gradient-accent">SERVICES</span></h2>
          <div className="aboutus-text">
            <p className="aboutus-paragraph">
              At One Axis, we specialize in delivering cutting-edge solutions that transform your vision into reality. Our expertise spans across <span className="gradient-accent">Interior Design</span>, where we create stunning spaces that blend aesthetics with functionality.
            </p>
            <p className="aboutus-paragraph">
              We craft <span className="gradient-accent">Web</span> and <span className="gradient-accent">Mobile Applications</span> with modern and beautiful UI that captivate users and drive engagement. Our team also builds <span className="gradient-accent">AI-Powered</span> solutions and <span className="gradient-accent">SaaS</span> platforms designed to provide smoother experiences and unlock new possibilities for your business. From concept to deployment, we ensure every project exceeds expectations.
            </p>
          </div>

          <div className="aboutus-cta">
            <button className="circle-btn">
              <span className="btn-line"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
