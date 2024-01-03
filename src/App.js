import React, { useState, useEffect } from 'react';
import FlashCardsPage from './FlashCardsPage';
import HomePage from './HomePage';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10');

        if (response && response.data && response.data.results) {
          setFlashcards(
            response.data.results.map((questionItem, index) => {
              const answer = decodeString(questionItem.correct_answer);
              const options = [
                ...questionItem.incorrect_answers.map((a) => decodeString(a)),
                answer,
              ];
              return {
                id: `${index}-${Date.now()}`,
                question: decodeString(questionItem.question),
                answer: answer,
                options: options.sort(() => Math.random() - 0.5),
                lastModified: new Date().toISOString(), 
                status: 'Want to Learn', 
              };
            })
          );
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.error('Rate limit exceeded. Please try again later.');
        } else {
          console.error('Error fetching data:', error.message);
        }
      }
    };

    fetchData();
  }, []);

  function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flashcards" element={<FlashCardsPage flashcards={flashcards} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
