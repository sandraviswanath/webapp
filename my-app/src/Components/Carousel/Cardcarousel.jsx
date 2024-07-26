import React from 'react'
import { Card, Carousel } from 'react-bootstrap'

function Cardcarousel() {
  return (
    <div>
      
    <h1 style={{textAlign:'center',color:'red',margin:'5px'}}>Carousel</h1>
         <div style={{display:'flex',flexWrap:'wrap'}}>
         
        
      <Card style={{ width: '18rem',margin:'10px' }}>
        <Carousel>
     
      <Carousel.Item>
        <img src='card1.jpeg' alt="" height={'200px'}/>
        </Carousel.Item>
   
    </Carousel>
      
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  
    </div>

    </div>
  )
}

export default Cardcarousel
