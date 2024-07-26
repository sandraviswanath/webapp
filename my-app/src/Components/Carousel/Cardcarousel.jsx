import React, { useState } from 'react';
import Slider from 'react-slick';

import { FaLongArrowAltRight } from "react-icons/fa";
import { Container } from 'react-bootstrap';

function Cardcarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
    
        {
          image: 'http://www.w3.org/2000/svg',
          title: 'Best Service',
          description: 'Beyond just a trip; we are all about crafting unforgettable experiences. With our warm smiles and personalized attention, every moment of your journey is stress-free and memorable.',
        },
        {
            image: 'http://www.w3.org/2000/svg',
            title: 'Best Price Assurance',
            description: 'Worried about breaking the bank? Fear not! At Sky Guru Travels, we promise the best prices for your dream adventures. Get ready for unbeatable deals without compromising on quality',
          },
        {
          image: 'http://www.w3.org/2000/svg',
          title: 'Best Lodging Choices',
          description: 'From cozy hideaways to luxurious resorts, wehave handpicked the finest accommodations just for you. Rest easy knowing that wherever you lay your head, itwill be a perfect match for your style and comfort.',
        },
        
        // Add more slides here if you have more images
      ];
    
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

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
    // <div className="banner-app">
    //   <div className="con-banner">
    //     <div className="con-header">
    //       <h1 style={{ fontWeight: '600', fontSize: '24px' }}>Why Sky Guru?</h1>
    //       <p>Vacations are special, and you deserve to spend them the right way!</p>
    //     </div>
    //     <Slider {...settings}>
    //       <div className="con-card">
    //         <div className="con-icon">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-16h-5v16zm-3 8H15v-4H9v4h3zm-6 4h12v-16h-12v16z" />
    //           </svg>
    //         </div>
    //         <div className='content-div'>
    //           <h2>Best Service</h2>
    //           <p>Beyond just a trip; we are all about crafting unforgettable experiences. With our warm smiles and personalized attention, every moment of your journey is stress-free and memorable.</p>
    //           <button>Learn More <FaLongArrowAltRight style={{ fontSize: '20px' }} /></button>
    //         </div>
    //       </div>
    //       <div className="con-card">
    //         <div className="con-icon">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 4c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
    //           </svg>
    //         </div>
    //         <div className='content-div'>
    //           <h2>Best Price Assurance</h2>
    //           <p>Worried about breaking the bank? Fear not! At Sky Guru Travels, we promise the best prices for your dream adventures. Get ready for unbeatable deals without compromising on quality.</p>
    //           <button>Learn More <FaLongArrowAltRight style={{ fontSize: '20px' }} /></button>
    //         </div>
    //       </div>
    //       <div className="con-card">
    //         <div className="con-icon">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3-7 3V5z" />
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    //           </svg>
    //         </div>
    //         <div className='content-div'>
    //           <h2>Best Lodging Choices</h2>
    //           <p>From cozy hideaways to luxurious resorts, we've handpicked the finest accommodations just for you. Rest easy knowing that wherever you lay your head, it'll be a perfect match for your style and comfort.</p>
    //           <button>Learn More <FaLongArrowAltRight style={{ fontSize: '20px' }} /></button>
    //         </div>
    //       </div>
    //     </Slider>
    //   </div>
    // </div>
    <div className="banner-app">
      {/* <div className="header"> */}
      <Container className="me-auto con-banner" style={{width:'50%'}}>
        
            
      <div className="con-header">
        <h1 style={{ fontWeight: '600', fontSize: '24px' }}>Why Sky Guru?</h1>
       <p>Vacations are special, and you deserve to spend them the right way!</p>
       </div>
       
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
                <button>Learn More <FaLongArrowAltRight style={{ fontSize: '20px' }} /></button>
              </div>
       
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cardcarousel;
