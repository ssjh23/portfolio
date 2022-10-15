import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
//Component Import
import About from './screens/About'
import Skills from './screens/Skills'
import SideNavbar from './components/SideNavbar'

function App() {
  return (
    <BrowserRouter>
      <div className='grid grid-cols-6'>
        <SideNavbar/>
        <About/>
        <Skills/>
      </div>
    </BrowserRouter>

  )
}

export default App
