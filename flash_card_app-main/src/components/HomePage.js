import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1',
    link: 'https://github.com/yourusername/project1',
  },
 
];

const HomePage = () => {
  return (
    <div>
      <h1>Welcome </h1>
      <p>
        This is a flashcard application
      </p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.title}</strong>: {project.description}{' '}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              [Link]
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;