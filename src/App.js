import React from 'react'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Main from './components/Main'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Main />
      <Articles />
      <Footer /> 
    </div>
  )
}

export default App
