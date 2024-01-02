import React, { useEffect, useState } from 'react';
import { fetchCards } from '../services/api';
export default FlashCardsPage;
const FlashCardsPage = () => {
const [cards, setCards] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCards();
      setCards(response.data);
    };

    fetchData();
}, 
[]);}
