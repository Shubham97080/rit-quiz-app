import React, { useState } from 'react';

function Progress() {
  const [videosWatched, setVideosWatched] = useState(3);
  const [quizzesCompleted, setQuizzesCompleted] = useState(1);

  const videoProgress = (videosWatched / 5) * 100;
  const quizProgress = (quizzesCompleted / 2) * 100;

  return (
    <div style={{ padding: '30px' }}>
      <h2>Progress Tracker</h2>
      <p>Videos Watched: {videosWatched}/5</p>
      <div style={{ background: '#ccc', borderRadius: '5px', height: '20px', marginBottom: '20px' }}>
        <div style={{ background: '#4caf50', width: `${videoProgress}%`, height: '100%', borderRadius: '5px' }}></div>
      </div>
      <p>Quizzes Completed: {quizzesCompleted}/2</p>
      <div style={{ background: '#ccc', borderRadius: '5px', height: '20px' }}>
        <div style={{ background: '#2196f3', width: `${quizProgress}%`, height: '100%', borderRadius: '5px' }}></div>
      </div>
    </div>
  );
}

export default Progress;
