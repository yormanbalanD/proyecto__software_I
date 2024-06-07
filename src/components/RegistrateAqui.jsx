import React from 'react';


const Header = () => (
  <h2 className="text-center text-2xl font-bold text-[#641459] mb-4">Registrate Aquí</h2>
);

const Form = () => (
  <form className="flex flex-col">
    <input
      type="email"
      placeholder="Ingresa tu email..."
      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 "
    />
    <button
      type="submit"
      className="bg-[#641459] text-white font-bold py-2 px-4 rounded hover:bg-purple-500"
    >
      Enviar
    </button>
  </form>
);

const Footer = () => (
  <footer className="bg-[#ce4b9f] text-white  p-4 w-full  py-20 z-0" id='foot'>
    <div className="container mx-auto flex flex-col items-center justify-between ">
      <div className="mb-4 h-20">
        
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
      <div className=" z-0">
          <img src ="/LogoM&R.png" className='w-20'></img>
        </div>
        <div className="mb-4 md:mb-0 md:mr-4">
          <h3 className="font-bold">Contacto</h3>
          <p>+58 424-9477-865</p>
          <p>+58 414-0950-342</p>
        </div>

       

        <div>
          <h3 className="font-bold">Dirección</h3>
          <p>Piso 3, Oficina 3 Centro Empresarial Ferrozasa</p>
          <p>Torre B A, C. El Miamo, Ciudad Guayana 5080, Bolívar, Venezuela</p>
        </div>
        
      </div>
      <div className='text-white'>________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</div>
      
      
      <div className="flex justify-center mt-4 space-x-4">
        <a href="#" className="text-white font-bold hover:text-gray -300">
          Youtube
        </a>
        <a href="#" className="text-white font-bold hover:text-gray-300">
          Instagram
        </a>
        <a href="#" className="text-white font-bold hover:text-gray-300">
          Linkedln
        </a>
        <a href="#" className="text-white font-bold hover:text-gray-300">
          Twitter
        </a>
        <a href="#" className="text-white font-bold hover:text-gray-300">
          Facebook
        </a>
      </div>
      
    </div>
   
  </footer>
);

export default function RegistrateAqui() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen flex-direction-reverse">
      <Footer />
      <div className="bg-white shadow-[0_20px_40px_rgba(0,0,0,0.7)] rounded p-11 w-full lg:w-2/5   z-1 translate-y-[-515px] " id='mondongo'>
        <Header />
        <Form />
      </div>
    </div>
  );
};