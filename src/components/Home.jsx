import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = forwardRef((props, ref) => {
  const [text, setText] = useState('');
  const [animationKey, setAnimationKey] = useState(0);
  const fullText = "I turn data into impactful insights and solutions..";
  const typingSpeed = 50;

  useEffect(() => {
    let currentChar = 0;
    
    const typingInterval = setInterval(() => {
      if (currentChar <= fullText.length) {
        setText(fullText.slice(0, currentChar));
        currentChar++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [animationKey]);

  useImperativeHandle(ref, () => ({
    restartAnimation: () => {
      setText('');
      setAnimationKey(prev => prev + 1);
    }
  }));

  return (
    <div className="home-container">
      <div className="split-layout">
        {/* Left Section - Main Content */}
        <div className="left-section">
          <div className={`home-text animate-${animationKey}`}>
            <span className="greeting">Hi, my name is</span>
            <h1 className="name">Monil Shah</h1>
            <h2 className="role">{text}</h2>
            <p className="description">
              
            Aspiring Information Technology student passionate about analytics, visualization, and AI-driven insights. 
            Focused on leveraging data for innovation and informed decision-making.
            </p>

            <div className="home-buttons">
              <Link to="/projects" className="primary-btn">
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="secondary-btn">
                <span>Get In Touch</span>
                <i className="fas fa-paper-plane"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Visual Elements */}
        <div className="right-section">
          <div className="profile-card">
            <div className="card-content">
              <div className="social-links">
                <a 
                  href="https://github.com/monilshah1409" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  aria-label="GitHub Profile"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/monil-shah-943a10258" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a 
                  href="mailto:monilshah1409@gmail.com" 
                  className="social-icon"
                  aria-label="Email Me"
                >
                  <i className="far fa-envelope"></i>
                </a>
              </div>

              <div className="quick-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Certifications</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Coding</span>
                </div>
              </div>

              <div className="tech-stack">
                <h3>Tech Stack</h3>
                <div className="tech-icons">
                  <i className="fab fa-python" title="Python"></i>
                  <i className="fab fa-js" title="JavaScript"></i>
                  <i className="fab fa-react" title="React"></i>
                  <i className="fab fa-node" title="Node.js"></i>
                  <i className="fas fa-database" title="Databases"></i>
                  <i className="fab fa-aws" title="AWS"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </div>
  );
});

export default Home;
