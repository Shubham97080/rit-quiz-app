// ---------- QuizComponent.js ----------
import React, { useState } from 'react';
import { db, auth } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import logo from './rit-logo.jpg';

export default function QuizComponent({ questions, title }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = async (option) => {
    if (option === questions[current].correct) setScore(score + 1);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
      if (auth.currentUser) {
        const userRef = doc(db, 'quizScores', `${auth.currentUser.uid}-${title}`);
        await setDoc(userRef, {
          email: auth.currentUser.email,
          subject: title,
          score: score + (option === questions[current].correct ? 1 : 0),
          date: new Date().toISOString()
        });
      }
    }
  };

  const generateCertificate = async () => {
    const element = document.getElementById('certificate');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10, 190, 120);
    pdf.save(`${title}_certificate.pdf`);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2 style={{ color: '#003366' }}>{title}</h2>
      {showResult ? (
        <>
          <p>Your Score: {score}/{questions.length}</p>
          {score >= 7 && (
            <div>
              <div id="certificate" style={certStyle}>
                <img src={logo} alt="RIT Logo" style={{ width: '120px', marginBottom: '20px' }} />
                <h2>🎓 Certificate of Completion</h2>
                <p>This certifies that</p>
                <h3>{auth.currentUser?.email}</h3>
                <p>has successfully completed the</p>
                <h3>{title}</h3>
                <p>with a score of <strong>{score}/{questions.length}</strong></p>
                <p>Date: {new Date().toLocaleDateString()}</p>
                <p style={{ fontSize: '12px' }}>Roorkee Institute of Technology</p>
              </div>
              <button onClick={generateCertificate} style={btn}>Download Certificate</button>
            </div>
          )}
          <button onClick={restart} style={btn}>Retake Quiz</button>
        </>
      ) : (
        <>
          <p>Question {current + 1} of {questions.length}</p>
          <h3>{questions[current].question}</h3>
          {questions[current].options.map((opt, idx) => (
            <button key={idx} onClick={() => handleAnswer(opt)} style={btn}>{opt}</button>
          ))}
        </>
      )}
    </div>
  );
}

const btn = {
  margin: '10px',
  padding: '10px 20px',
  backgroundColor: '#003366',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const certStyle = {
  backgroundColor: '#fdf6e3',
  padding: '20px',
  margin: '20px auto',
  width: '80%',
  border: '2px solid #003366',
  borderRadius: '10px',
  textAlign: 'center'
};
