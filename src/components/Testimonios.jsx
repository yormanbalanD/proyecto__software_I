import React from "react";
import "flowbite";
import img2 from "../assets/img_testimonios.jpg";

export default function Testimonios() {
  return (
    <div className="relative flex text-gray-700 flex-row align-middle m-20">
      <div className="w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0">
        <img
          src={img2}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 flex flex-col items-center justify-start">
        <h4 className="text-center block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-[#b2559b]">
          Testimonios
        </h4>
        <p className="px-20 py-4 text-center block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          No lo decimos nosotros, lo dicen nuestros clientes Inmobiliaria M&R tu
          asesor de confianza
        </p>
        <div className="absolute -bottom-56 left-72 bg-clip-border rounded-xl bg-white shadow-lg w-full max-w-[48rem] p-14">
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
              <p className="font-sans text-base antialiased font-normal leading-relaxed text-[#b2559b] m-5">
                - Vanesa Guzmán
              </p>
              <div className=" mx-6 flex justify-end">
                <svg
                  className="w-6 h-6 text-[#b2559b] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="w-6 h-6 text-[#b2559b] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-[#b2559b] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="w-6 h-6  text-[#b2559b] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-[#b2559b] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
