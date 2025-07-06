import React from 'react';

const SkillsPage = () => {
  const skills = [
    { name: 'React.js', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Express.js', icon: 'fas fa-server' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'C', icon: 'fas fa-code' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-leaf' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'NPM', icon: 'fab fa-npm' },
    { name: 'Redux', icon: 'fas fa-layer-group' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'VS Code', icon: 'fas fa-code' },
    { name: 'Postman', icon: 'fas fa-paper-plane' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'JSON', icon: 'fas fa-file-code' },
    { name: 'REST APIs', icon: 'fas fa-plug' },
    { name: 'JWT', icon: 'fas fa-key' }
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and development tools.
          </p>
        </div>

        {/* Skills Grid - 5 per row */}
        <div className="skills-grid-5">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card-custom group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="icon-container mb-4">
                  <i className={`${skill.icon} skill-icon`}></i>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage; 