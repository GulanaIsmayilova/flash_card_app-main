import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      </section>
    </div>
  );
};

export default HomePage;
