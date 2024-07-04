import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import MiPerfil from './MiPerfil';
import Favoritos from './Favoritos';
import MisPropiedades from './MisPropiedades';
import MisClientes from './MisClientes';

export default function AsidePerfil({ tipoUsuario, setPagina }) {
  const [open, setOpen] = useState(true)
  const [ventana, setVentana] = useState('Mi Perfil')

  const listCliente = [{
    name: 'Mi Perfil',
    component: <MiPerfil tipoUsuario={'cliente'} />
  }, {
    name: 'Mis Propiedades',
    component: <MisPropiedades tipoUsuario={'cliente'} />
  }, {
    name: 'Favoritos',
    component: <Favoritos />
  }]

  const listAsesor = [{
    name: 'Mi Perfil',
    component: <MiPerfil tipoUsuario={'asesor'} />
  }, {
    name: 'Mis Propiedades',
    component: <MisPropiedades tipoUsuario={'asesor'} />
  }, {
    name: 'Mis Clientes',
    component: <MisClientes />
  }]

  return (
    <div className={`${open ? 'w-[28rem]' : 'w-[3rem]'} flex-shrink-0 transition-all duration-500 ease-in-out overflow-hidden relative py-2 ps-2 ${tipoUsuario == 'cliente' ? 'bg-rosado' : 'bg-verde'}`}>
      <div className='w-[3rem]'>
        {
          open ? <GiHamburgerMenu onClick={() => setOpen(false)} className='text-white opacity-70 text-3xl cursor-pointer leading-none'></GiHamburgerMenu> :
            <GiHamburgerMenu onClick={() => setOpen(true)} className='text-white text-3xl cursor-pointer leading-none'></GiHamburgerMenu>
        }
      </div>

      <div className='w-[25rem] flex ps-10 relative overflow-hidden ms-[3rem]'>
        <ul className='ms-auto flex gap-1 flex-col items-end w-full'>
          {tipoUsuario == 'cliente' && listCliente.map((item, index) => {
            if (item.name == ventana) {
              return <li className='text-xl w-[calc(25rem-2.5rem)] font-semibold px-2 py-2 text-center rounded-bl-xl rounded-tl-xl bg-white text-black cursor-pointer duration-75 hover:shadow-[-4px_4px_8px_0px_rgba(0,0,0,0.4)]' key={index}>
                <span>{item.name}</span>
              </li>
            } else {
              return <li onClick={() => {
                setVentana(item.name)
                setPagina(item.component)
              }} className='text-xl w-[calc(25rem-2.5rem)] font-semibold px-2 py-2 text-center rounded-bl-xl rounded-tl-xl text-white hover:bg-white hover:text-black cursor-pointer duration-75 hover:shadow-[-4px_4px_8px_0px_rgba(0,0,0,0.4)]' key={index}>
                <span>{item.name}</span>
              </li>
            }
          })}

          {tipoUsuario == 'asesor' && listAsesor.map((item, index) => {
            if (item.name == ventana) {
              return <li className='text-xl w-[calc(25rem-2.5rem)] font-semibold px-2 py-2 text-center rounded-bl-xl rounded-tl-xl bg-white text-black cursor-pointer duration-75 hover:shadow-[-4px_4px_8px_0px_rgba(0,0,0,0.4)]' key={index}>
                <span>{item.name}</span>
              </li>
            } else {
              return <li onClick={() => {
                setVentana(item.name)
                setPagina(item.component)
              }} className='text-xl w-[calc(25rem-2.5rem)] font-semibold px-2 py-2 text-center rounded-bl-xl rounded-tl-xl text-white hover:bg-white hover:text-black cursor-pointer duration-75 hover:shadow-[-4px_4px_8px_0px_rgba(0,0,0,0.4)]' key={index}>
                <span>{item.name}</span>
              </li>
            }
          })}
        </ul>
      </div>

    </div>
  )
}
