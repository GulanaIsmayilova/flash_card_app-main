import React, { useState } from 'react';
import Flashcard from './Flashcard';

export default function FlashCardsPage({ flashcards }) {
  const [modifiedCards, setModifiedCards] = useState([]);

  const updateFlashcardStatus = (cardId, newStatus) => {
    console.log(`Updating card ${cardId} status to ${newStatus}`);

  
    setModifiedCards([...modifiedCards, cardId]);
  };

  return (
    <div className="card-grid">
      {flashcards && flashcards.map((flashcard) => (
        <Flashcard
          flashcard={flashcard}
          key={flashcard.id}
          updateFlashcardStatus={updateFlashcardStatus}
        />
      ))}
      {modifiedCards.length > 0 && (
        <p>Modified Cards: {modifiedCards.join(', ')}</p>
      )}
    </div>
  );
}