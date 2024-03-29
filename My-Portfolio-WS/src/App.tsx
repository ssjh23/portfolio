import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
//Component Import
import About from './screens/About'
import Skills from './screens/Skills'
import SideNavbar from './components/SideNavbar'
import HeroSection from './screens/HeroSection'
import Projects from './screens/Projects'
import Currently from './screens/Currently'
import Contact from './screens/Contact'

function App() {

  let[renderOtherPages, setRenderOtherPages] = useState(false)
  const isSVGComplete = (isCompleted:boolean) => {
    setRenderOtherPages(isCompleted)
}
  return (
    <BrowserRouter>
    <div className='snap-y snap-mandatory h-screen overflow-auto scroll-smooth'>
      <HeroSection isRenderOtherPages={isSVGComplete}/>
      {renderOtherPages &&
          <div className='grid grid-cols-7 '>
            <SideNavbar/>
            <About/>
            <Skills/>
            <Projects/>
            <Currently/>
            <Contact/>
          </div>
      }

    </div>
    </BrowserRouter>
  )
}

export default App
