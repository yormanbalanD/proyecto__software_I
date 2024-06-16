import React, { useState } from 'react';
import { HiUserGroup } from "react-icons/hi2";
import { PiHeadsetFill, PiShieldCheckFill } from "react-icons/pi"

export default function PorqueElegirnos() {
  const elem = [
    {
      title: "Experiencia",
      description: <p>Tenemos m&aacute;s de 14 a&ntilde;os trabajando para ti.</p>,
      icon: <HiUserGroup />
    },
    {
      title: <h3>Atenci&oacute;n Personalizada</h3>,
      description: <p>Contamos con agentes inmobiliarios preparados</p>,
      icon: <PiHeadsetFill />
    },
    {
      title: "Infraestructura",
      description: <p>Tu seguridad es nuestra prioridad</p>,
      icon: <PiShieldCheckFill />
    },
  ];

  return (
    <div className="flex">
      <div className="w-full p-20 ">
        <h2
          style={{ color: "#641459" }}
          className="text-pink-700 font-bold text-5xl text-center pb-2">
          &iquest;Porqu&eacute; Elegirnos?
        </h2>
        <p className="mb-6 p-5 text-sm">
          Nos esforzamos por ser l&iacute;deres en el sector inmobiliario a
          nivel regional y expandir nuestros servicios a nivel nacional e
          internacional
        </p>
        <div className="flex flex-col space-y-7 pb-3 pl-10 pr-10">
          {elem.map((elem, index) => (
            <div
              key={index}
              className="group items-center rounded-lg shadow-lg">
              <div
                className="group flex rounded-lg bg-white hover:bg-rosado text-rosado hover:text-white duration-100">
                <div className="p-5 ml-6 flex">
                  <div className='text-pink-900 my-auto bg-pink-300 group-hover:bg-white rounded-full dark:text-white text-3xl p-2'>
                    {elem.icon}
                  </div>
                </div>
                <div className="pt-5 pb-2">
                  <h3 className="text-lg font-semibold text-pink-700 group-hover:text-white">
                    {elem.title}
                  </h3>
                  <p className="text-sm">
                    {elem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <img src="/Edificio.png" alt="Imagen de Edificios" />
      </div>
    </div>
  );
}