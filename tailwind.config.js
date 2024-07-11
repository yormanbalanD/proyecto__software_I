import flowbite from 'flowbite-react/tailwind'

/*verde oscuro: 5 91 83 
vinotinto: 129 35 95
vinotinto oscuro para letras pequeñas: 66 18 49
rosado: 206 74 158
rosado claro en iconos: 239 195 223
azul claro en botones: 0 176 240
rojo botones: 192 0 0
amarillo botones: 255 192 0*/

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    colors: {
      morado: '#641459',
      moradoBotonesHover: '#640549',
      rosado: 'rgb(206, 74, 158)',
      rosadoDisabled: 'rgb(206, 74, 158, 0.5)',
      rosadoClaroIconos: 'rgb(239, 195, 223)',
      verde: 'rgb(7,127,116)',
      verdeOscuro: 'rgb(5, 91, 83)',
      azulClaro: 'rgb(0, 176, 240)',
      azulClaroBotonesHover: 'rgb(0, 150, 250)',
      rojoClaro: 'rgb(192, 0, 0)',
      rojoBoton: 'rgb(192, 0, 0)',
      vinotinto: 'rgb(129, 35, 95)',
      vinotintoOscuro: 'rgb(66, 18, 49)',
      amarilloBoton: 'rgb(255, 192, 0)',
    }
  },
  plugins: [
    flowbite.plugin()
  ],
}