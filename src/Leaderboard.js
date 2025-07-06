// ---------- Leaderboard.js ----------
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';

function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const q = query(collection(db, 'quizScores'), orderBy('score', 'desc'), limit(20));
      const snapshot = await getDocs(q);
      const scores = snapshot.docs.map(doc => doc.data());
      setData(scores);
    };
    fetchScores();
  }, []);

  const subjects = ['Java Quiz', 'CSS Quiz', 'Python Quiz', 'HTML Quiz'];

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2 style={{ color: '#003366' }}>🏆 Quiz Leaderboard</h2>
      {subjects.map(subject => (
        <div key={subject} style={{ marginTop: '30px' }}>
          <h3>{subject}</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter(entry => entry.subject === subject)
                .slice(0, 5)
                .map((entry, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{entry.email}</td>
                    <td>{entry.score}</td>
                    <td>{new Date(entry.date).toLocaleDateString()}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

const tableStyle = {
  width: '80%',
  margin: '0 auto',
  borderCollapse: 'collapse',
  border: '1px solid #ccc',
  textAlign: 'left'
};

export default Leaderboard;
