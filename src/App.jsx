import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Services from './components/Services'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
