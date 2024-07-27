import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Mainbanner.css'
function Mainbanner() {
  return (
    <div className='backg'>
        <Container>
            <Row>
                <Col md={4} className='banner-main-hd'>
                <h1>Mastering Your Journey</h1>
                <p>Let us help you explore the world's wonders in a way that speaks to your heart. Your perfect journey starts here!</p>
                </Col>
            </Row>
            {/* <Row style={{color:'white',marginLeft:'5%',marginTop:'12%'}}>  */}
            <Row style={{marginTop:'7%'}}> 
                <p style={{color:'white',fontSize:'14px'}}><strong>Popular Place :</strong> Bali, Istanbul, Rome, Paris.</p>
                </Row>
        </Container>
    </div>
  )
}

export default Mainbanner
