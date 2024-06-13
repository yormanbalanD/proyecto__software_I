import React from "react";

function NavLink({ children, href }) {
  return (
    <li className="mr-6">
      <a href={href} className="text-black font-bold hover:text-[#891f62]">
        {children}
      </a>
    </li>
  );
}

function Navbar() {
  return (
    <nav className="bg-[#f2f3f2] py-4">

      <div className="container mx-auto px-4 flex justify-end">
      <div className="absolute left-10 top-1">
          <img
            src="/LogoM&R.png"
            alt="An image that represents M&R Inversiones y Desarrollo"
            className="w-40 h-40 "
          />
        </div>
        <div className="flex justify-end">
          <ul className="flex items-center">
            <NavLink href="#">Inicio</NavLink>
            <NavLink href="#">Nosotros</NavLink>
            <NavLink href="#">Servicios</NavLink>
            <NavLink href="#">Catálogo</NavLink>
            <NavLink href="#">Contacto</NavLink>
            <NavLink href="#">Más</NavLink>
          </ul>
        </div>

        <button className="bg-[#ce4a9c] hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Registrarme
        </button>
        
        <div className="flex items-center gap-2 px-4">
          <div>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
            </svg>
          </div>
          <div>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

function AboutUs() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-7xl font-bold mb-12 text-[#812a69]">
        {" "}
        ¿Quiénes Somos?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:w-full">
          <p className="text-lg mb-4 text-justify">
            Bienvenidos a M&R Inversiones y Desarrollo, una organización
            innovadora dedicada a ofrecer servicios inmobiliarios de calidad y
            asesoramiento a nuestros clientes y empresas afines. Nos enorgullece
            brindar seguridad, bienestar y calidad de vida a través de un equipo
            de profesionales altamente calificados en el área.
          </p>
          <p className="text-lg mb-4 text-justify">
            En M&R Inversiones y Desarrollo, nos esforzamos por ser líderes en
            el sector inmobiliario a nivel regional y expandir nuestros
            servicios a nivel nacional e internacional. Para lograrlo,
            utilizamos las tecnologías más avanzadas para ofrecer calidad y
            exclusividad en todos nuestros servicios.
          </p>
          <p className="text-lg mb-4 text-justify">
            Nuestro compromiso con los principios y valores de honestidad,
            confianza, responsabilidad, excelencia, sostenibilidad, humildad,
            trabajo en equipo e innovación tecnológica nos guía en cada una de
            nuestras actuaciones.
          </p>
          <p className="text-lg mb-4 text-justify">
            Orientamos nuestros esfuerzos a conocer y satisfacer las necesidades
            de cada uno de nuestros clientes, priorizando la orientación al
            cliente en todo momento.
          </p>
        </div>

        <div className="h-full w-full">
          <img
            src="#"
            alt="An image that represents M&R Inversiones y Desarrollo"
            className="w-full h-full rounded bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div>
      <Navbar />
      <AboutUs />
    </div>
  );
}

export default Nav;