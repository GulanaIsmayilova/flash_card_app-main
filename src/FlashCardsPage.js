import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './FlashCardsPage.css';

export default function FlashCardsPage({ flashcards }) {
  const [modifiedCards, setModifiedCards] = useState([]);

  const updateFlashcardStatus = (cardId, newStatus) => {
    setModifiedCards((prevModifiedCards) => [...prevModifiedCards, cardId]);
  };

  const onCardModified = (cardId) => {
    console.log(`Card with ID ${cardId} was modified.`);
  };

  const handleEditClick = (cardId) => {
    
    console.log(`Edit card with ID ${cardId}`);
  };

  const handleDeleteClick = (cardId) => {
   
    console.log(`Delete card with ID ${cardId}`);
  };

  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => (
        <div className="card-container" key={flashcard.id}>
          <Flashcard
            flashcard={flashcard}
            updateFlashcardStatus={updateFlashcardStatus}
            onCardModified={onCardModified}
          />
          <div className="card-actions">
            <button onClick={() => handleEditClick(flashcard.id)}>Edit</button>
            <button onClick={() => handleDeleteClick(flashcard.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}