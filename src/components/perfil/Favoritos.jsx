import React, { useState, useEffect } from 'react'
import URLBACKEND from '../../config/env'
import { PiMapPinFill } from 'react-icons/pi'
import { useCookies } from 'react-cookie'

import Loader from '../Loader'

export default function Favoritos({ tipoUsuario }) {
  const [viviendas, setViviendas] = useState([])

  const [cookies, setCookie] = useCookies(['token']);
  const [user, setUser] = useState(cookies.user)
  const [isLoading, setIsLoading] = useState(true)

  const getViviendas = async () => {
    const request = await fetch(`${URLBACKEND}/api/estate/listaFavoritos/${user.id}`, {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })

    if (request.status == 200) {
      const response = await request.json()

      const temp = []

      response.data.forEach(el => {
        temp.push(el.estate)
      })

      setViviendas(temp)
      console.log(response)
      setIsLoading(false)
    } else {
      console.log(request)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getViviendas()
  }, [])

  if (isLoading) {
    return (
      <>

        <h1 className='text-4xl font-bold mb-5 text-center mt-4'>Favoritos</h1>
        <Loader />
      </>
    )
  } else {
    return (
      <div className='py-4 px-20 w-full'>
        <h1 className='text-4xl font-bold mb-5 text-center'>Favoritos</h1>

        <div className='flex flex-wrap gap-y-10 px-7 py-10'>
          {viviendas.map(el => {
            return (
              <div key={el.id} className='hover:shadow-[0px_0px_20px_3px_rgba(0,0,0,0.5)] duration-75 w-full flex relative border'>
                <header className="m-0 w-80 flex-shrink-0">
                  {el["image_estates"] && el["image_estates"].length > 0 && <img className='w-full' src={el["image_estates"][0].image} alt="" />}
                  {el["image_estates"] && el["image_estates"].length == 0 && <img className='w-full h-full' src='https://placehold.co/600x400' alt="" />}
                </header>
                <div className='px-5 pt-2 pb-4 flex border-l flex-col w-full'>
                  <div className='flex flex-col justify-between items-center h-full'>
                    <div className='w-full flex justify-between'>
                      <div className="w-full flex flex-col">
                        <div className='w-full flex justify-between text-morado font-bold'>
                          <p className='w-auto text-start text-wrap text-xl'>{el.name}</p>
                        </div>
                        <span className="ps-1 pt-2 text-xs opacity-75"><span className="font-bold">Ciudad:</span> {el.address}</span>
                        <div className="flex flex-col mt-5 gap-y-2">
                          <span className='ps-1 text-xs'><span className="font-semibold">Superficie:</span> {el["land_meters"]} mts2</span>
                          <span className='ps-1 text-xs'><span className="font-semibold">Metros Construidos:</span> {el["construction_meters"]} mts2</span>
                          {/* <span className='ps-1 text-xs'><span className="font-semibold">Detalles:</span> Sin amoblar</span> */}
                        </div>
                      </div>
                      <div>
                        <span className="text-2xl pt-2 pe-2 text-morado font-bold">{el.price}Bs</span>
                      </div>
                    </div>

                    <div className="w-full flex justify-between">
                      <div className='flex mb-2'>
                        {/* {el.habitaciones.map((el, i) => {
                          if (el.tipo == 'estacionamiento') {
                            return <span key={i} className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdDriveEta className='text-4xl me-3' /> {el.cantidad}</span>
                          } else if (el.tipo == 'dormitorio') {
                            return <span key={i} className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdBed className='text-4xl me-3' /> {el.cantidad}</span>
                          } else if (el.tipo == 'baño') {
                            return <span key={i} className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdBathtub className='text-4xl me-3' /> {el.cantidad}</span>
                          } else {
                            return <span key={i} className='leading-none me-7 text-morado'>?</span>
                          }
                        })} */}
                        <span></span>
                      </div>
                      <div className="flex items-center">
                        <a href={`https://maps.google.com/?q=${el.latitude},${el.altitude}`} target='_blanck' className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 duration-75 me-2 relative z-10"><PiMapPinFill className='text-2xl text-red-600' /></a>
                        <button className='bg-morado shadow-md shadow-[#00000066] text-white px-6 py-2 h-min'>Detalles</button>
                      </div>
                    </div>
                  </div>
                </div>
                <a key={el.nombre} href={`/catalogo/${el.id}`} className='block absolute w-full h-full z-0' />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}
