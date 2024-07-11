import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { MdCircle } from 'react-icons/md'
import CardVivienda from './catalogo/CardVivienda'
import URLBACKEND from '../config/env'

import Loader from './Loader'

const tiposDeCasas = [{
  label: 'Casas'
}, {
  label: 'Apartamentos'
}, {
  label: 'Duplex'
}, {
  label: 'Townhouse'
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
  const [viviendas, setViviendas] = useState([])
  const [loading, setLoading] = useState(true)
  const ref = useRef()

  const getViviendas = async () => {
    const request = await fetch(`${URLBACKEND}/api/estate`, {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })

    if (request.status == 200) {
      const response = await request.json()
      response.data.sort((a, b) => b.views - a.views)

      if (response.data.length > 5) {
        response.data.length = 5
        setViviendas(response.data)
      } else {
        setViviendas(response.data)
      }
      setLoading(false)
    } else {
      toast.error("Ocurrio un problema al contactar la api :(")
      console.log(request)
    }
  }

  useEffect(() => {
    ref.current.scroll(1104 * circuloActivo, 0)
    getViviendas()
  }, [circuloActivo])

  return (
    <div className='py-5 px-5 w-full flex flex-col'>
      <header>
        <h1 className='text-4xl font-bold text-morado text-center'>Inmuebles Destacados</h1>
        <div className='flex justify-center mt-8 mb-14'>
          {/* {tiposDeCasas.map((el) => {
            if (tipoActivo == el.label) {
              return <span className='mx-4 text-sm text-rosado cursor-pointer duration-100'>{el.label}</span>
            } else {
              return <span className='mx-4 text-sm cursor-pointer hover:text-rosado duration-100' onClick={() => setTipoActivo(el.label)}>{el.label}</span>
            }
          })} */}
        </div>
      </header>
      <div ref={ref} className='flex py-8 relative mx-auto overflow-hidden w-full max-w-[69rem] scroll-smooth'>
        {loading ? <Loader /> : viviendas.map((el) => {
          return (
            <CardVivienda prop={el} key={el.nombre} />
          )
        })}
      </div>

      {
        !loading &&
        <div className='flex justify-center'>
          <BarraDeCirculos cantidadViviendas={viviendas.length} activo={circuloActivo} setActivo={setCirculoActivo} />
        </div>
      }
    </div>
  )
}
