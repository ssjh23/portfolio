import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
//Component Import
import About from './screens/About'
import Skills from './screens/Skills'
import SideNavbar from './components/SideNavbar'
import HeroSection from './screens/HeroSection'
import Projects from './screens/Projects'
import Currently from './screens/Currently'
import Contact from './screens/Contact'

function App() {
  return (
    <BrowserRouter>
    <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth'>
      <HeroSection/>
      <div className='grid grid-col-7'>
        <SideNavbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Currently/>
        <Contact/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
