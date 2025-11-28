import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../css/MobileDev.css';
import { FaPlay, FaHeart, FaEllipsisV, FaChevronLeft, FaStepBackward, FaStepForward } from 'react-icons/fa';

const MobileDev = () => {
  const { isDark } = useTheme();

  const appFeatures = [
    {
      id: 1,
      title: 'Harmonious Wind',
      duration: '2:10 mins',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      title: 'Silent Streams',
      duration: '2:10 mins',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      title: 'Celestial Calm',
      duration: '2:10 mins',
      image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=100&h=100&fit=crop'
    }
  ];

  return (
    <section className={`mobiledev-section ${isDark ? 'dark' : ''}`}>
      <div className="mobiledev-container">
        {/* Section Header */}
        <div className="section-header-center">
          <p className="section-label">MOBILE DEVELOPMENT</p>
        </div>
        
        {/* Left Content */}
        <div className="mobiledev-left">
          <h1 className="mobiledev-main-title">
            Transform ideas with <span className="gradient-accent">Mobile Development</span> excellence.
          </h1>

          <div className="mobiledev-features-list">
            <div className="mobiledev-feature-item">
              <h3 className="feature-title"><span className="gradient-accent">Cross-Platform</span> Development</h3>
              <p className="feature-description">
                Build native <span className="gradient-accent">iOS</span> and <span className="gradient-accent">Android</span> apps with a single codebase. 
                We leverage powerful frameworks like <span className="gradient-accent">React Native</span> and <span className="gradient-accent">Flutter</span> to deliver 
                high-performance mobile applications that work seamlessly across all devices. Save development time 
                and costs while maintaining native-level performance and user experience.
              </p>
            </div>

            <div className="mobiledev-feature-item">
              <h3 className="feature-title">Beautiful <span className="gradient-accent">UI/UX</span> Design</h3>
            </div>

            <div className="mobiledev-feature-item">
              <h3 className="feature-title"><span className="gradient-accent">Backend</span> Development</h3>
            </div>

            <div className="mobiledev-feature-item">
              <h3 className="feature-title"><span className="gradient-accent">API</span> Integration</h3>
            </div>
          </div>
        </div>

        {/* Center - Phone Mockup */}
        <div className="mobiledev-center">
          <div className="phone-mockup">
            {/* Phone Header */}
            <div className="phone-header">
              <button className="header-icon">
                <FaChevronLeft />
              </button>
              <button className="header-icon">
                <FaHeart />
              </button>
              <button className="header-icon">
                <FaEllipsisV />
              </button>
            </div>

            {/* Album Art Section */}
            <div className="album-section">
              <h2 className="album-title">Serenity Waves</h2>
              <p className="album-artist">By Jordy Babe</p>
              <div className="album-art">
                <img 
                  src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=400&fit=crop" 
                  alt="Lotus flower"
                  className="album-image"
                />
              </div>

              {/* Player Controls */}
              <div className="player-controls">
                <button className="control-btn">
                  <FaStepBackward />
                </button>
                <button className="control-btn play-btn">
                  <FaPlay />
                </button>
                <button className="control-btn">
                  <FaStepForward />
                </button>
              </div>
            </div>

            {/* Music List Card */}
            <div className="music-list-card">
              <h3 className="list-title">List of music</h3>
              <div className="music-tracks">
                {appFeatures.map((track) => (
                  <div key={track.id} className="track-item">
                    <div className="track-info">
                      <img src={track.image} alt={track.title} className="track-image" />
                      <div className="track-details">
                        <h4 className="track-title">{track.title}</h4>
                        <span className="track-duration">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="5.5" stroke="currentColor" />
                            <path d="M6 3v3l2 2" stroke="currentColor" strokeLinecap="round" />
                          </svg>
                          {track.duration}
                        </span>
                      </div>
                    </div>
                    <button className="track-play-btn">
                      <FaPlay />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="mobiledev-right">
          <h2 className="mobiledev-secondary-title">
            Mobile solutions that deliver results.
          </h2>
          <p className="mobiledev-secondary-description">
            We create intuitive mobile apps with seamless performance. Our expertise in <span className="gradient-accent">iOS</span> and <span className="gradient-accent">Android</span> development ensures your app reaches millions with precision and innovation.
          </p>
          <button className="mobiledev-learn-more">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileDev;
