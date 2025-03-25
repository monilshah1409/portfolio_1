import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Consumer Purchasing Behavior Analysis',
      description:
        'Analyzed 10,000 retail bills to identify product pairing patterns. Applied Apriori Algorithm and predictive models to forecast purchasing trends. Designed strategies for optimized shelf placement and cross-selling. Outcome: Enhanced retailer profits with targeted marketing campaigns.',
    },
    {
      title: 'Financial Analytics',
      description:
        'Built Tableau dashboards to visualize revenue trends and expenses. Conducted predictive analysis for financial forecasting. Identified cost-saving opportunities and growth areas. Outcome: Provided actionable insights for strategic business decisions.',
    },
    {
      title: 'FDI Analytics',
      description:
        'Visualized FDI trends across sectors and regions. Performed correlation analysis between FDI and economic indicators. Highlighted key investment-attracting sectors. Outcome: Supported policymaking with global investment insights.',
    },
    {
      title: 'Entertainer Data Analytics',
      description:
        'Analyzed audience preferences using Tableau dashboards. Predicted trends for upcoming entertainment releases. Segmented consumers using clustering techniques. Outcome: Guided content production and marketing strategies.',
    },
    {
      title: 'Crop Production Analysis',
      description:
        'Visualized crop yields and climatic patterns in Tableau. Conducted regression analysis to assess climate impact. Suggested region-specific strategies to boost productivity. Outcome: Improved agricultural policymaking and sustainability.',
    },
    {
      title: 'Catalogue Website Development',
      description:
        'Designed and developed a responsive WordPress website. Showcased product catalog with user-friendly navigation. Outcome: Enhanced digital presence for the chemical business. Website Link: biorisechem.com',
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-content-box">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
