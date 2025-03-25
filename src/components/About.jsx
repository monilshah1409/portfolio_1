import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content-box">
        <h2 className="about-me">About Me</h2>
        
        <div className="professional-summary">
          <h3>Professional Summary</h3>
          <p className="data-skills">
          I am Monil Shah, a passionate data enthusiast and aspiring analyst, currently pursuing my
           Bachelor’s in Information and Communication Technology.
            I specialize in data analysis, visualization, and AI-driven decision-making, with hands-on experience
             in tools like SQL, Tableau, and Python. Through internships and projects, I have developed a keen ability to uncover patterns, optimize processes, and derive actionable insights. I am driven by a curiosity to explore how data can shape impactful solutions, and I thrive in dynamic environments that challenge me to innovate and grow.
          </p>
          <p className="hands-on-experience">
            Hands-on Experience: Completing a 3-month data analytics internship to
            apply these skills in a practical setting.
          </p>
          <p className="eager-to-learn">
            Eager to Learn: Looking for a role that leverages these skills and
            fosters continuous learning within a team environment.
          </p>
        </div>

        <div className="co-curricular-activities">
          <h3>Co-curricular Activities</h3>
          <p className="tennis-section">
          Analytical Thinking & Problem-Solving – Ability to interpret data, identify trends, and derive insights to drive business decisions.
          </p>
          <p className="tennis-section">
          Leadership & Collaboration – Successfully managed cross-functional teams, event logistics, and stakeholder communication.
          </p>
          <p className="tennis-section">
          Continuous Learning & Adaptability – Always eager to explore new technologies, sharpen my technical skills, and stay ahead in the data industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
