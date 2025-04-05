import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: 'Consumer Purchasing Behavior Analysis',
      description: 'Analyzed 10,000 retail bills to identify product pairing patterns...',
    },
    // ... your existing projects with added category and tools
  ];

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="project-container">
      <div className="projects-content-box">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header" onClick={() => toggleProject(index)}>
              <h2>{project.title}</h2>
              <button className="expand-button">
                <i className={`fas fa-chevron-down ${expandedProject === index ? 'rotated' : ''}`}></i>
              </button>
            </div>
            <div className={`project-description ${expandedProject === index ? 'active' : ''}`}>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;