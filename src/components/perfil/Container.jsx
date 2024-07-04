import React, { useState } from 'react'
import Nav from '../Nav'
import Aside from './AsidePerfil'
import MiPerfil from './MiPerfil'
import Footer from '../Footer'


export default function Container() {
    const [pagina, setPagina] = useState(<MiPerfil tipoUsuario={'cliente'} />)

    return (
        <div>
            <Nav></Nav>
            <main className='flex w-full mb-10'>
                <Aside tipoUsuario={'asesor'} setPagina={setPagina}></Aside>
                {pagina}
            </main>
            <Footer></Footer>
        </div>
    )
}
