import React from 'react'
import About from '../components/About/About'
import ServicesCard from '../components/Cards/ServicesCard'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <Footer />
    </>
  )
}

export default Home