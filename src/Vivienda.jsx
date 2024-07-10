import Reac, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from './components/Nav'
import { useCookies } from 'react-cookie'

import Footer from './components/Footer'

import CardVivienda from './components/catalogo/CardVivienda';

import { FaRegHeart, FaSquareInstagram } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiMapPin } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward, IoLogoWhatsapp } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { MdBed, MdDriveEta, MdBathtub, MdCircle } from 'react-icons/md'
import URLBACKEND from './config/env'

import { MdLocalPostOffice } from "react-icons/md";
import { PiToiletFill } from "react-icons/pi"
import { FaRegBuilding } from "react-icons/fa"
import { BsBricks } from "react-icons/bs"
import { PiBuildingApartmentFill } from "react-icons/pi"


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
  tipo: 'Apartamento',
  like: true
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
  tipo: 'Casa',
  like: true
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
  tipo: 'Duplex',
  like: false
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
}]

export default function Vivienda() {
  const params = useParams()

  const [vivienda, setVivienda] = useState()

  const [cookies, setCookie] = useCookies(['token']);
  const [user, setUser] = useState(cookies.user)

  const [like, setLike] = useState(false)

  const requestGetLike = async (idVivienda) => {
    const request = await fetch(`${URLBACKEND}/api/estate/user/${user.id}/${idVivienda}`, {
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

  const requestSetLike = async () => {
    const request = await fetch(`${URLBACKEND}/api/estate/meGusta`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
      body: JSON.stringify({
        estate_id: vivienda.id,
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

  const incrementView = async (idVivienda) => {
    const request = await fetch(`${URLBACKEND}/api/estate/view/${idVivienda}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      }
    })
    if (request.status == 200) {
      const response = await request.json()
      console.log(response)
    } else {
      console.log(request)
    }
  }

  const getVivienda = async () => {
    const request = await fetch(`${URLBACKEND}/api/estate/byid`, {
      method: 'POST',
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: params.idVivienda
      })
    })

    if (request.status == 200) {
      const response = await request.json()
      setVivienda(response.data)
      console.log(response.data)
      incrementView(response.data.id)

      if (user) {
        requestGetLike(response.data.id)
      }
    } else {
      alert('No se pudo recuperar la vivienda')
      console.log(request)
    }
  }

  useEffect(() => {
    getVivienda()
  }, [])

  return (
    <>
      <Nav></Nav>
      {vivienda &&
        <div className='flex w-full h-auto'>
          <div className='w-full py-10 ps-14 h-auto'>
            <div className='flex py-5 justify-between'>
              <h3 className='font-bold text-2xl'>{vivienda.name}</h3>

              <div className='flex items-center'>
                <a href={`https://maps.google.com/?q=${vivienda.latitude},${vivienda.altitude}`} target='_blanck' className='me-8 flex items-center leading-none text-blue-700 font-semibold'><HiMapPin className='text-2xl me-2' /> Ver Mapa</a>
                <span className='me-20 flex items-center leading-none font-semibold'><IoShareSocialOutline className='text-xl me-2' /> Compartir</span>

                {user && !like &&
                  <button onClick={toggleLike} className='border border-rosado text-rosado hover:bg-rosado hover:text-white duration-75 font-semibold py-2 px-3 rounded-sm flex items-center leading-none shadow-[0px_0px_4px_1px_rgba(178,85,155,0.3)]'><FaRegHeart className='text-xl me-1' /> Guardar Favorito</button>}

                {user && like &&
                  <button onClick={toggleLike} className='border border-rosado bg-rosado text-white hover:bg-white hover:text-rosado duration-75 font-semibold py-2 px-3 rounded-sm flex items-center leading-none shadow-[0px_0px_4px_1px_rgba(178,85,155,0.3)]'><FaRegHeart className='text-xl me-1' /> Quitar de Favorito</button>}

                {!user &&
                  <a href='/login' className='border border-rosado text-rosado hover:bg-rosado hover:text-white duration-75 font-semibold py-2 px-3 rounded-sm flex items-center leading-none shadow-[0px_0px_4px_1px_rgba(178,85,155,0.3)]'><FaRegHeart className='text-xl me-1' /> Guardar Favorito</a>}
              </div>
            </div>
            <div className='flex items-center'>
              <div className='max-w-24 grid gap-2 grid-cols-1 h-min me-20'>
                {vivienda["image_estates"] && vivienda["image_estates"].length > 1 && vivienda["image_estates"].map((el, i) => {
                  if (i != 0) {
                    return <img className='w-full' src={el.image} alt="" />
                  }
                })}
              </div>

              <div className='relative items-center w-full'>
                {vivienda["image_estates"] && vivienda["image_estates"].length > 0 && <img className='w-full' src={vivienda["image_estates"][0].image} alt="" />}
                <IoIosArrowBack className='absolute text-white drop-shadow-[1px_1px_2px_#888] text-5xl top-1/2 left-0 -translate-y-1/2 float-start cursor-pointer' />
                <IoIosArrowForward className='absolute text-white drop-shadow-[1px_1px_2px_#888] text-5xl top-1/2 right-0 -translate-y-1/2 cursor-pointer' />
              </div>
            </div>

            {/* <div className='mt-10 flex flex-wrap'>
              <div className='font-bold me-14'>
                Superficie Total
                <span className='flex items-center leading-none'><RxDimensions className='text-xl me-3' /> {vivienda["land_meters"]} m2</span>
              </div>
            </div>

            <div className='mt-8'>
              <h2 className='font-bold text-gray-500 opacity-80 text-3xl'>Descripcion</h2>
              <p className='mt-1 text-justify text-gray-700 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid similique illo enim rerum saepe consequatur nemo quam ipsam soluta reprehenderit odio incidunt laboriosam ab, velit molestiae provident, esse tempore!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi suscipit, dolorum error possimus fugiat, saepe repellat corporis, modi dolores earum eum aliquid molestias ipsum id mollitia! Nobis, voluptas reiciendis!</p>
            </div> */}

            <div className='mt-1'>
              <h2 className='font-bold text-gray-500 opacity-80 text-3xl mb-2'>Precio: {vivienda.price} Bs</h2>

              <h2 className='font-bold text-gray-500 opacity-80 text-3xl mb-2'>Caracteristicas</h2>
              <div className='grid grid-cols-4 gap-3 border-2 rounded-md py-3 px-5 justify-items-center'>
                <div className=''>
                  Superficie Total
                  <span className='flex items-center leading-none'><RxDimensions className='text-xl me-3' /> {vivienda["land_meters"]} m2</span>
                </div>

                <div className=''>
                  Metros Construidos
                  <span className='flex items-center leading-none'><BsBricks className='text-xl me-3' /> {vivienda["construction_meters"]} m2</span>
                </div>

                <div className=''>
                  Ciudad
                  <span className='flex items-center leading-none'><FaRegBuilding className='text-xl me-3' /> {vivienda.address}</span>
                </div>

                <div className=''>
                  Tipo
                  <span className='flex items-center leading-none'>
                    <PiBuildingApartmentFill className='text-2xl me-3 text-morado' /> {vivienda.type}
                  </span>
                </div>

                {
                  vivienda.room &&
                  <div className='flex items-center flex-col justify-center'>
                    Habitaciones
                    <span className='flex items-center leading-none'><MdBed className='text-3xl me-2 text-morado' /></span>
                  </div>
                }

                {vivienda.half_bath &&
                  <div className='flex items-center flex-col justify-center'>
                    Medio Baño
                    <span className='flex items-center leading-none'><MdBathtub className='text-3xl me-2 text-morado' /></span>
                  </div>}

                {vivienda.bathroom &&
                  <div className='flex items-center flex-col justify-center'>
                    Baños
                    <span className='flex items-center leading-none'><MdBathtub className='text-3xl me-2 text-morado' /></span>
                  </div>}


                {vivienda.office &&
                  <div className='flex items-center flex-col justify-center'>
                    Oficina
                    <span className='flex items-center leading-none'><MdLocalPostOffice className='text-3xl me-2 text-morado' /></span>
                  </div>}

                {vivienda.parking &&
                  <div className='flex items-center flex-col justify-center'>
                    Estacionamiento
                    <span className='flex items-center leading-none'><MdDriveEta className='text-3xl me-2 text-morado' /></span>
                  </div>}
              </div>
            </div>
          </div>
          <div className='w-full max-w-lg h-auto py-10 grid'>
            <div className='max-w-sm w-full border-8 rounded-md h-min items-center flex flex-col justify-self-center'>
              <div className='w-full h-2 bg-rosado' />

              <p className='text-center py-5 text-sm font-semibold'>Contactar Agente Inmobiliario</p>

              <div className='rounded-[50%] max-w-24 relative overflow-hidden'>
                <img src="https://placehold.co/400x400" className='w-full' alt="" />
              </div>

              <p className='text-3xl font-bold'>Jesus Rondon</p>
              <div className='text-2xl flex text-yellow-300 mb-5'><RiStarSFill className='' /><RiStarSFill className='' /><RiStarSFill className='' /><RiStarSFill className='' /><RiStarSFill className='' /></div>

              <div className='grid grid-cols-5 max-w-64 text-sm gap-y-1 text-gray-600 mb-12'>
                <span className='col-start-1 col-end-3 font-bold'>Experiencia</span> <span className='col-start-3 col-end-6'>10 años de experiencia</span>
                <span className='col-start-1 col-end-3 font-bold'>Ventas</span> <span className='col-start-3 col-end-6'>150 Inmuebles Vendidos</span>
                <span className='col-start-1 col-end-3 font-bold'>Telefono</span> <span className='col-start-3 col-end-6'>+58 4249477865</span>
                <span className='col-start-1 col-end-3 font-bold'>Referencia</span> <span className='col-start-3 col-end-6'>67789</span>
              </div>

              <button className='bg-verde px-10 py-2 text-white rounded-md mb-10'>Contactar</button>

              {/* <div className='w-full'>
                <hr />

                <div className='flex text-3xl text-gray-400 opacity-80 py-5 justify-center gap-1'>
                  <a href="">
                    <IoLogoWhatsapp />
                  </a>
                  <a href="">
                    <FaSquareInstagram />
                  </a>
                  <a href="">
                    <FaTwitterSquare />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      }

      {/* <div className='w-full mt-10 mb-5'>
        <h5 className='text-center text-morado font-bold text-3xl mb-5'>Tambien te puede interesar</h5>

        <div className='flex py-4 px-10 flex-wrap relative mx-auto w-full scroll-smooth'>
          {vivienda.map((el) => {
            return (
              <CardVivienda prop={el} key={el.nombre} />
            )
          })}
        </div>
      </div> */}
      <Footer></Footer>
    </>
  )
}
