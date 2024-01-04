import React, { useState } from 'react';

export default function AddFlashcardModal({ onSave, onCancel }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSave = () => {
    onSave({ question, answer });
    onCancel();
  };

  return (
    <div style={modalStyle}>
      <h2>Add New Flashcard</h2>
      <label>
        Question:
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      <label>
        Answer:
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
