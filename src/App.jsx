import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import InteriorDesign from './pages/InteriorDesign'
import Softwares from './pages/Softwares'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interior" element={<InteriorDesign />} />
        <Route path="/softwares" element={<Softwares />} />
      </Routes>
     
    </>
  )
}

export default App
