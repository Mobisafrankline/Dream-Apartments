import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import DiverseInvestmentOptions from './components/DiverseInvestmentOptions'
import Neighborhood from './components/Neighborhood'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Header/>
      <About/>
      <Projects/>
      <Neighborhood/>
      <DiverseInvestmentOptions/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
