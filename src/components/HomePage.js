import React from 'react';

const projects = [
  {
    id: 1,
    title: 'FlashCard Application',
    description: 'Flash Card App for educational purposes,where users can create, view, edit, and delete flash cards. Each card contains information on both sidesand can be used for learning or memorization.',
    link: 'https://github.com/GulanaIsmayilova/flash_card_app-main.git',
  },
];

const HomePage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is a flashcard application</p>
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