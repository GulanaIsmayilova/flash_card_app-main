import React from 'react';
import FlashCardsPage from './FlashCardsPage';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const projects = [
  {
    id: 1,
    title: 'FlashCard Application',
    description: 'Flash Card App for educational purposes, where users can create, view, edit, and delete flash cards. Each card contains information on both sides and can be used for learning or memorization.',
    link: 'https://github.com/GulanaIsmayilova/flash_card_app-main.git',
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleGoToFlashcards = () => {
    navigate('/flashcards');
  };

  return (
    <div>
      <header>
        <h1>Welcome to Flash Card App</h1>
      </header>
      <section className="projects-list">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="cta-button">View Project</button>
            </a>
          </div>
        ))}
      </section>
      <footer>
        <p>Explore more projects and flashcards!</p>
        <button className="cta-button" onClick={handleGoToFlashcards}>
          Go to Flashcards
        </button>
      </footer>
    </div>
  );
};

export default HomePage;