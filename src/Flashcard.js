import React, { useRef, useState, useEffect } from 'react';
import EditFlashcardModal from './EditFlashcardModal';

export default function Flashcard({
  flashcard,
  updateFlashcardStatus,
  onCardModified,
  onEdit,
  onDelete,
  searchTerm,
}) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState('initial');
  const [statusMessage, setStatusMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options]);
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight);
    return () => window.removeEventListener('resize', setMaxHeight);
  }, []);

  const handleStatusChange = (newStatus) => {
    updateFlashcardStatus(flashcard.id, newStatus);
    onCardModified(flashcard.id);

    let message = '';
    switch (newStatus) {
      case 'Learned':
        message = 'Status: Learned';
        break;
      case 'Want to Learn':
        message = 'Status: Want to Learn';
        break;
      case 'Noted':
        message = 'Status: Noted';
        break;
      default:
        message = '';
    }
    setStatusMessage(message);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    onDelete(flashcard.id);
  };

  const handleSaveEdit = (editedQuestion, editedAnswer) => {
    onEdit(flashcard.id, editedQuestion, editedAnswer);
    setIsEditing(false);
  };

  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <div className={`card ${flip ? 'flip' : ''}`} style={{ height: height }} onClick={handleClick}>
      <div className="front" ref={frontEl}>
        {isEditing ? (
          <EditFlashcardModal
            flashcard={flashcard}
            onSave={handleSaveEdit}
            onClose={() => setIsEditing(false)}
          />
        ) : (
          <>
            {flashcard.question}
            <div className="flashcard-options">
              {flashcard.options.map((option) => (
                <div className="flashcard-option" key={option}>
                  {option}
                </div>
              ))}
            </div>
            <p>Last Modified: {flashcard.lastModified}</p>
            <div className="status-buttons">
              <button onClick={() => handleStatusChange('Learned')}>Learned</button>
              <button onClick={() => handleStatusChange('Want to Learn')}>Want to Learn</button>
              <button onClick={() => handleStatusChange('Noted')}>Noted</button>
            </div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            {statusMessage && <p>{statusMessage}</p>}
          </>
        )}
      </div>
      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
}
