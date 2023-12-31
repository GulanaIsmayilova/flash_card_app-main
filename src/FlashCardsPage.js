import React, { useEffect, useState } from 'react';
import { fetchCards } from '../services/api';

const FlashCardsPage = () => {
const [cards, setCards] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCards();
      setCards(response.data);
    };

    fetchData();
}, 
[]);
export default FlashCardsPage;