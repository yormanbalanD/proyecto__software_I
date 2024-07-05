import { useState } from "react"
import { MdBed, MdDriveEta, MdBathtub, MdCircle } from 'react-icons/md'

export default function ContainerCatalogo({ viviendas }) {
    const [tipoDeVista, setTipoDeVista] = useState('recuadro') // lista o recuadros
    console.log(viviendas)
    return (
        <div className="flex flex-wrap py-8 relative mx-auto overflow-hidden w-full scroll-smooth">
            {tipoDeVista == 'recuadro' && viviendas.map(el => {
                return (
                    <a key={el.nombre} href="#" className='mx-6 w-full block relative'>
                        <div className='hover:shadow-[0px_0px_20px_3px_rgba(0,0,0,0.5)] duration-75'>
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
        </div>
    )
}