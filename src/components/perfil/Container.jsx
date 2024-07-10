import React, { useState } from 'react'
import Nav from '../Nav'
import Aside from './AsidePerfil'
import MiPerfil from './MiPerfil'
import Footer from '../Footer'
import { useCookies } from 'react-cookie'


export default function Container() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [user, setUser] = useState(cookies.user)
    console.log(user)
    const [pagina, setPagina] = useState(<MiPerfil tipoUsuario={(user.role == 'consultant') ? 'asesor' : 'cliente'} />)

    return (
        <div>
            <Nav></Nav>
            <main className='flex w-full mb-10'>
                <Aside tipoUsuario={(user.role == 'consultant') ? 'asesor' : 'cliente'} setPagina={setPagina}></Aside>
                {pagina}
            </main>
            <Footer></Footer>
        </div>
    )
}
