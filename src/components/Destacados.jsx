import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { MdBed, MdDriveEta, MdBathtub, MdCircle } from 'react-icons/md'

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

  for(let i = 0; i < cantidadCirculos; i++){
    if(i == activo){
      temp.push(<MdCircle key={i} className='mx-2 text-morado cursor-pointer'/>)
    } else {
      temp.push(<MdCircle key={i} onClick={() => setActivo(i)} className='mx-2 text-rosado cursor-pointer'/>)
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
            <a key={el.nombre} href="#" className='mx-6 w-full min-w-72 block relative'>
              <div className='hover:shadow-[0px_0px_20px_3px_rgba(0,0,0,0.5)] duration-75'>
                <header className="m-0">
                  <img src="https://placehold.co/600x400" alt="" />
                </header>
                <div className='px-5 pt-2 pb-4 h-48 border flex flex-col'>
                  <div className='flex mb-2'>
                    {el.habitaciones.map((el) => {
                      if (el.tipo == 'estacionamiento') {
                        return <span className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdDriveEta className='text-3xl me-3' /> {el.cantidad}</span>
                      } else if (el.tipo == 'dormitorio') {
                        return <span className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdBed className='text-3xl me-3' /> {el.cantidad}</span>
                      } else if (el.tipo == 'baño') {
                        return <span className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdBathtub className='text-3xl me-3' /> {el.cantidad}</span>
                      } else {
                        return <span className='leading-none me-7 text-morado'>?</span>
                      }
                    })}
                    <span></span>
                  </div>
                  <div className='flex flex-col justify-between items-center h-full'>
                    <div className='w-full'>
                      <div className='w-full flex justify-between text-morado font-bold'>
                        <p className='w-auto text-start text-wrap'>{el.nombre}</p>
                        <span>${el.precio}$</span>
                      </div>
                      <span className='ps-2 text-xs'>{el.m2} mts2</span>
                    </div>

                    <button className='bg-morado shadow-md shadow-[#00000066] text-white px-6 py-2 h-min'>Detalles</button>
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className='flex justify-center'>
        <BarraDeCirculos cantidadViviendas={vivienda.length} activo={circuloActivo} setActivo={setCirculoActivo}/>
      </div>
    </div>
  )
}
