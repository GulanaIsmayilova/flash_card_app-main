import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Flash Card Application',
    description: 'Flash Card App used for educational purposes, where users can create, view, edit, and delete flash cards. Each card contains information on both sides and can be used for learning or memorization.',
    link: 'https://github.com/GulanaIsmayilova/flash_card_app-main.git',
  },
  {
    id: 2,
    title: 'Product Catalog Application',
    description: 'Flash Card App used for educational purposes, where users can create, view, edit, and delete flash cards. Each card contains information on both sides and can be used for learning or memorization.',
    link: 'https://github.com/GulanaIsmayilova/Assignment2_.git',
  },
  {
    id: 3,
    title: 'Personal Website',
    description: 'Flash Card App used for educational purposes, where users can create, view, edit, and delete flash cards. Each card contains information on both sides and can be used for learning or memorization.',
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

         <Link to="/contact">
          <button className="cta-button">Contact Us</button>
        </Link>
      </footer>
    </div>
  );
};

export default HomePage;