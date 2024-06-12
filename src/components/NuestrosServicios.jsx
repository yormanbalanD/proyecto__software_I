import React from 'react'
import Tarjeta from './componenteNuestroServicio/Tarjeta.jsx'
import { FaBuilding } from "react-icons/fa";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { MdOutlinePriceCheck } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

export default function NuestrosServicios() {

  const servicios = [
    {
      id: 0,
      titulo: "Asesoria en Ventas y Arrendamiento",
      contenido: "Tenemos toda la experiencia para hacer la diferencia entre el exito y el fracaso",
      icon: <FaBuilding />

    },
    {
      id: 1,
      titulo: "Estudios de Mercado",
      contenido: "Ponemos a tu disposicion la informacion que necesitas para tomar decisiones",
      icon: <BsSuitcaseLgFill />
    },
    {
      id: 2,
      titulo: "Amplio Inventario de Inmuebles",
      contenido: "Nuestro inventario de inmuebles te da la confianza de que encontraras los que buscas",
      icon: <GoChecklist />
    },
    {
      id: 3,
      titulo: "Valoracion de Inmuebles",
      contenido: "Nuestro analisis de costo te genera la tranquilidad de saber que estas pagando el precio justo",
      icon: <MdOutlinePriceCheck />

    },

    {
      id: 4,
      titulo: "Servicio Adicionales",
      contenido: "Nuestra asesoria en seguros y los servicios posventate dan la tranquilidad de saber que estas en buenas manos",
      icon: <FaHandshake />
    }


  ]

  return (
    <div className="relative w-auto h-auto min-h-screen">

      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/background.jpg')" }}>

        <div className='absolute inset-0 bg-[#b2559b] bg-opacity-70 flex flex-col items-center'>

          <h1 className='text-white font-bold  underline-offset-2 text-[50px] tracking-[2px]  mt-14'>  Nuestros Servicios</h1>
          <div className="w-[120px] h-1 bg-white bg-opacity-80 translate-y-[20px]"></div>

          <div className='flex mt-12'>

            {servicios.map((servicio) => (
              <div key={servicio.id} className=' ms-6  '>
                <Tarjeta titulo={servicio.titulo} icon={servicio.icon} contenido={servicio.contenido} customclass={servicio.id == 2 ? 'translate-y-[-20px] shadow-lg shadow-[#0C030B]' : ''} />
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

