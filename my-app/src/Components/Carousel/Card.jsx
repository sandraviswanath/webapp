

// import React, { useState } from 'react';

// import bali from '../../images/card1.jpg';
// import nyc from '../../images/card2.jpg';
// import couple from '../../images/card3.jpg';
// import couple2 from '../../images/card4.jpg';
// import bali2 from '../../images/card5.jpg';
// import nyc2 from '../../images/card6.avif';
// import './Card.css';
// import { Col, Container, Row } from 'react-bootstrap';

// function Card() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: bali,
//       title: 'Bali, Indonesia',
//       description: 'Bali is a beautiful tourist spot and is visited by many travelers.',
//     },
//     {
//       image: couple,
//       title: 'Couple Exploring',
//       description: 'A couple explores a new city, capturing memories on camera.',
//     },
//     {
//       image: nyc,
//       title: 'New York City',
//       description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
//     },
//     {
//         image: couple2,
//         title: 'New York City',
//         description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
//       },
//       {
//         image: bali2,
//         title: 'New York City',
//         description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
//       },
//       {
//         image: nyc2,
//         title: 'New York City',
//         description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
//       },
//     // Add more slides here if you have more images
//   ];

//   const slidesPerPage = 3;
//   const totalPages = Math.ceil(slides.length / slidesPerPage);

//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % totalPages);
//   };

//   const handlePreviousSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + totalPages) % totalPages);
//   };

//   // Calculate the visible slides based on the current slide
//   const visibleSlides = slides.slice(currentSlide * slidesPerPage, (currentSlide + 1) * slidesPerPage);

//   return (
//     <div className="cardapp">
//       {/* <div className="header"> */}
//       <Container className="me-auto header" style={{width:'50%'}}>
        
            
//             <h1>Explore new worlds with exotic natural scenery</h1>
//         <p>Explore the world with what you love beautiful natural beauty.</p>
       
//       </Container>
        
      
//       {/* </div> */}
//       <div className="content">
//       <div className="nav">
//           <span className="left-arrow shadow p-3 mb-5 bg-white rounded" onClick={handlePreviousSlide}>&lt;</span>
//           <span className="right-arrow shadow-lg p-3 mb-5 bg-white rounded" onClick={handleNextSlide}>&gt;</span>
//         </div>
//         <div className="cards">
//           {visibleSlides.map((slide, index) => (
//             <div className="card" key={index} 
//             onMouseOver={() => {
//               document.querySelector(`.card-content[data-index="${index}"]`).style.display = 'block';
//             }}
//             onMouseOut={() => {
//               document.querySelector(`.card-content[data-index="${index}"]`).style.display = 'none';
//             }}>
//               <img src={slide.image} alt={slide.title} />
//               <div className="card-content" data-index={index} style={{ display: 'none' }}>
//                 <h3>{slide.title}</h3>
//                 <p>{slide.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;







import React, { useState } from 'react';

import bali from '../../images/card3.jpg';
import nyc from '../../images/card2.jpg';
import couple from '../../images/card1.jpg';
import couple2 from '../../images/card4.jpg';
import bali2 from '../../images/card5.jpg';
import nyc2 from '../../images/card6.avif';
import './Card.css';
import { Col, Container, Row } from 'react-bootstrap';

function Card() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    
    {
      image: couple,
      title: 'Couple Exploring',
      description: 'A couple explores a new city, capturing memories on camera.',
    },
    {
        image: bali,
        title: 'Bali, Indonesia',
        description: 'Bali is a beautiful tourist spot and is visited by many travelers.',
      },
    {
      image: nyc,
      title: 'New York City',
      description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
    },
    {
        image: couple2,
        title: 'New York City',
        description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
      },
      {
        image: bali2,
        title: 'New York City',
        description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
      },
      {
        image: nyc2,
        title: 'New York City',
        description: 'The iconic skyline of New York City, with the Statue of Liberty in the foreground.',
      },
    // Add more slides here if you have more images
  ];

  const slidesPerPage = 3;
  const totalPages = Math.ceil(slides.length / slidesPerPage);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalPages);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalPages) % totalPages);
  };

  // Calculate the visible slides based on the current slide
  const visibleSlides = slides.slice(currentSlide * slidesPerPage, (currentSlide + 1) * slidesPerPage);

  return (
    <div className="cardapp">
      {/* <div className="header"> */}
      <Container className="me-auto header" style={{width:'50%'}}> 
     <h1>Explore new worlds with exotic natural scenery</h1>
        <p>Explore the world with what you love beautiful natural beauty.</p>
       
      </Container>
        
      
      {/* </div> */}
      <div className="content">
      <div className="nav1">
          <span className="left-arrow shadow p-3 mb-5 bg-white rounded" onClick={handlePreviousSlide}>&lt;</span>
         
          <span className="right-arrow shadow-lg p-3 mb-5 bg-white rounded" onClick={handleNextSlide}>&gt;</span>
        </div>
        <div className="cards">
          {visibleSlides.map((slide, index) => (
            <div className="card" key={index} 
            onMouseEnter={() => {
              document.querySelector(`.card-content[data-index="${index}"]`).style.display = 'block';
              document.querySelector(`.card-image[data-index="${index}"]`).style.transform = 'translateY(-10px)'; 
            }}
            onMouseLeave={() => {
              document.querySelector(`.card-content[data-index="${index}"]`).style.display = 'none';
              document.querySelector(`.card-image[data-index="${index}"]`).style.transform = 'translateY(0)'; 
            }}>
              <div className="card-image" data-index={index}>
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className="card-content" data-index={index} style={{ display: 'none' }}>
                <h3 style={{color:'#116cf5'}}>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
       
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;



   
