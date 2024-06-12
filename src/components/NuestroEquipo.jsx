import React, { useState } from 'react';

export default function NuestroEquipo() {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

  const personas = [
    {
      nombre: "Jesús Rondón",
      cargo: "Director General",
      descripcion: '"Es más caro tomar una mala decisión inmobiliaria que acudir a profesionales que te asesoren para evitarla"',
      redes: ["whatsapp", "instagram", "twitter"],
      imagen: "https://flowbite.com/docs/images/people/profile-picture-5.jpg" // Ruta de la imagen
    },
    {
      nombre: "Madelin Guzmán",
      cargo: "Asesor Inmobiliario",
      descripcion: '"Es más caro tomar una mala decisión inmobiliaria que acudir a profesionales que te asesoren para evitarla"',
      redes: ["whatsapp", "instagram", "twitter"],
      imagen: "https://flowbite.com/docs/images/people/profile-picture-4.jpg" // Ruta de la imagen
    },
    {
      nombre: "María Cova",
      cargo: "Asesor Inmobiliario",
      descripcion: '"Es más caro tomar una mala decisión inmobiliaria que acudir a profesionales que te asesoren para evitarla"',
      redes: ["whatsapp", "instagram", "twitter"],
      imagen: "https://flowbite.com/docs/images/people/profile-picture-3.jpg" // Ruta de la imagen
    },
    {
      nombre: "Luis Fernandez",
      cargo: "Asesor Inmobiliario",
      descripcion: '"Es más caro tomar una mala decisión inmobiliaria que acudir a profesionales que te asesoren para evitarla"',
      redes: ["whatsapp", "instagram", "twitter"],
      imagen: "https://flowbite.com/docs/images/people/profile-picture-1.jpg" // Ruta de la imagen
    },
    {
      nombre: "Angel Rodriguez",
      cargo: "Asesor Inmobiliario",
      descripcion: '"Es más caro tomar una mala decisión inmobiliaria que acudir a profesionales que te asesoren para evitarla"',
      redes: ["whatsapp", "instagram", "twitter"],
      imagen: "https://flowbite.com/docs/images/people/profile-picture-2.jpg" // Ruta de la imagen
    },
    {
      nombre: "Lucas Dalto",
      cargo: "Asesor Inmobiliario",
      descripcion: '"Es más caro tomar una mala decisión inmobiliaria que acudir a profesionales que te asesoren para evitarla"',
      redes: ["whatsapp", "instagram", "twitter"],
      imagen: "https://flowbite.com/docs/images/people/profile-picture-5.jpg" // Ruta de la imagen
    },



    // Agrega más personas aquí
  ];

  const handleNext = () => {
    setCurrentPersonIndex((prevIndex) => {
      const nextIndex = prevIndex + 3;
      if (nextIndex >= personas.length) {
        return 0;
      }
      else {
        return nextIndex;
      }
    })
  };

  const handlePrevious = () => {
    setCurrentPersonIndex((prevIndex) => {
      //const nextIndex = prevIndex - 3;
      if (prevIndex === 0) {
        if (personas.length % 3 === 2) {
          return personas.length % 3 + 1;
        } else if (personas.length % 3 === 1) {
          return personas.length % 3 + 2;
        }
        return personas.length - 3;
      }
      else {
        return prevIndex - 3;
      }
    })
  };

  const currentPersons = personas.slice(currentPersonIndex, currentPersonIndex + 3);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold text-[#641459] my-16">Nuestro Equipo</h1>

      <div className="flex gap-10">
        {currentPersonIndex >= 0 && (
          <button onClick={handlePrevious} className="my-auto bg-[#641459] hover:bg-[#b2559b] text-white font-bold py-2 px-4 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
        )}

        {currentPersons.map((person, index) => (
          <div key={index} className="flex flex-col w-64 h-[110] bg-white shadow-md">
            <div  className="relative w-full h-56 mb-4">
            <img src={person.imagen} alt={person.nombre} className="w-full h-full object-cover" />
            <div>
            <h2 className="absolute text-2xl font-bold text-right bg-[#999999] bg-opacity-75 w-full text-white bottom-0 py-2 pr-4">{person.nombre}</h2>
            </div>
             
            </div>
            
            <p className="text-[#641459] text-sm font-bold mx-4 mb-1">{person.cargo}</p>
            <p className="text-[9px] text-gray-600 mx-4 mb-6">{person.descripcion}</p>
            <div className="flex gap-2 ml-44">
              {person.redes.map((red) => (
                <a href={`https://${red}.com`} key={red} className="text-[#641459]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getSocialIconPath(red)} /></svg>
                </a>
              ))}
            </div>
            <button className="mx-auto bg-[#028176] hover:bg-[#00463b] rounded-md shadow-md shadow-[#515151] text-white py-2 px-4 my-6">Contáctame</button>
          </div>
        ))}

        {currentPersonIndex <= personas.length && (
          <button onClick={handleNext} className="my-auto bg-[#641459] hover:bg-[#b2559b] text-white font-bold py-2 px-4 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        )}
      </div>
    </div>
  );
}

// Función para obtener el path del ícono de la red social
function getSocialIconPath(red) {
  switch (red) {
    case "whatsapp":
      return "M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z";
    case "instagram":
      return "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z";
    case "twitter":
      return "M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"
    default:
      return ""; // Regresa un path vacío si no encuentra la red
  }
}
