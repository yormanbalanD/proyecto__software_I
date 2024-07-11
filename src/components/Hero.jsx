import React, { useState } from 'react';

const tiposDeBusqueda = [{
  label: 'Venta'
}, {
  label: 'Alquiler'
}, {
  label: 'Compra'
}]

function App() {
  const [tipoBusqueda, setTipoBusqueda] = useState("Venta")

  return (
    <div className="bg-white mt-5 mb-14 flex">
      <div className="max-w-7xl mx-auto px-4 py-12 flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl text-[#641459] leading-normal font-bold mb-12">Hacemos de tus Sueños Inmobiliarios una Realidad</h1>
          <p className="text-xs text-[#515151] leading-loose mb-10 w-2/3">
            Bienvenidos a M&R Inversiones y Desarrollo, una organización innovadora dedicada a ofrecer servicios
            inmobiliarios de calidad y asesoramiento a nuestros clientes y empresas afines.
          </p>
          <a href='/catalogo' className="bg-verde text-white px-6 py-2 mx-10 text-sm font-semibold hover:bg-[#b2559b] shadow-md shadow-[#515151]">Ver más</a>
        </div>
        <div className="w-1/2 -mt-12 -mr-10 -mb-12 relative">
          <img
            src="inicio.jpg"
            alt="Placeholder image"
            width={1080}
            height={670}
            className="bg-[#b5b5b5]"
          />
          {/* <div className="flex absolute items-end bottom-0">
            {tiposDeBusqueda.map((val) => {
              if (val.label == tipoBusqueda) {
                return (
                  <button variant="secondary" className="bg-white text-[#641459] shadow-[0px_-3px_14px_0px_rgba(0,0,0,0)_inset] text-xs px-8 py-4">
                    {val.label}
                  </button>
                )
                } else {
                return (
                  <button variant="secondary" onClick={() => setTipoBusqueda(val.label)} className="bg-verde hover:bg-white hover:text-[#641459] shadow-[0px_-3px_14px_0px_rgba(0,0,0,0)_inset] text-white text-xs h-min px-8 py-3">
                    {val.label}
                  </button>
                )
              }
            })}
          </div> */}
        </div>
      </div>
      {/* <div className="bg-[#b2559b] mb-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4">
          <div className="bg-white flex mx-auto space-x-2 text-xs px-4 py-3 rounded-md mb-2 shadow-md shadow-[#515151]">
            <select className="text-xs border-0 text-[#641459]">
              <option value='' disabled selected hidden>Alquiler</option>
              <option value='opc1'>Opc 1</option>
              <option value='opc1'>Opc 2</option>
              <option value='opc1'>Opc 3</option>
            </select>
            <select className="text-xs border-0 text-[#641459]">
              <option value='' disabled selected hidden>Vivienda</option>
              <option value='opc1'>Opc 1</option>
              <option value='opc1'>Opc 2</option>
              <option value='opc1'>Opc 3</option>
            </select>
            <input
              placeholder="Búsqueda detallada..."
              className="rounded-md px-4 py-2 bg-white min-w-[700px] text-[#641459] shadow-md shadow-[#515151] focus:outline-none focus:ring-2 focus:ring-[#641459]"
            />
            <button variant="secondary" className="bg-[#641459] text-white px-2 py-2 rounded-md hover:bg-[#b2559b]">
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-white flex mx-auto space-x-9 px-9 text-xs mb-20">
            <select className="text-xs border-0 text-[#641459]">
              <option value='' disabled selected hidden>Superficie</option>
              <option value='opc1'>Opc 1</option>
              <option value='opc1'>Opc 2</option>
              <option value='opc1'>Opc 3</option>
            </select>
            <select className="text-xs border-0 text-[#641459]">
              <option value='' disabled selected hidden>Habitaciones</option>
              <option value='opc1'>Opc 1</option>
              <option value='opc1'>Opc 2</option>
              <option value='opc1'>Opc 3</option>
            </select>
            <select className="text-xs border-0 text-[#641459]">
              <option value='' disabled selected hidden>Baños</option>
              <option value='opc1'>Opc 1</option>
              <option value='opc1'>Opc 2</option>
              <option value='opc1'>Opc 3</option>
            </select>
            <select className="text-xs border-0 text-[#641459]">
              <option value='' disabled selected hidden>Precio máx</option>
              <option value='opc1'>Opc 1</option>
              <option value='opc1'>Opc 2</option>
              <option value='opc1'>Opc 3</option>
            </select>
            <select className="text-xs border-0 text-[#641459]">
              <option value='' disabled selected hidden>Más filtros</option>
              <option value='opc1'>Opc 1</option>
              <option value='opc1'>Opc 2</option>
              <option value='opc1'>Opc 3</option>
            </select>
          </div>
        </div>
      </div> */}
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


export default App;
