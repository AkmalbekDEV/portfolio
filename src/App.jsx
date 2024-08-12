import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Aos from 'aos'

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App