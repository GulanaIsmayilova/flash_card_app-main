import React, { useState } from 'react';
import Flashcard from './Flashcard';

export default function FlashCardsPage({ flashcards }) {
  const [modifiedCards, setModifiedCards] = useState([]);

  const updateFlashcardStatus = (cardId, newStatus) => {
    setModifiedCards((prevModifiedCards) => [...prevModifiedCards, cardId]);
  };
  const onCardModified = (cardId) => {
    console.log(`Card with ID ${cardId} was modified.`);
  };

  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          flashcard={flashcard}
          updateFlashcardStatus={updateFlashcardStatus}
          onCardModified={onCardModified}
        />
      ))}
    </div>
  );
}