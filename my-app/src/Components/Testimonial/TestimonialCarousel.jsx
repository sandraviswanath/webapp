// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import './Testimonial.css'; 

// function TestimonialCarousel() {
//     const [currentSlide, setCurrentSlide] = useState(0);


//   const testimonials = [
//     {
//       name: "Sara Jay",
//       role: "Traveller",
//       image: "profile1.avif", 
//       review: "Sky Guru Travels truly took the stress out of planning my adventure trip. From arranging accommodations to coordinating transportation, they handled every detail efficiently.",
//       rating: 5
//     },
//     {
//       name: "Cristian Daniel",
//       role: "Traveller",
//       image: "profile2.jpg", 
//       review: "As a solo traveler, I often worry about the logistics of navigating a new destination. However, with Sky Guru Travels, I felt completely at ease. Thanks to them, I was able to focus on soaking in the stunning landscapes in Bali.",
//       rating: 5
//     },
//     {
//       name: "Kausar Hasan",
//       role: "Traveller",
//       image: "profile1.avif", // Replace with actual image URL or path
//       review: "Sky Guru Travels made my business trip perfect. From arranging flights to securing accommodations close to my meetings, they handled it all with efficiency and professionalism. It was a relief knowing that I could focus on my work, confident that every logistical detail was expertly managed.",
//       rating: 5
//     }
//   ];

//   const slidesPerPage = 3;
//     const totalPages = Math.ceil(testimonials.length / slidesPerPage);

//     const handleNextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % totalPages);
//     };

//     const handlePreviousSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + totalPages) % totalPages);
//     };

//     const visibleSlides = testimonials.slice(currentSlide * slidesPerPage, (currentSlide + 1) * slidesPerPage);

//   return (
//     <div className="testimonial-section">
//       <div className="testimonial-header">
//         <h2>TESTIMONIAL</h2>
//         <h1>Our Traveler Tales</h1>
//         <p>Real stories, real smiles. Hear the stories where<br/> they share their Sky Guru experiences.</p>
//       </div>
//       {/* <Slider {...settings}> */}
//       <div className="nav1">
//                     <span className="left-arrow shadow p-3 mb-5 bg-white rounded" onClick={handlePreviousSlide}>&lt;</span>
//                     <span className="right-arrow shadow-lg p-3 mb-5 bg-white rounded" onClick={handleNextSlide}>&gt;</span>
//                 </div>
//         {visibleSlides.map((testimonial, index) => (
//           <div key={index} className="testimonial-card">
//             <img src={testimonial.image} alt={testimonial.name} className="testimonial-image"/>
//             <h3>{testimonial.name}</h3>
//             <h4>{testimonial.role}</h4>
//             <p>{testimonial.review}</p>
//             <div className="testimonial-rating">
//               {Array.from({ length: testimonial.rating }).map((_, idx) => (
//                 <span key={idx}>⭐</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       {/* </Slider> */}
//     </div>
//   );
// }

// export default TestimonialCarousel;

// without responsive

// import React, { useState } from 'react';
// import './Testimonial.css'; 
// import pro1 from '../../images/profile1.avif';
// import pro2 from '../../images/profile2.jpg';
// import pro3 from '../../images/profile3.avif';
// import pro4 from '../../images/profile4.avif';
// import pro5 from '../../images/profile5.avif';
// import pro6 from '../../images/profile6.avif';

// function TestimonialCarousel() {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const testimonials = [
//         {
//             name: "Sara Jay",
//             role: "Traveller",
//             image: pro2, 
//             review: "Sky Guru Travels truly took the stress out of planning my adventure trip. From arranging accommodations to coordinating transportation, they handled every detail efficiently.",
//             rating: 5
//         },
//         {
//             name: "Cristian Daniel",
//             role: "Traveller",
//             image: pro1, 
//             review: "As a solo traveler, I often worry about the logistics of navigating a new destination. However, with Sky Guru Travels, I felt completely at ease. Thanks to them, I was able to focus on soaking in the stunning landscapes in Bali.",
//             rating: 5
//         },
//         {
//             name: "Kausar Hasan",
//             role: "Traveller",
//             image: pro3, 
//             review: "Sky Guru Travels made my business trip perfect. From arranging flights to securing accommodations close to my meetings, they handled it all with efficiency and professionalism. It was a relief knowing that I could focus on my work, confident that every logistical detail was expertly managed.",
//             rating: 5
//         },
//         {
//             name: "Cristian Daniel",
//             role: "Traveller",
//             image: pro4, 
//             review: "As a solo traveler, I often worry about the logistics of navigating a new destination. However, with Sky Guru Travels, I felt completely at ease. Thanks to them, I was able to focus on soaking in the stunning landscapes in Bali.",
//             rating: 5
//         },
//         {
//             name: "Sara Jay",
//             role: "Traveller",
//             image: pro5, 
//             review: "Sky Guru Travels truly took the stress out of planning my adventure trip. From arranging accommodations to coordinating transportation, they handled every detail efficiently.",
//             rating: 5
//         },
//         {
//             name: "Kausar Hasan",
//             role: "Traveller",
//             image: pro6, 
//             review: "Sky Guru Travels made my business trip perfect. From arranging flights to securing accommodations close to my meetings, they handled it all with efficiency and professionalism. It was a relief knowing that I could focus on my work, confident that every logistical detail was expertly managed.",
//             rating: 5
//         },
//     ];

//     const slidesPerPage = 3;
//     const totalPages = Math.ceil(testimonials.length / slidesPerPage);

//     const handleNextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % totalPages);
//     };

//     const handlePreviousSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + totalPages) % totalPages);
//     };

//     const visibleSlides = testimonials.slice(currentSlide * slidesPerPage, (currentSlide + 1) * slidesPerPage);

//     return (
//         <div className="testimonial-section">
//             <div className='test-head-main'>
//                 <div  className="testimonial-header">
//                 <h2>TESTIMONIAL</h2>
//                 <h1>Our Traveler Tales</h1>
//                 <p>Real stories, real smiles. Hear the stories where<br/> they share their Sky Guru experiences.</p>
//                 </div>
//                 <div className="nav">
//                 <span className="left-arrow shadow p-3 mb-5 bg-white rounded" onClick={handlePreviousSlide}>&lt;</span>
//                 <span className="right-arrow shadow-lg p-3 mb-5 bg-white rounded" onClick={handleNextSlide}>&gt;</span>
//             </div>
//             </div>
            
//             <div className="testimonial-cards">
            
//                 {visibleSlides.map((testimonial, index) => (
//                     <div key={index} className="testimonial-card">
//                         <img src={testimonial.image} alt={testimonial.name} className="testimonial-image"/>
//                         <h3>{testimonial.name}</h3>
//                         <h4>{testimonial.role}</h4>
//                         <p>{testimonial.review}</p>
//                         <div className="testimonial-rating">
//                             {Array.from({ length: testimonial.rating }).map((_, idx) => (
//                                 <span key={idx}>⭐</span>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
             
//             </div>
           
//         </div>
//     );
// }

// export default TestimonialCarousel;
// responsive
import React, { useState } from 'react';
import './Testimonial.css'; 
import pro1 from '../../images/profile1.avif';
import pro2 from '../../images/profile2.jpg';
import pro3 from '../../images/profile3.avif';
import pro4 from '../../images/profile4.avif';
import pro5 from '../../images/profile5.avif';
import pro6 from '../../images/profile6.avif';

function TestimonialCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            name: "Sara Jay",
            role: "Traveller",
            image: pro2, 
            review: "Sky Guru Travels truly took the stress out of planning my adventure trip. From arranging accommodations to coordinating transportation, they handled every detail efficiently.",
            rating: 5
        },
        {
            name: "Cristian Daniel",
            role: "Traveller",
            image: pro1, 
            review: "As a solo traveler, I often worry about the logistics of navigating a new destination. However, with Sky Guru Travels, I felt completely at ease. Thanks to them, I was able to focus on soaking in the stunning landscapes in Bali.",
            rating: 5
        },
        {
            name: "Kausar Hasan",
            role: "Traveller",
            image: pro3, 
            review: "Sky Guru Travels made my business trip perfect. From arranging flights to securing accommodations close to my meetings, they handled it all with efficiency and professionalism. It was a relief knowing that I could focus on my work, confident that every logistical detail was expertly managed.",
            rating: 5
        },
        {
            name: "Cristian Daniel",
            role: "Traveller",
            image: pro4, 
            review: "As a solo traveler, I often worry about the logistics of navigating a new destination. However, with Sky Guru Travels, I felt completely at ease. Thanks to them, I was able to focus on soaking in the stunning landscapes in Bali.",
            rating: 5
        },
        {
            name: "Sara Jay",
            role: "Traveller",
            image: pro5, 
            review: "Sky Guru Travels truly took the stress out of planning my adventure trip. From arranging accommodations to coordinating transportation, they handled every detail efficiently.",
            rating: 5
        },
        {
            name: "Kausar Hasan",
            role: "Traveller",
            image: pro6, 
            review: "Sky Guru Travels made my business trip perfect. From arranging flights to securing accommodations close to my meetings, they handled it all with efficiency and professionalism. It was a relief knowing that I could focus on my work, confident that every logistical detail was expertly managed.",
            rating: 5
        },
    ];

    const slidesPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / slidesPerPage);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalPages);
    };

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalPages) % totalPages);
    };

    const visibleSlides = testimonials.slice(currentSlide * slidesPerPage, (currentSlide + 1) * slidesPerPage);

    return (
        <div className="testimonial-section">
            <div className='test-head-main' >
                <div className="testimonial-header">
                    <h2>TESTIMONIAL</h2>
                    <h1>Our Traveler Tales</h1>
                    <p>Real stories, real smiles. Hear the stories where<br /> they share their Sky Guru experiences.</p>
                </div>
                <div className="nav">
                    <span className="left-arrow shadow  bg-white rounded" onClick={handlePreviousSlide}>&lt;</span>
                    <span className="right-arrow shadow  bg-white rounded" onClick={handleNextSlide}>&gt;</span>
                </div>
            </div>
            <div className="testimonial-cards">
                {visibleSlides.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <h3>{testimonial.name}</h3>
                        <h4>{testimonial.role}</h4>
                        <div className="testimonial-rating"style={{textAlign:'start'}}>
                            {Array.from({ length: testimonial.rating }).map((_, idx) => (
                                <span key={idx}>⭐</span>
                            ))}
                        </div>
                        <p style={{textAlign:'start'}}>{testimonial.review}</p>
                        {/* <div className="testimonial-rating">
                            {Array.from({ length: testimonial.rating }).map((_, idx) => (
                                <span key={idx}>⭐</span>
                            ))}
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialCarousel;
