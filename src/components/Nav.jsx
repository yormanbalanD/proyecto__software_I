import { FaUserCircle, FaBell } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { set } from "react-hook-form";

function NavLink({ children, href }) {
  return (
    <li className="mr-6">
      <a href={href} className="text-black font-bold hover:text-[#891f62]">
        {children}
      </a>
    </li>
  );
}

export default function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [user, setUser] = useState(cookies.user)
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-[#f2f3f2] py-2 w-full flex">
      <div className="px-4 flex justify-between w-full">
        <div className="h-20 flex">
          <a href="/">
            <img
              src="/LogoM&R.png"
              alt="An image that represents M&R Inversiones y Desarrollo"
              className="h-full"
            />
          </a>
        </div>

        <div className="flex items-center w-full justify-end">
          <div className="flex justify-end">
            <ul className="flex items-center">
              <NavLink href="/">Inicio</NavLink>
              {/* <NavLink href="/nosotros">Nosotros</NavLink> */}
              <NavLink href="/#servicios">Servicios</NavLink>
              <NavLink href="/catalogo">Inmuebles</NavLink>
              <NavLink href="/contacto">Contacto</NavLink>
              {/* <NavLink href="#">Más</NavLink> */}
            </ul>
          </div>

          {!user &&
            <a href="/login" className="bg-[#ce4a9c] hover:bg-purple-600 text-white h-min font-bold py-2 px-3 rounded">
              Iniciar Sesion
            </a>}

          {user &&
            <div className="flex items-center gap-2 ps-2 pe-4">
              <div className="relative">
                <FaUserCircle className="text-3xl cursor-pointer" onClick={() => setOpen(!open)} />

                {open && <div className="bg-white absolute top-10 right-0 w-max h-min z-10 flex flex-col rounded-md shadow-md">
                  <ul>
                    <a href="/perfil">
                      <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                        Perfil
                      </li>
                    </a>
                    {/* <a href="/perfil#favoritos">
                      <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                        Favoritos
                      </li>
                    </a> */}
                    <a href="#" onClick={() => {
                      removeCookie('user')
                      removeCookie('token')
                      setUser(undefined)
                    }}>
                      <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                        Cerrar Sesión
                      </li>
                    </a>
                  </ul>
                </div>}
              </div>
            </div>
          }

        </div>
      </div>
    </nav>
  );
}