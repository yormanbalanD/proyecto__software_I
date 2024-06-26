import flowbite from 'flowbite-react/tailwind'

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
      rosado: '#b2559b',
      verde: 'rgb(7,127,116)',
      verdeOscuro: '#00463b'
    }
  },
  plugins: [
    flowbite.plugin()
  ],
}