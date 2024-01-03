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

  const handleEdit = (cardId, editedQuestion, editedAnswer) => {
    console.log(`Editing flashcard with ID ${cardId}: ${editedQuestion}, ${editedAnswer}`);
  };

  const handleDelete = (cardId) => {
    console.log(`Deleting flashcard with ID ${cardId}`);
  };

  const handleSaveEdit = (cardId, editedQuestion, editedAnswer) => {
    console.log(`Saving edited flashcard with ID ${cardId}: ${editedQuestion}, ${editedAnswer}`);
    setEditingFlashcard(null);
  };

  const handleFilterChange = (newStatus) => {
    setFilterStatus(newStatus);
  };

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  const getSortedFlashcards = (unsortedFlashcards) => {
    switch (sortOption) {
      case 'Alphabetical Order':
        return unsortedFlashcards.slice().sort((a, b) => a.question.localeCompare(b.question));
      case 'Last Modified':
        return unsortedFlashcards.slice().sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
      case 'Status':
        return unsortedFlashcards.slice().sort((a, b) => a.status.localeCompare(b.status));
      default:
        return unsortedFlashcards;
    }
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
        Sort by:{' '}
        <select value={sortOption} onChange={(e) => handleSortChange(e.target.value)}>
          <option value="Alphabetical Order">Alphabetical Order</option>
          <option value="Status">Status</option>
          <option value="Last Modified">Last Modified</option>
        </select>
      </div>
      <div>
        Search by Text:{' '}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search text"
        />
      </div>
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
        {editingFlashcard && (
          <EditFlashcardModal
            flashcard={editingFlashcard}
            onSave={handleSaveEdit}
            onClose={() => setEditingFlashcard(null)}
          />
        )}
      </div>
    </div>
  );
}