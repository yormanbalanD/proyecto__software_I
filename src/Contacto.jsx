import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AboutUs from './components/contacto/AboutUs'
import ExperienciaProfesionalidad from './components/contacto/ExperienciaProfesionalidad'

export default function Contacto() {
  return (
    <div>
      <Nav />
      <main>
        <AboutUs />
        <ExperienciaProfesionalidad />
      </main>
      <Footer />
    </div>
  )
}
