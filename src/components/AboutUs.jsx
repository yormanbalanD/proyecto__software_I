export default function AboutUs() {
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
  