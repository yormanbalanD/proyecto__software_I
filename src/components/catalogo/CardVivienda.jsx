import React from 'react'
import { MdBed, MdDriveEta, MdBathtub } from 'react-icons/md'
import { HiMapPin } from "react-icons/hi2";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useState } from 'react';

export default function CardVivienda({ prop }) {
    const [like, setLike] = useState(prop.like ?? false)

    const toggleLike = () => {
        setLike((val) => !val)
    }

    return (
        <div className='hover:shadow-[0px_0px_20px_3px_rgba(0,0,0,0.5)] duration-75 max-w-72 min-w-72 mx-6 w-full relative'>
            <header className="m-0 relative">
                <img src="https://placehold.co/600x400" alt="" />
                <div className='absolute z-10 bg-white overflow-hidden rounded-md bottom-2 left-2 p-2 leading-none'>
                    <HiMapPin className='text-xl text-red-700' />
                </div>
                {!like && <div onClick={toggleLike} className='z-10 bottom-0 translate-y-1/2 right-2 border border-[#00000040] absolute bg-white overflow-hidden rounded-[50%] p-2 leading-none text-base text-red-500 cursor-pointer'>
                    <FaRegHeart className='text-xl' />
                </div>}

                {like && <div onClick={toggleLike} className='z-10 bottom-0 translate-y-1/2 right-2 border border-[#00000040] absolute bg-white overflow-hidden rounded-[50%] p-2 leading-none text-base text-red-500 cursor-pointer'>
                    <FaHeart className='text-xl' />
                </div>}
            </header>
            <div className='px-5 pt-3 pb-4 border flex flex-col'>
                <div className='flex mb-2'>
                    {prop.habitaciones.map((el) => {
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
                            <p className='w-auto text-start text-wrap'>{prop.nombre}</p>
                            <span>{prop.precio}$</span>
                        </div>
                        <span className='ps-2 text-xs'>{prop.m2} mts2</span>
                    </div>

                    <div className='flex justify-end w-full'>
                        <button className='bg-verde shadow-md rounded-sm shadow-[#00000066] text-white px-4 py-1 h-min relative z-10'>Contacto</button>
                    </div>
                </div>
            </div>
            <a href="#" className='w-full block absolute h-full bottom-0 z-0' />
        </div>
    )
}
