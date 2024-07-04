import React, { useState, useId } from 'react'
import { RiStarSFill, RiWhatsappFill } from "react-icons/ri"
import { FaInstagramSquare, FaTwitterSquare, FaPen } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import { FaPhoneVolume } from "react-icons/fa6"
import { HiIdentification } from "react-icons/hi2"
import { MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { IoCalendarNumberSharp } from "react-icons/io5"
import Input from '../formularios/Input'

export default function MiPerfil({ tipoUsuario }) {
    const [modificar, setModificar] = useState(false)

    if (tipoUsuario == 'cliente') {

        return (
            <div className='p-4 w-full'>
                <div className='w-full flex items-center justify-center mb-24'>
                    <div className='py-5 px-28'>
                        <div className='w-60 h-60 relative'>
                            <img src="https://placehold.co/480x480" alt="" className='w-full rounded-full shadow-[0px_0px_12px_2px_rgba(0,0,0,0.4)]' />
                            <div className='absolute bottom-0 right-0 -translate-x-1/2 -translate-y-1/2 bg-azulClaro p-2 text-xl text-white rounded-full cursor-pointer'>
                                <FaPen />
                            </div>
                        </div>
                    </div>
                    <div className='h-full py-5 flex flex-col'>
                        <h1 className='text-3xl font-bold mb-1'>Pablo Alondra</h1>
                        <p className='mb-1'>Venezuela, Distrito Capital, Caracas, 8050</p>
                        <div className='flex text-3xl relative -left-2 text-yellow-300 mb-2'><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
                        <div className='flex text-gray-400 opacity-85 text-3xl gap-1 *:cursor-pointer'><RiWhatsappFill /><FaInstagramSquare /><FaTwitterSquare /></div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-3 gap-20 px-10'>
                    <Input label='Nombre completo' icon={<BsFillPersonFill className='text-4xl' />} type='text' disabled={!modificar} />
                    <Input label='Telefono' icon={<FaPhoneVolume className='text-3xl' />} type='text' disabled={!modificar} />
                    <Input label='Cedula' icon={<HiIdentification className='text-4xl' />} type='text' disabled={!modificar} />
                    <Input label='Correo' icon={<MdEmail className='text-4xl' />} type='text' disabled={!modificar} />
                    <Input label='Fecha de nacimiento' icon={<IoCalendarNumberSharp className='text-4xl' />} type='text' disabled={!modificar} />
                    <Input label='Contraseña' icon={<RiLockPasswordFill className='text-4xl' />} type='password' disabled={!modificar} />
                </div>
                <div className='px-10 w-full flex justify-end pt-5'>
                    {!modificar &&
                        <button onClick={() => setModificar(true)} className='bg-azulClaro px-12 py-3 text-white rounded-sm hover:bg-azulClaroBotonesHover duration-75'>Modificar</button>}
                    
                    {modificar &&
                        <button onClick={() => setModificar(false)} className='bg-morado px-12 py-3 text-white rounded-sm hover:bg-moradoBotonesHover duration-75'>Modificar</button>}
                </div>
            </div>
        )
    } else if (tipoUsuario == 'asesor') {
        return (
            <div className='border border-green-500 p-4 w-full'>
                <div className='w-full'>asdaasd</div>
            </div>
        )
    } else {
        return <div></div>
    }
}
