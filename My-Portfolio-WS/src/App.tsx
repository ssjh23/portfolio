import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
//Component Import
import About from './screens/About'
import Skills from './screens/Skills'
import SideNavbar from './components/SideNavbar'
import Intro from './screens/Intro'
import Projects from './screens/Projects'
import Currently from './screens/Currently'
import Contact from './screens/Contact'

function App() {
  return (
    <BrowserRouter>
      <Intro/>
      <div className='grid grid-cols-8'>
        <SideNavbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Currently/>
        <Contact/>
      </div>
    </BrowserRouter>

  )
}

export default App
