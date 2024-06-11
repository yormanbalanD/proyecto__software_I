import React from 'react'

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Search from './Search.jsx';

function Nav() {
  const links = {
    vender: '#',
    ayuda: '#',
    tiendas: '#',
    historial: '#',
    home: '#',
    perfil: '#',
    ajustes: '#',
    saldo: '#',
    logOut: '#',
  }

  return (
    <Navbar className='flex justify-evenly bg-[#002060] text-white' style={{ borderBottom: '1px solid #cdcdcd' }}>
      <Navbar.Brand href={links.home}>
        <img src="/public/LogoM&R.png" className="mr-3 h-6 sm:h-9" alt="Logo M&R" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">M&R</span>
      </Navbar.Brand>

      <div className='flex justify-end w-max'>
        <Search>
        </Search>
      </div>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Nombre Apellido</span>
            <span className="block truncate text-sm font-medium">usuario@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item href={links.perfil}>Mi perfil</Dropdown.Item>
          <Dropdown.Item href={links.ajustes}>Ajustes</Dropdown.Item>
          <Dropdown.Item href={links.saldo}>Saldo🤑</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href={links.logOut}>Cerrar sesión</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='mx-3'>
        <Navbar.Link href={links.home} className='hover:text-gray-400 text-white'>
          Home
        </Navbar.Link>
        <Navbar.Link href={links.vender} className='hover:text-gray-400 text-white'>Vender</Navbar.Link>
        <Navbar.Link href={links.tiendas} className='hover:text-gray-400 text-white'>Tiendas Oficiales</Navbar.Link>
        <Navbar.Link href={links.historial} className='hover:text-gray-400 text-white'>Historial</Navbar.Link>
        <Navbar.Link href={links.ayuda} className='hover:text-gray-400 text-white'>Ayuda</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav