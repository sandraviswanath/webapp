import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const AirplaneView = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowImages, setWindowImages] = useState([
    { url: 'img1.png', alt: 'Dubai Skyline' },
    { url: 'img2.png', alt: 'Eiffel Tower' },
    { url: 'img3.png', alt: 'Taj Mahal' },
  ]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
    }, 5000); // Change the interval as needed

    return () => clearInterval(animationInterval);
  }, []);

  const windowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <Container>
      <AnimatePresence>
        {isAnimating && (
          <WindowAnimation variants={windowVariants} initial="hidden" animate="visible" exit="exit" onExitComplete={() => setIsAnimating(false)}>
            <motion.div className="window">
              <img src={windowImages[0].url} alt={windowImages[0].alt} />
            </motion.div>
          </WindowAnimation>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isAnimating && (
          <WindowAnimation variants={windowVariants} initial="hidden" animate="visible" exit="exit" onExitComplete={() => setIsAnimating(false)} style={{ marginLeft: '200px' }}>
            <motion.div className="window">
              <img src={windowImages[1].url} alt={windowImages[1].alt} />
            </motion.div>
          </WindowAnimation>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isAnimating && (
          <WindowAnimation variants={windowVariants} initial="hidden" animate="visible" exit="exit" onExitComplete={() => setIsAnimating(false)} style={{ marginLeft: '400px' }}>
            <motion.div className="window">
              <img src={windowImages[2].url} alt={windowImages[2].alt} />
            </motion.div>
          </WindowAnimation>
        )}
      </AnimatePresence>
      <div className="content">
        <h2>Welcome to the world above the clouds!</h2>
        <p>Your adventure awaits.</p>
        <h3>Explore stunning destinations with Sky Guru Travels.</h3>
        <p>Fasten your seatbelts and get ready for an unforgettable journey.</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: sans-serif;
  .content {
    text-align: center;
    padding-top: 40px;
  }
`;

const WindowAnimation = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  .window {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default AirplaneView;
