import React, { useState } from 'react';

export default function EditFlashcardModal({ flashcard, onSave, onClose }) {
  const [editedQuestion, setEditedQuestion] = useState(flashcard.question);
  const [editedAnswer, setEditedAnswer] = useState(flashcard.answer);

  const handleSave = () => {
    onSave(flashcard.id, editedQuestion, editedAnswer);
    onClose();
  };

  return (
    <div className="edit-modal">
      <h2>Edit Flashcard</h2>
      <label>
        Question:
        <input
          type="text"
          value={editedQuestion}
          onChange={(e) => setEditedQuestion(e.target.value)}
        />
      </label>
      <label>
        Answer:
        <input
          type="text"
          value={editedAnswer}
          onChange={(e) => setEditedAnswer(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}