import React from "react";

const Header = () => (
  <h2 className="text-center text-2xl font-bold text-[#641459] mb-4">
    Registrate Aquí
  </h2>
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
      className="bg-[#641459] text-white font-bold py-2 px-4 rounded hover:bg-purple-700"
    >
      Enviar
    </button>
  </form>
);

export default function RegistrateAqui() {
  return (
      <div className="bg-white shadow-[0px_0px_20px_5px_rgba(0,0,0,0.48)] rounded p-11 w-full max-w-2xl absolute top-0 z-1" id="mondongo">
        <Header />
        <Form />
      </div>
  );
}
