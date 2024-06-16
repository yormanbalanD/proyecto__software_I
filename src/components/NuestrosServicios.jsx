import React from 'react'
import Tarjeta from './componenteNuestroServicio/Targeta'
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
    <div className="w-auto h-auto relative my-10">
      <div className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className='bg-rosado bg-opacity-70 flex flex-col items-center'>
          <h1 className='text-white font-bold  underline-offset-2 text-[50px] tracking-[2px] mt-14'>Nuestros Servicios</h1>
          <div className="w-32 h-1 bg-white bg-opacity-80"></div>

          <div className='flex gap-8 py-28 flex-wrap'>
            {servicios.map((servicio) => (
              <Tarjeta key={servicio.id} titulo={servicio.titulo} icon={servicio.icon} contenido={servicio.contenido} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
