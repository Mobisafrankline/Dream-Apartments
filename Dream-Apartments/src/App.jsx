import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import DiverseInvestmentOptions from './components/DiverseInvestmentOptions'
import Neighborhood from './components/Neighborhood'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <Neighborhood/>
      <DiverseInvestmentOptions/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
