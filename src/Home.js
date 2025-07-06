// ---------- Home.js ----------
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './rit-logo.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
       <img
    src="/images/rit-banner.jpg"
    alt="RIT Official Banner"
    style={{
      width: '100%',
      maxHeight: '200px',
      objectFit: 'contain',
      marginBottom: '20px'
    }}
  />
      <h1 style={{ marginTop: '20px', fontSize: '2rem', color: '#003366' }}>
        Welcome to Roorkee Institute of Technology
      </h1>
      <p style={{ fontSize: '1.2rem' }}>
        Learn and grow with our interactive online learning platform.
      </p>
      <div style={{ marginTop: '30px' }}>
        <button onClick={() => navigate('/video')} style={buttonStyle}>Start Course</button>
        <button onClick={() => navigate('/quiz/java')} style={buttonStyle}>Java Quiz</button>
        <button onClick={() => navigate('/quiz/css')} style={buttonStyle}>CSS Quiz</button>
        <button onClick={() => navigate('/quiz/python')} style={buttonStyle}>Python Quiz</button>
        <button onClick={() => navigate('/quiz/html')} style={buttonStyle}>HTML Quiz</button>
        <button onClick={() => navigate('/progress')} style={buttonStyle}>Check Progress</button>
        <button onClick={() => navigate('/leaderboard')} style={buttonStyle}>View Leaderboard</button>
        <button onClick={() => navigate('/admin')} style={buttonStyle}>Admin Panel</button>
      </div>
      <div style={{ marginTop: '40px', color: '#555' }}>
        <h3>More Subjects Coming Soon:</h3>
        <p>AI, DBMS, and more!</p>
      </div>
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Roorkee Institute of Technology</p>
        <p style={{ fontSize: '14px' }}>Built by Shubham Kumar At Roorkee Institute of Technology</p>
      </footer>
    </div>
  );
}

const buttonStyle = {
  margin: '10px',
  padding: '12px 24px',
  backgroundColor: '#003366',
  color: 'white',
  fontSize: '16px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
};

const footerStyle = {
  marginTop: '50px',
  padding: '20px',
  backgroundColor: '#003366',
  color: 'white',
  borderRadius: '6px'
};

export default Home;
