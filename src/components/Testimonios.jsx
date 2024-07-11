import React from "react";

import { RiStarSFill } from "react-icons/ri";

export default function Testimonios() {
  return (
    <div className="flex w-full justify-center">
      <div className="relative flex text-gray-700 flex-row align-middle max-w-6xl mt-24 mb-96">
        <div className="w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0">
          <img
            src="img_testimonios.jpg"
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 flex flex-col items-center justify-start">
          <h4 className="text-center block font-sans font-bold text-5xl antialiased leading-snug tracking-normal text-[#b2559b]">
            Testimonios
          </h4>
          <p className="px-24 py-4 text-center block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            No lo decimos nosotros, lo dicen nuestros clientes Inmobiliaria M&R tu
            asesor de confianza
          </p>
          <div className="absolute -bottom-56 left-72 bg-clip-border rounded-xl bg-white shadow-lg w-full max-w-2xl p-12">
            <div className="flex">
              <div className="w-1/12 flex items-center">
                <svg
                  class="w-12 h-10 text-gray-800 dark:text-white -mt-40 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  transform="rotate(180)"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-11/12">
                <p className="font-sans text-base antialiased font-normal leading-relaxed text-gray-700 m-8">
                  Excelente asesor inmobiliario. Responsabilidad, profesionalismo
                  y compromiso, 100% recomendados y satisfecha con su labor. Mil
                  Gracias M/R. Queremos expresar nuestras gracias por ser nuestro
                  agente inmobiliario.
                </p>
                <div className="flex">
                  <p className="font-sans text-base antialiased font-normal leading-relaxed text-[#b2559b]">
                    - Vanesa Guzmán
                  </p>
                  <div className="flex leading-none items-center justify-center ms-auto text-3xl pe-8 text-yellow-300">
                    <RiStarSFill className=" drop-shadow-[0px_0px_1px_rgba(0,0,0,.4)]"/>
                    <RiStarSFill className=" drop-shadow-[0px_0px_1px_rgba(0,0,0,.4)]"/>
                    <RiStarSFill className=" drop-shadow-[0px_0px_1px_rgba(0,0,0,.4)]"/>
                    <RiStarSFill className=" drop-shadow-[0px_0px_1px_rgba(0,0,0,.4)]"/>
                    <RiStarSFill className=" drop-shadow-[0px_0px_1px_rgba(0,0,0,.4)]"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
