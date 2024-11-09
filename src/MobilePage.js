import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import kavi1 from './kavi1.jpg'; 
import kavi2 from './kavi2.jpg';
import kavi3 from './kavi3.jpg';
import kavi4 from './kavi4.jpg';
import kavi5 from './kavi5.jpg';
import kavi6 from './kavi6.jpg';
import kavi7 from './kavi7.jpg';
import kavi8 from './kavi8.jpg';

const MobilePage = () => {
  const cardContent = [
    {
      image: kavi1,
      message: "i love it when you lie down and your cute lil cheeks are squished against the bed, it makes me feel warm inside :)"
    },
    {
      image: kavi2,
      message: "i love your adorable smile when you're with me after I crack a lame ass joke, that's how i know you love me heehee"
    },
    {
      image: kavi3,
      message: "i love it when you give me lil kissies, your lips look so juicy and plump i wanna bite em :P"
    },
    {
      image: kavi7,
      message: "i love that you're so funny and goofy and quirk, you always crack me up (you're not funnier than me tho)"
    },
    {
      image: kavi8,
      message: "i love that you're so effortlessly sexy and gorgeous, i can't stop looking at you, youre such a goddess"
    },
    {
      image: kavi4,
      message: "i love your juicy fucking tits, i wanna motorboat them all night and twist your nipples while you moan"
    },
    {
      image: kavi5,
      message: "i love your sexy fucking dumptruck of an ass, you make me wanna spank and grope you 24/7, can i marry your tush?"
    },
    {
      image: kavi6,
      message: "i loved when you ordered me food and chai when i was sick and the way you always care for me when im in pain, youre the only one who listens to me :')"
    },
    
  ];
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>henlo kavi</h1>
      <h3>here are the things i love about you :3</h3>
      {cardContent.map((detail, index) => (
        <FlippableCard key={index} detail={detail} />
      ))}
       <button style={styles.button} onClick={() => navigate('/gift-page')}>
        Click here for your final surprise...
      </button>
    </div>
  );
};

const FlippableCard = ({ detail }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped(!flipped);

  return (
    <div style={styles.cardContainer} onClick={toggleFlip}>
      <div style={flipped ? { ...styles.card, transform: 'rotateY(180deg)' } : styles.card}>
        <div style={styles.cardFront}>
          <p style={styles.heartEmoji}>❤️</p>
        </div>
        <div style={styles.cardBack}>
          <div style={styles.cardBackContent}>
            <img
              src={detail.image} // Replace with your own image URL
              alt="Card Image"
              style={styles.cardImage}
            />
            <p style={styles.cardBackText}>{detail.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    minHeight: '100vh', // Ensure full viewport height
  },
  cardContainer: {
    perspective: '1000px', // Adds depth to the 3D effect
    margin: '10px 0',
  },
  card: {
    width: 'calc(100vw - 20px)', // Ensure card fits within the screen by subtracting margin
    height: '300px', // Fixed height for better look
    padding: '20px',
    margin: '10px 0',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.6s', // Smooth flip transition
    transformStyle: 'preserve-3d', // Keeps both sides visible when flipped
    position: 'relative',
    maxWidth: '600px', // Prevent the card from being too wide on larger screens
    boxSizing: 'border-box', // Ensure padding is included in the width/height calculation
  },
  cardFront: {
    backfaceVisibility: 'hidden', // Hides the back side when flipped
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Front color is white
    borderRadius: '8px',
  },
  heartEmoji: {
    fontSize: '80px', // Large heart emoji
    color: '#ff0000', // Red heart color for contrast
  },
  cardBack: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue', // Back color is light blue
    borderRadius: '8px',
    transform: 'rotateY(180deg)', // Back of the card
  },
  cardBackContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align image to the left
    padding: '20px',
  },
  cardImage: {
    width: '200px', 
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '20px', // Space between the image and text
  },
  cardBackText: {
    fontSize: '18px',
    color: '#333', // Dark text for better readability on light blue
  },
  message: {
    fontSize: '16px',
    color: '#fff', // White text for better visibility on red and blue
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '20px',
    color: '#fff',
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default MobilePage;
