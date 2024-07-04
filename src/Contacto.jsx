import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AboutUs from './components/contacto/AboutUs'
import ExperienciaProfesionalidad from './components/contacto/ExperienciaProfesionalidad'
import UbicacionContainer from './components/UbicacionContainer'

export default function Contacto() {
  return (
    <div>
      <Nav />
      <main>
        <AboutUs />
        <ExperienciaProfesionalidad />
        <UbicacionContainer></UbicacionContainer>
      </main>
      <Footer />
    </div>
  )
}
