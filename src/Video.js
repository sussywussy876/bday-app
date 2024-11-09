// VideoPage.js
import React from 'react';
import videoSrc from './kaviVid1.mp4';

const Video = () => {
  return (
    <>
      <h1>HAPPY BDAY BABY I LOVE YOU SO MUCH ENJOY!!! 😘</h1>
    <div style={styles.container}>
      <video autoPlay muted loop style={styles.video}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
    
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    maxWidth: '90%', // Adjust width as needed
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Optional shadow for style
  },
};

export default Video;
