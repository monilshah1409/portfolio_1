import React from 'react';
import './ProjectsCarousel.css';

const ProjectsCarousel = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      link: '#',
    },
  ];

  return (
    <div className="projects-carousel">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} className="project-link">View Project</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCarousel;
