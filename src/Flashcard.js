import React, { useRef, useState, useEffect } from 'react';

export default function Flashcard({ flashcard, updateFlashcardStatus, onCardModified }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState('initial');
  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    try {
      const frontHeight = frontEl.current.getBoundingClientRect().height;
      const backHeight = backEl.current.getBoundingClientRect().height;
      setHeight(Math.max(frontHeight, backHeight, 100));
    } catch (error) {
      console.error('Error setting max height:', error);
    }
  }

  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options]);
  useEffect(() => {
    try {
      window.addEventListener('resize', setMaxHeight);
      return () => window.removeEventListener('resize', setMaxHeight);
    } catch (error) {
      console.error('Error adding/removing resize event listener:', error);
    }
  }, []);

  const handleStatusChange = (newStatus) => {
    try {
      updateFlashcardStatus(flashcard.id, newStatus);
      onCardModified(flashcard.id);
    } catch (error) {
      console.error('Error updating flashcard status:', error);
    }
  };
  
  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
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
      </div>
      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
}