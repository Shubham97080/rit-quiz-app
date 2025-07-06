import React, { useState } from 'react';
import { db, auth } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

function Quiz() {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hot Mail", "How to Make Landing"],
      correct: "Hyper Text Markup Language"
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "Python"],
      correct: "CSS"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = async (option) => {
    if (option === questions[current].correct) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
      if (auth.currentUser) {
        const userRef = doc(db, "quizScores", auth.currentUser.uid);
        await setDoc(userRef, {
          email: auth.currentUser.email,
          score: score,
          date: new Date().toISOString()
        });
      }
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Quiz</h2>
      {showResult ? (
        <div>
          <h3>Quiz Completed!</h3>
          <p>Your Score: {score}/{questions.length}</p>
        </div>
      ) : (
        <>
          <h3>{questions[current].question}</h3>
          {questions[current].options.map((opt, idx) => (
            <button key={idx} onClick={() => handleAnswer(opt)} style={{ margin: '10px' }}>
              {opt}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default Quiz;
