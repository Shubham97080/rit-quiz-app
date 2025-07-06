import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Courses from './Courses';
import VideoPlayer from './VideoPlayer';
import Quiz from './Quiz';
import Progress from './Progress';

function App() {
  return (
    <Router>
      <header className="header">
        <h1>RIT - Roorkee Institute of Technology</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/video">Video</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<div className="main-section"><h2>Welcome to RIT</h2></div>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2025 RIT - Roorkee Institute of Technology. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
