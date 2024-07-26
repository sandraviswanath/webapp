import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css'; // Create and style this CSS file as needed

function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "Sara Jay",
      role: "Traveller",
      image: "profile1.avif", 
      review: "Sky Guru Travels truly took the stress out of planning my adventure trip. From arranging accommodations to coordinating transportation, they handled every detail efficiently.",
      rating: 5
    },
    {
      name: "Cristian Daniel",
      role: "Traveller",
      image: "profile2.jpg", 
      review: "As a solo traveler, I often worry about the logistics of navigating a new destination. However, with Sky Guru Travels, I felt completely at ease. Thanks to them, I was able to focus on soaking in the stunning landscapes in Bali.",
      rating: 5
    },
    {
      name: "Kausar Hasan",
      role: "Traveller",
      image: "profile1.avif", // Replace with actual image URL or path
      review: "Sky Guru Travels made my business trip perfect. From arranging flights to securing accommodations close to my meetings, they handled it all with efficiency and professionalism. It was a relief knowing that I could focus on my work, confident that every logistical detail was expertly managed.",
      rating: 5
    }
  ];

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h2>TESTIMONIAL</h2>
        <h1>Our Traveler Tales</h1>
        <p>Real stories, real smiles. Hear the stories where<br/> they share their Sky Guru experiences.</p>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image"/>
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.role}</h4>
            <p>{testimonial.review}</p>
            <div className="testimonial-rating">
              {Array.from({ length: testimonial.rating }).map((_, idx) => (
                <span key={idx}>⭐</span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialCarousel;
