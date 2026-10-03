import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/pages/home/Home'
import About from './component/pages/about/About'
import Services from'./component/pages/services/Services'
import Contact from'./component/pages/contact/Contact'
import Navbar from './component/navbar/Navbar'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
