import React, { useState } from 'react';
import '../App.css';

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const skills = {
    dataAnalytics: [
      { name: 'Data Analysis', level: 90, icon: 'fas fa-chart-line' },
      { name: 'Data Visualization', level: 85, icon: 'fas fa-chart-bar' },
      { name: 'Statistical Testing', level: 80, icon: 'fas fa-square-root-alt' },
      { name: 'Power BI', level: 75, icon: 'fas fa-chart-pie' },
      { name: 'Tableau', level: 85, icon: 'fas fa-table' },
      { name: 'Data Interpretation', level: 85, icon: 'fas fa-brain' }
    ],
    programming: [
      { name: 'Python', level: 90, icon: 'fab fa-python' },
      { name: 'SQL', level: 85, icon: 'fas fa-database' },
      { name: 'Data Structures', level: 80, icon: 'fas fa-code-branch' },
      { name: 'HTML/CSS', level: 85, icon: 'fab fa-html5' },
      { name: 'JavaScript', level: 80, icon: 'fab fa-js' }
    ],
    cloudInfra: [
      { name: 'AWS Services', level: 85, icon: 'fab fa-aws' },
      { name: 'Cloud Computing', level: 80, icon: 'fas fa-cloud' },
      { name: 'Cloud Security', level: 75, icon: 'fas fa-shield-alt' },
      { name: 'Database Design', level: 85, icon: 'fas fa-database' }
    ],
    aiMl: [
      { name: 'Artificial Intelligence', level: 80, icon: 'fas fa-robot' },
      { name: 'Machine Learning', level: 75, icon: 'fas fa-brain' },
      { name: 'Generative AI', level: 70, icon: 'fas fa-microchip' },
      { name: 'Computer Ethics', level: 85, icon: 'fas fa-balance-scale' }
    ],
    businessSkills: [
      { name: 'Project Management', level: 85, icon: 'fas fa-tasks' },
      { name: 'Commercial Thinking', level: 80, icon: 'fas fa-lightbulb' },
      { name: 'Presentation Skills', level: 90, icon: 'fas fa-desktop' },
      { name: 'Communication', level: 85, icon: 'fas fa-comments' }
    ]
  };

  const renderSkillList = (skillList, category) => {
    const isExpanded = expandedCategories[category];
    const displaySkills = isExpanded ? skillList : skillList.slice(0, 5);
    const hasMoreSkills = skillList.length > 5;

    return (
      <>
        <ul className="skill-list">
          {displaySkills.map((skill, index) => (
            <li key={index} className="skill-item">
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
              <div className="skill-level">
                <div className="skill-level-bar" style={{ width: `${skill.level}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
        {hasMoreSkills && (
          <button 
            className="show-more-btn"
            onClick={() => toggleCategory(category)}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </>
    );
  };

  return (
    <div className="skills-container">
      <div className="skills-content-box">
        <h1>Skills & Expertise</h1>
        <div className="skills-grid">
          <div className="skill-category">
            <h2><i className="fas fa-chart-line"></i> Data & Analytics</h2>
            {renderSkillList(skills.dataAnalytics, 'dataAnalytics')}
          </div>

          <div className="skill-category">
            <h2><i className="fas fa-code"></i> Programming & Development</h2>
            {renderSkillList(skills.programming, 'programming')}
          </div>

          <div className="skill-category">
            <h2><i className="fas fa-cloud"></i> Cloud & Infrastructure</h2>
            {renderSkillList(skills.cloudInfra, 'cloudInfra')}
          </div>

          <div className="skill-category">
            <h2><i className="fas fa-robot"></i> AI & Machine Learning</h2>
            {renderSkillList(skills.aiMl, 'aiMl')}
          </div>

          <div className="skill-category">
            <h2><i className="fas fa-briefcase"></i> Business & Project Management</h2>
            {renderSkillList(skills.businessSkills, 'businessSkills')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
