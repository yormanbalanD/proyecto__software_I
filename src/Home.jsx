import React from 'react'
import Hero from './components/Hero'
import Destacados from './components/Destacados'
import NuestrosServicios from './components/NuestrosServicios'
import PorqueElegirnos from './components/PorqueElegirnos'
import NuestroEquipo from './components/NuestroEquipo'
import Testimonios from './components/Testimonios'
import RegistrateAqui from './components/RegistrateAqui'


export default function Home() {
  return (
    <div className='w-full min-h-screen h-auto'>
        <Hero></Hero>
        <Destacados></Destacados>
        <NuestrosServicios></NuestrosServicios>
        <PorqueElegirnos></PorqueElegirnos>
        <NuestroEquipo></NuestroEquipo>
        <Testimonios></Testimonios>
        <RegistrateAqui></RegistrateAqui>
    </div>
  )
}
