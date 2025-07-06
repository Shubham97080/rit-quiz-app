import React from 'react';

function VideoPlayer() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Course Video: HTML Basics</h2>
      <video width="640" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
