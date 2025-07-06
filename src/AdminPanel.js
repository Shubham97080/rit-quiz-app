// ---------- AdminPanel.js ----------
import React, { useState } from 'react';
import { db, auth } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function AdminPanel() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correct, setCorrect] = useState('');
  const [subject, setSubject] = useState('java');
  const [message, setMessage] = useState('');

  const isAdmin = auth.currentUser?.email === 'admin@rit.com';

  const handleAddQuestion = async () => {
    if (!question || options.some(opt => !opt) || !correct) {
      setMessage('Please fill in all fields');
      return;
    }
    try {
      await addDoc(collection(db, `questions/${subject}/items`), {
        question,
        options,
        correct
      });
      setMessage('✅ Question added successfully!');
      setQuestion('');
      setOptions(['', '', '', '']);
      setCorrect('');
    } catch (error) {
      setMessage('❌ Error adding question: ' + error.message);
    }
  };

  if (!isAdmin) {
    return (
      <div style={{ padding: '30px', textAlign: 'center' }}>
        <h2>Unauthorized Access</h2>
        <p>This page is only accessible to RIT Admins.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ color: '#003366' }}>Admin Panel - Add Quiz Question</h2>
      <label>Subject:</label><br />
      <select value={subject} onChange={e => setSubject(e.target.value)} style={inputStyle}>
        <option value="java">Java</option>
        <option value="css">CSS</option>
        <option value="python">Python</option>
        <option value="html">HTML</option>
      </select>
      <label>Question:</label><br />
      <textarea
        value={question}
        onChange={e => setQuestion(e.target.value)}
        style={{ ...inputStyle, height: '80px' }}
      />
      {options.map((opt, idx) => (
        <div key={idx}>
          <label>Option {idx + 1}:</label><br />
          <input
            value={opt}
            onChange={e => {
              const newOptions = [...options];
              newOptions[idx] = e.target.value;
              setOptions(newOptions);
            }}
            style={inputStyle}
          />
        </div>
      ))}
      <label>Correct Answer:</label><br />
      <input value={correct} onChange={e => setCorrect(e.target.value)} style={inputStyle} />
      <button onClick={handleAddQuestion} style={buttonStyle}>Add Question</button>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '5px 0 15px',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  backgroundColor: '#003366',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default AdminPanel;
