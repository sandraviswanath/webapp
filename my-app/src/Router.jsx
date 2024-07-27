import React from 'react'

import { BrowserRouter, Route, Routes }from 'react-router-dom'



import Card from './Components/Carousel/Card'
import BannerCard from './Components/Bannercard/BannerCard'
import TestimonialCarousel from './Components/Testimonial/TestimonialCarousel'
import Subscription from './Components/Subscribtion/Subscription'
import Footer from './Components/Footer/Footer'
import FooterBar from './Components/Footer/FooterBar'
import Mainbanner from './Components/Banner/Mainbanner'
import NavBar from './Components/Navbar/NavBar'
import AirplaneWindow from './Components/Animation/AirplaneWindow'




function Router() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
      <Route path='/' element={<><AirplaneWindow/><NavBar/><Mainbanner/><Card/><BannerCard/><TestimonialCarousel/><Subscription/><Footer/><FooterBar/></>}></Route>
      
      <Route path='/testimonial' element={<><TestimonialCarousel/></>}></Route>
      <Route path='/subscription' element={<><Subscription/></>}></Route>
      <Route path='/footer' element={<><Footer/></>}></Route>
     
    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
