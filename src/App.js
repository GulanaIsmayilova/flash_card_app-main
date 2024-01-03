import React, { useState, useEffect } from 'react';
import FlashCardsPage from './FlashCardsPage';
import HomePage from './HomePage';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10');
        if (response && response.data && response.data.results) {
          setFlashcards(
            response.data.results.map((questionItem, index) => {
              const answer = questionItem.incorrect_answer;
              const options = [
                ...questionItem.correct_answers.map((a)) =>(a),
                answer,
              ];
return()
        
                
export default App;
