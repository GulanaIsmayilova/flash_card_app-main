import React, { useState } from 'react';
import Flashcard from './Flashcard';
import EditFlashcardModal from './EditFlashcardModal';

export default function FlashCardsPage({ flashcards }) {
  const [modifiedCards, setModifiedCards] = useState([]);
  const [editingFlashcard, setEditingFlashcard] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Last Modified');

  const updateFlashcardStatus = (cardId, newStatus) => {
    setModifiedCards((prevModifiedCards) => [...prevModifiedCards, cardId]);
  };

  const onCardModified = (cardId) => {
    console.log(`Card with ID ${cardId} was modified.`);
  };

  const filteredFlashcards = flashcards.filter((flashcard) => {
    if (filterStatus === 'All') {
      return true;
    } else {
      return flashcard.status === filterStatus;
    }
  });

  const searchedFlashcards = filteredFlashcards.filter((flashcard) => {
    const searchRegex = new RegExp(searchTerm, 'i');
    return searchRegex.test(flashcard.question) || searchRegex.test(flashcard.answer);
  });

  const sortedFlashcards = getSortedFlashcards(searchedFlashcards);

  return (
    <div>
      <div>
        Filter by Status:{' '}
        <select value={filterStatus} onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Learned">Learned</option>
          <option value="Want to Learn">Want to Learn</option>
          <option value="Noted">Noted</option>
        </select>
      </div>
      <div>

      <div className="card-grid">
        {sortedFlashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.id}
            flashcard={flashcard}
            updateFlashcardStatus={updateFlashcardStatus}
            onCardModified={onCardModified}
            onEdit={(flashcard) => setEditingFlashcard(flashcard)}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}