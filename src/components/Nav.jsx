import { FaUserCircle, FaBell } from "react-icons/fa";

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
  return (
    <nav className="bg-[#f2f3f2] py-2 w-full flex">
      <div className="px-4 flex justify-between w-full">
        <div className="h-20 flex">
          <img
            src="/LogoM&R.png"
            alt="An image that represents M&R Inversiones y Desarrollo"
            className="h-full"
          />
        </div>

        <div className="flex items-center w-full justify-end">
          <div className="flex justify-end">
            <ul className="flex items-center">
              <NavLink href="#">Inicio</NavLink>
              <NavLink href="#">Nosotros</NavLink>
              <NavLink href="#">Servicios</NavLink>
              <NavLink href="/catalogo">Catálogo</NavLink>
              <NavLink href="#">Contacto</NavLink>
              <NavLink href="#">Más</NavLink>
            </ul>
          </div>

          <button className="bg-[#ce4a9c] hover:bg-purple-600 text-white h-min font-bold py-2 px-3 rounded">
            Registrarme
          </button>

          <div className="flex items-center gap-2 px-4">
            <div>
              <FaBell className="text-xl" />
            </div>
            <div>
              <FaUserCircle className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}