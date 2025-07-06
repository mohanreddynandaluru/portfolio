import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Instagram Reel Saver & Reminder Extension',
      description: `Developed an Extension that allows users to save Instagram Reels with personalized notes and reminders, integrating Firebase Authentication and MongoDB for secure user management and data storage.`,
      "GitHub Link": 'https://github.com/mohanreddynandaluru/reel-saver-reminder/'
    },
    {
      title: 'Hello World App',
      description: `A basic React application that greets users with "Hello World" in various Indian languages and demonstrates "Hello World" programs in different programming languages.`,
      "GitHub Link": 'https://github.com/mohanreddynandaluru/Hello_World',
      "Live Link": 'https://hello-world-iota-sage.vercel.app/'
    },
    {
      title: 'NEWS APP',
      description: `Built a full-stack news website with user authentication and an admin dashboard. Used EJS templating and CSS for responsive UI and implemented RESTful APIs. Used MYSQL for storage of user information and article information. `,
      "GitHub Link": 'https://github.com/mohanreddynandaluru/news_app',
    },
    {
      title: 'Portfolio Website',
      description: `personal portfolio website built using React, Tailwind CSS, and Vite. It showcases my projects, skills, and contact information.`,
      "GitHub Link": 'https://github.com/mohanreddynandaluru/portfolio',
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="main-grid">
          {/* Projects Column */}
          <div className="projects-column">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    {project["Live Link"] && (
                      <a href={project["Live Link"]} className="demo-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                    {project["GitHub Link"] && (
                      <a href={project["GitHub Link"]} className="demo-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 