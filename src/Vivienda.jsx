import React from 'react'
import { useParams } from 'react-router-dom'

import CardVivienda from './components/catalogo/CardVivienda';

import { FaRegHeart, FaSquareInstagram } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiMapPin } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward, IoLogoWhatsapp } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { MdBed, MdDriveEta, MdBathtub, MdCircle } from 'react-icons/md'

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
  console.log(params)

  return (
    <>
      <div className='flex w-full h-auto'>
        <div className='w-full py-10 ps-14 h-auto'>
          <div className='flex py-5 justify-between'>
            <h3 className='font-bold text-2xl'>Apartamento Alta Vista</h3>

            <div className='flex items-center'>
              <span className='me-8 flex items-center leading-none text-blue-700 font-semibold'><HiMapPin className='text-xl me-2' /> Ver Mapa</span>
              <span className='me-20 flex items-center leading-none font-semibold'><IoShareSocialOutline className='text-xl me-2' /> Compartir</span>

              <button className='border border-rosado text-rosado hover:bg-rosado hover:text-white duration-75 font-semibold py-2 px-3 rounded-sm flex items-center leading-none shadow-[0px_0px_4px_1px_rgba(178,85,155,0.3)]'><FaRegHeart className='text-xl me-1' /> Guardar Favorito</button>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='max-w-24 grid gap-2 grid-cols-1 h-min me-20'>
              <img src="https://placehold.co/600x400" alt="" />
              <img src="https://placehold.co/600x400" alt="" />
              <img src="https://placehold.co/600x400" alt="" />
            </div>

            <div className='relative items-center w-full'>
              <img src="https://placehold.co/600x400" className='w-full' alt="" />
              <IoIosArrowBack className='absolute text-white drop-shadow-[1px_1px_2px_#888] text-5xl top-1/2 left-0 -translate-y-1/2 float-start cursor-pointer' />
              <IoIosArrowForward className='absolute text-white drop-shadow-[1px_1px_2px_#888] text-5xl top-1/2 right-0 -translate-y-1/2 cursor-pointer' />
            </div>
          </div>

          <div className='mt-10 flex flex-wrap'>
            <div className='font-bold me-14'>
              Sup. Total Construida
              <span className='flex items-center leading-none'><RxDimensions className='text-xl me-3' /> 12 m2</span>
            </div>

            <div className='font-bold me-14'>
              Habitaciones
              <span className='flex items-center leading-none'><MdBed className='text-3xl me-2 text-morado' /> 4</span>
            </div>

            <div className='font-bold me-14'>
              Baños
              <span className='flex items-center leading-none'><MdBathtub className='text-3xl me-2 text-morado' /> 1</span>
            </div>

            <div className='font-bold me-14'>
              Estacionamientos
              <span className='flex items-center leading-none'><MdDriveEta className='text-3xl me-2 text-morado' /> 1</span>
            </div>
          </div>

          <div className='mt-8'>
            <h2 className='font-bold text-gray-500 opacity-80 text-3xl'>Descripcion</h2>
            <p className='mt-1 text-justify text-gray-700 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid similique illo enim rerum saepe consequatur nemo quam ipsam soluta reprehenderit odio incidunt laboriosam ab, velit molestiae provident, esse tempore!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi suscipit, dolorum error possimus fugiat, saepe repellat corporis, modi dolores earum eum aliquid molestias ipsum id mollitia! Nobis, voluptas reiciendis!</p>
          </div>

          <div className='mt-8'>
            <h2 className='font-bold text-gray-500 opacity-80 text-3xl'>Caracteristicas</h2>
            <div className='grid grid-cols-4 gap-3 border-2 rounded-md py-3 px-5 justify-items-center'>
              <div className=''>
                Sup. Total Construida
                <span className='flex items-center leading-none'><RxDimensions className='text-xl me-3' /> 12 m2</span>
              </div>

              <div className=''>
                Habitaciones
                <span className='flex items-center leading-none'><MdBed className='text-3xl me-2 text-morado' /> 4</span>
              </div>

              <div className=''>
                Baños
                <span className='flex items-center leading-none'><MdBathtub className='text-3xl me-2 text-morado' /> 1</span>
              </div>

              <div className=''>
                Estacionamientos
                <span className='flex items-center leading-none'><MdDriveEta className='text-3xl me-2 text-morado' /> 1</span>
              </div>
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

            <div className='w-full'>
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
            </div>
          </div>
        </div>
      </div>

      <div className='w-full mt-10 mb-5'>
        <h5 className='text-center text-morado font-bold text-3xl mb-5'>Tambien te puede interesar</h5>

        <div className='flex py-4 px-10 flex-wrap relative mx-auto w-full scroll-smooth'>
          {vivienda.map((el) => {
            return (
              <CardVivienda prop={el} key={el.nombre} />
            )
          })}
        </div>
      </div>
    </>
  )
}
