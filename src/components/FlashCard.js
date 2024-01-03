import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ front, back, status, lastModified }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flash-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="front">
        <p>{front}</p>
      </div>
      <div className="back">
        <p>{back}</p>
        <div className="status">{`Status: ${status}`}</div>
        <div className="last-modified">{`Last Modified: ${lastModified}`}</div>
      </div>
    </div>
  );
};

export default FlashCard;
