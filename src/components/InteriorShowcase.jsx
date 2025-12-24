import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../css/InteriorShowcase.css';

const InteriorShowcase = () => {
  const { isDark } = useTheme();

  return (
    <section className={`showcase-section ${isDark ? 'dark' : ''}`} id="showcase">
      <div className="showcase-container">
        
        <div className="showcase-left">
          <div className="showcase-main-image">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000" 
              alt="Luxury interior design showcase"
              className="main-img"
            />
          </div>
        </div>

        
        <div className="showcase-right">
          <div className="showcase-content">
            <p className="showcase-label">INTERIOR DESIGNING</p>
            
            <h2 className="showcase-title">
              Build Your <span className="gradient-accent">Luxurious</span>
              <br />
              Dream Home Interior
            </h2>
            
            <p className="showcase-description">
              Transform your living spaces into stunning sanctuaries with our expert interior design services. 
              We bring your vision to life with meticulous attention to detail and premium craftsmanship.
            </p>
            
            
            <a 
              href="https://portfolio-five-tan-20.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="showcase-cta"
              style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
            >
              See Our Projects
            </a>
          </div>

          
          <div className="showcase-secondary-image">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800" 
              alt="Modern interior design detail"
              className="secondary-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorShowcase;