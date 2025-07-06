// =============================================
// ✅ RIT Quiz App Full Source Code
// =============================================

// ---------- App.js ----------
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import VideoPlayer from './VideoPlayer';
import Progress from './Progress';
import JavaQuiz from './JavaQuiz';
import CssQuiz from './CssQuiz';
import PythonQuiz from './PythonQuiz';
import HtmlQuiz from './HtmlQuiz';
import Leaderboard from './Leaderboard';
import AdminPanel from './AdminPanel';
import Home from './Home';
import logo from './rit-logo.jpg';

const linkStyle = { color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: '500' };

function App() {
  return (
    <Router>
      <div style={{ background: '#003366', color: 'white', padding: '10px', textAlign: 'center' }}>
        <img src={logo} alt="RIT" style={{ width: '100%', maxHeight: '280px', objectFit: 'cover', borderRadius: '5px' }} />
        <span style={{ fontSize: '24px', fontWeight: 'bold', display: 'block', marginTop: '10px' }}>Roorkee Institute of Technology</span>
        <nav style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/login" style={linkStyle}>Login</Link>
          <Link to="/video" style={linkStyle}>Course</Link>
          <Link to="/quiz/java" style={linkStyle}>Java Quiz</Link>
          <Link to="/quiz/css" style={linkStyle}>CSS Quiz</Link>
          <Link to="/quiz/python" style={linkStyle}>Python Quiz</Link>
          <Link to="/quiz/html" style={linkStyle}>HTML Quiz</Link>
          <Link to="/progress" style={linkStyle}>Progress</Link>
          <Link to="/leaderboard" style={linkStyle}>Leaderboard</Link>
          <Link to="/admin" style={linkStyle}>Admin</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/quiz/java" element={<JavaQuiz />} />
        <Route path="/quiz/css" element={<CssQuiz />} />
        <Route path="/quiz/python" element={<PythonQuiz />} />
        <Route path="/quiz/html" element={<HtmlQuiz />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
