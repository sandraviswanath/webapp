import React from 'react'

import { BrowserRouter, Route, Routes }from 'react-router-dom'
import MultiSlider from './Components/MultiSlider'
import AirplaneView from './Components/AirplaneView'
import Animation from './Components/Animation/Animation'
import Cardcarousel from './Components/Carousel/Cardcarousel'
import Card from './Components/Carousel/Card'
import BannerCard from './Components/Bannercard/BannerCard'


function Router() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
      <Route path='/' element={<><MultiSlider/></>}></Route>
      <Route path='/air' element={<><AirplaneView/></>}></Route>
      <Route path='/ani' element={<><Animation/></>}></Route>
      {/* <Route path='/card' element={<><Cardcarousel/></>}></Route> */}
      <Route path='/card' element={<><Card/><BannerCard/></>}></Route>
      <Route path='/bannercard' element={<><BannerCard/></>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
