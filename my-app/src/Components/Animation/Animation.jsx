// import React, { useState, useEffect } from 'react';

// const animationSequence = [
//   {
//     text: "Skycūru\nWelcome to the world above the clouds!\nYour adventure awaits",
//     images: []
//   },
//   {
//     text: "Welcome to the world above the clouds!\nYour adventure awaits",
//     images: []
//   },
//   {
//     text: "Mastering Your\nJourney",
//     images: []
//   },
//   {
//     text: "SkyGuru\nWelcome to the world above the cloud\nYour adventna owals",
//     images: []
//   },
//   {
//     text: "88\nSkyGuru\n000\nAttention Passengers",
//     images: []
//   }
// ];

// function Animation() {
//   const [currentFrame, setCurrentFrame] = useState(0);

//   useEffect(() => {
//     const animate = () => {
//       setCurrentFrame((prevFrame) => (prevFrame + 1) % animationSequence.length);
//     };
//     const intervalId = setInterval(animate, 1000); // 1 second interval
//     return () => clearInterval(intervalId);
//   }, []);

//   const frame = animationSequence[currentFrame];

//   return (
//     <div className="animation-container">
//       <h1>{frame.text}</h1>
//       {frame.images.map((image, index) => (
//         <img key={index} src={image} alt="" />
//       ))}
//     </div>
//   );
// }

// export default Animation;

import React, { useState } from 'react';
import './AirplaneWindow.css';

const Animation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWindowClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`airplane-window ${isOpen ? 'open' : ''}`} onClick={handleWindowClick}>
      <img src="airplane-window-image.jpg" alt="Airplane Window" />
      {isOpen && <WindowContent />}
    </div>
  );
};

const WindowContent = () => {
  return (
    <div className="window-content">
      <img src="image1.png" alt="Image 1" />
      <img src="image2.png" alt="Image 2" />
    </div>
  );
};

export default Animation;