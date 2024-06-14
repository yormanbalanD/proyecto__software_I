import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { MdCircle } from 'react-icons/md'
import CardVivienda from './catalogo/CardVivienda'

const tiposDeCasas = [{
  label: 'Casas'
}, {
  label: 'Apartamentos'
}, {
  label: 'Duplex'
}, {
  label: 'Townhouse'
}]


const vivienda = [{
  nombre: 'Apartamento Roraima',
  m2: 255,
  precio: 2050,
  habitaciones: [{
    tipo: 'baño',
    cantidad: 2,
  }, {
    tipo: 'dormitorio',
    cantidad: 4
  }, {
    tipo: 'estacionamiento',
    cantidad: 1
  }],
  tipo: 'Apartamento'
}, {
  nombre: 'Casa Alta Vista',
  m2: 255,
  precio: 2050,
  habitaciones: [{
    tipo: 'baño',
    cantidad: 2,
  }, {
    tipo: 'dormitorio',
    cantidad: 4
  }, {
    tipo: 'estacionamiento',
    cantidad: 1
  }],
  tipo: 'Casa'
}, {
  nombre: 'Duplex San Ignacio',
  m2: 255,
  precio: 2050,
  habitaciones: [{
    tipo: 'baño',
    cantidad: 2,
  }, {
    tipo: 'dormitorio',
    cantidad: 4
  }, {
    tipo: 'estacionamiento',
    cantidad: 1
  }],
  tipo: 'Duplex'
}, {
  nombre: 'Casa Villa Asia',
  m2: 20,
  precio: 234,
  habitaciones: [{
    tipo: 'baño',
    cantidad: 1,
  }, {
    tipo: 'dormitorio',
    cantidad: 3
  }],
  tipo: 'Casa'
}, {
  nombre: 'Casa Villa Icabaru',
  m2: 600,
  precio: 3000,
  habitaciones: [{
    tipo: 'baño',
    cantidad: 2,
  }, {
    tipo: 'dormitorio',
    cantidad: 10
  }],
  tipo: 'Casa'
}]

function BarraDeCirculos({ cantidadViviendas, activo, setActivo }) {
  let cantidadCirculos = Math.trunc(cantidadViviendas / 3) + 1

  const temp = []

  for (let i = 0; i < cantidadCirculos; i++) {
    if (i == activo) {
      temp.push(<MdCircle key={i} className='mx-2 text-morado cursor-pointer' />)
    } else {
      temp.push(<MdCircle key={i} onClick={() => setActivo(i)} className='mx-2 text-rosado cursor-pointer' />)
    }
  }

  return temp
}

export default function destacados() {
  const [tipoActivo, setTipoActivo] = useState("")
  const [circuloActivo, setCirculoActivo] = useState(0)
  const ref = useRef()

  useEffect(() => {
    ref.current.scroll(1008 * circuloActivo, 0)
  }, [circuloActivo])

  return (
    <div className='py-5 px-5 w-full flex flex-col'>
      <header>
        <h1 className='text-4xl font-bold text-morado text-center'>Inmuebles Destacados</h1>
        <div className='flex justify-center mt-10 mb-14'>
          {tiposDeCasas.map((el) => {
            if (tipoActivo == el.label) {
              return <span className='mx-4 text-sm text-rosado cursor-pointer duration-100'>{el.label}</span>
            } else {
              return <span className='mx-4 text-sm cursor-pointer hover:text-rosado duration-100' onClick={() => setTipoActivo(el.label)}>{el.label}</span>
            }
          })}
        </div>
      </header>
      <div ref={ref} className='flex py-8 relative mx-auto overflow-hidden w-full max-w-[63rem] scroll-smooth'>
        {vivienda.map((el) => {
          return (
            <CardVivienda prop={el} key={el.nombre} />
          )
        })}
      </div>

      <div className='flex justify-center'>
        <BarraDeCirculos cantidadViviendas={vivienda.length} activo={circuloActivo} setActivo={setCirculoActivo} />
      </div>
    </div>
  )
}
