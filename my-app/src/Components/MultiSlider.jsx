import React from 'react'
import Slider from "react-slick";
import Nextarrow from './Nextarrow';
import { Card } from 'react-bootstrap';
function MultiSlider() {
    var settings = {
        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 3,
        // slidesToScroll: 3,
        infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <Nextarrow/>,
  prevArrow: <Nextarrow />
      };
  return (
    <div>
         <div className='collection-title'>Explore</div>
         
       <Slider {...settings}>
       {/* <div className='shadow-sm p-3 mb-5 bg-white rounded'>
    <div className='delivery-item-cover'>
      <img src='img1.png' className='delivery-item-image'/>
    </div>
    <div className='delivery-item-title'></div>
    </div> */}
   <Card style={{ width: '18rem' }}>
      <img src="img3.png" height={'200px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <img src="bird-1.webp" height={'200px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
     
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <img  src="img1.avif" height={'200px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>
      
    </Slider>
    </div>
  )
}

export default MultiSlider
