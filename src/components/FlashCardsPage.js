import React, { useEffect, useState } from 'react';
import { fetchCards } from '../services/api';
import FlashCard from './FlashCard'; 
const FlashCardsPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCards();
      setCards(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="flash-cards-page">
      {cards.map((card) => (
        <FlashCard
          key={card.id}
          front={card.front}
          back={card.back}
          status={card.status}
          lastModified={card.lastModified}
        />
      ))}
    </div>
  );
};

export default FlashCardsPage;
