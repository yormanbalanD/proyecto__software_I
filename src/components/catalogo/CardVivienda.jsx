import React from 'react'
import { MdBed, MdDriveEta, MdBathtub } from 'react-icons/md'
import { HiMapPin } from "react-icons/hi2";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useState } from 'react';
import { useCookies } from 'react-cookie'
import { useEffect } from 'react';
import URLBACKEND from '../../config/env'

export default function CardVivienda({ prop }) {
  const [like, setLike] = useState(prop.like ?? false)

  const requestSetLike = async () => {
    const request = await fetch(`${URLBACKEND}/api/estate/meGusta`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
      body: JSON.stringify({
        estate_id: prop.id,
        user_id: user.id,
        liked: !like
      })
    })

    if (request.status == 200) {
      const response = await request.json()

      setLike(like => !like)
    } else {
      console.log(request)
    }
  }

  const toggleLike = () => {
    requestSetLike()
  }

  const [cookies, setCookie] = useCookies(['token']);
  const [user, setUser] = useState(cookies.user)

  const requestGetLike = async () => {
    const request = await fetch(`${URLBACKEND}/api/estate/user/${user.id}/${prop.id}`, {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
    if (request.status == 200) {
      const response = await request.json()
      console.log(response)
      setLike(response.data.is_liked)
    } else {
      console.log(request)
    }
  }

  useEffect(() => {
    if (!user) return
    requestGetLike()
  }, [])

  return (
    <div className='hover:shadow-[0px_0px_20px_3px_rgba(0,0,0,0.5)] duration-75 h-min max-w-80 min-w-80 mx-6 w-full relative border'>
      <header className="m-0 relative">
        {prop["image_estates"] && prop["image_estates"].length > 0 && <img className='w-96 max-h-72' src={prop["image_estates"][0].image} alt="" />}
        {prop["image_estates"] && prop["image_estates"].length == 0 && <img className='w-full h-full' src='https://placehold.co/600x400' alt="" />}
        <a href={`https://maps.google.com/?q=${prop.latitude},${prop.altitude}`} target='_blanck' className='absolute z-10 bg-white block overflow-hidden rounded-md bottom-2 left-2 p-2 leading-none border border-[#00000040]'>
          <HiMapPin className='text-xl text-red-700' />
        </a>
        {user && !like && <div onClick={toggleLike} className='z-10 bottom-0 translate-y-1/2 right-2 border border-[#00000040] absolute bg-white overflow-hidden rounded-[50%] p-2 leading-none text-base text-red-500 cursor-pointer'>
          <FaRegHeart className='text-xl' />
        </div>}

        {user && like && <div onClick={toggleLike} className='z-10 bottom-0 translate-y-1/2 right-2 border border-[#00000040] absolute bg-white overflow-hidden rounded-[50%] p-2 leading-none text-base text-red-500 cursor-pointer'>
          <FaHeart className='text-xl' />
        </div>}
      </header>
      <div className='px-5 pt-3 pb-4 flex flex-col'>
        <div className='flex mb-2'>
          {/* {prop.habitaciones.map((el) => {
                        if (el.tipo == 'estacionamiento') {
                            return <span className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdDriveEta className='text-3xl me-3' /> {el.cantidad}</span>
                        } else if (el.tipo == 'dormitorio') {
                            return <span className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdBed className='text-3xl me-3' /> {el.cantidad}</span>
                        } else if (el.tipo == 'baño') {
                            return <span className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdBathtub className='text-3xl me-3' /> {el.cantidad}</span>
                        } else {
                            return <span className='leading-none me-7 text-morado'>?</span>
                        }
                    })} */}
          <span></span>
        </div>
        <div className='flex flex-col justify-between items-center h-full'>
          <div className='w-full'>
            <div className='w-full flex justify-between text-morado font-bold'>
              <p className='w-auto text-start text-wrap'>{prop.name}</p>
              <span>{prop.price}$</span>
            </div>

            <div className='flex flex-col gap-2 mt-2'>
              <span className='ps-2 text-xs'>Superficie Total: {prop["land_meters"]} mts2</span>
              <span className='ps-2 text-xs'>Metros Construidos: {prop["construction_meters"]} mts2</span>
            </div>
          </div>

          <div className='flex justify-end w-full'>
            <button className='bg-verde shadow-md rounded-sm shadow-[#00000066] text-white px-4 py-1 h-min relative z-10'>Contacto</button>
          </div>
        </div>
      </div>
      <a href={`/catalogo/${prop.id}`} className='w-full block absolute h-full bottom-0 z-0' />
    </div>
  )
}
