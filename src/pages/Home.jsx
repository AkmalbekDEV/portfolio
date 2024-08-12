import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='mt-[104px]'>
        <Hero />
        <About />
        <Services />    
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home