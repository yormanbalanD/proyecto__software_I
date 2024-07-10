import { useState } from "react"
import { MdBed, MdDriveEta, MdBathtub, MdCircle } from 'react-icons/md'
import { PiMapPinFill } from "react-icons/pi"
import { HiMiniSquares2X2 } from "react-icons/hi2"
import { FaList } from "react-icons/fa"

export default function ContainerCatalogo({ viviendas }) {
  const [tipoDeVista, setTipoDeVista] = useState('lista') // lista o recuadros
  console.log(viviendas)
  return (
    <div className="w-full">
      <div className="px-20 flex justify-between items-center">
        <span className="text-lg font-bold">Resultados de Busqueda</span>
        <div className="flex gap-x-3">
          <button onClick={() => setTipoDeVista('recuadro')} className="p-2 rounded bg-morado text-white"><HiMiniSquares2X2 className='text-xl' /></button>
          <button onClick={() => setTipoDeVista('lista')} className="p-2 rounded bg-morado text-white"><FaList className='text-xl' /></button>
        </div>
      </div>
      <div className={`flex flex-wrap py-8 relative gap-x-7 justify-center w-full ${tipoDeVista == 'lista' ? 'flex-col px-20 gap-y-7' : 'gap-y-14'}`}>
        {tipoDeVista == 'recuadro' && viviendas.map(el => {
          return (
            <a key={el.nombre} href="#" className='mx-6 block relative'>
              <div className='hover:shadow-[0px_0px_20px_3px_rgba(0,0,0,0.5)] duration-75 max-w-72 w-full'>
                <header className="m-0">
                  <img src="https://placehold.co/600x400" alt="" />
                </header>
                <div className='px-5 pt-2 pb-4 h-48 border flex flex-col'>
                  <div className='flex mb-2'>
                    {el.habitaciones.map((el, i) => {
                      if (el.tipo == 'estacionamiento') {
                        return <span key={i} className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdDriveEta className='text-3xl me-3' /> {el.cantidad}</span>
                      } else if (el.tipo == 'dormitorio') {
                        return <span key={i} className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdBed className='text-3xl me-3' /> {el.cantidad}</span>
                      } else if (el.tipo == 'baño') {
                        return <span key={i} className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdBathtub className='text-3xl me-3' /> {el.cantidad}</span>
                      } else {
                        return <span key={i} className='leading-none me-7 text-morado'>?</span>
                      }
                    })}
                    <span></span>
                  </div>
                  <div className='flex flex-col justify-between items-center h-full'>
                    <div className='w-full'>
                      <div className='w-full flex justify-between text-morado font-bold'>
                        <p className='w-auto text-start text-wrap'>{el.nombre}</p>
                        <span>{el.precio}$</span>
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

        {tipoDeVista == 'lista' && viviendas.map(el => {
          return (
            <div className='hover:shadow-[0px_0px_20px_3px_rgba(0,0,0,0.5)] duration-75 w-full flex relative'>
              <header className="m-0 w-80 flex-shrink-0">
                <img src="https://placehold.co/600x400" alt="" className="w-full" />
              </header>
              <div className='px-5 pt-2 pb-4 border flex flex-col w-full'>
                <div className='flex flex-col justify-between items-center h-full'>
                  <div className='w-full flex justify-between'>
                    <div className="w-full flex flex-col">
                      <div className='w-full flex justify-between text-morado font-bold'>
                        <p className='w-auto text-start text-wrap text-xl'>{el.nombre}</p>
                      </div>
                      <span className="ps-1 pt-2 text-xs opacity-75">Puerto Ordaz, Alta Vista, Edificio Caroni 1</span>
                      <div className="flex flex-col mt-5 gap-y-2">
                        <span className='ps-1 text-xs'><span className="font-semibold">Superficie:</span> {el.m2} mts2</span>
                        <span className='ps-1 text-xs'><span className="font-semibold">Detalles:</span> Sin amoblar</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-2xl pt-2 pe-2 text-morado font-bold">{el.precio}$</span>
                    </div>
                  </div>

                  <div className="w-full flex justify-between">
                    <div className='flex mb-2'>
                      {el.habitaciones.map((el, i) => {
                        if (el.tipo == 'estacionamiento') {
                          return <span key={i} className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdDriveEta className='text-4xl me-3' /> {el.cantidad}</span>
                        } else if (el.tipo == 'dormitorio') {
                          return <span key={i} className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdBed className='text-4xl me-3' /> {el.cantidad}</span>
                        } else if (el.tipo == 'baño') {
                          return <span key={i} className='flex text-morado items-center leading-none me-7 font-semibold text-xs'><MdBathtub className='text-4xl me-3' /> {el.cantidad}</span>
                        } else {
                          return <span key={i} className='leading-none me-7 text-morado'>?</span>
                        }
                      })}
                      <span></span>
                    </div>
                    <div className="flex items-center">
                      <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 duration-75 me-2 relative z-10"><PiMapPinFill className='text-2xl text-red-600' /></button>
                      <button className='bg-morado shadow-md shadow-[#00000066] text-white px-6 py-2 h-min'>Detalles</button>
                    </div>
                  </div>
                </div>
              </div>
              <a key={el.nombre} href={`/catalogo/${el.nombre}`} className='block absolute w-full h-full z-0' />
            </div>
          )
        })}
      </div>
    </div>
  )
}