import React from "react";
import { useState } from "react";

import Input from "./formularios/Input";
import { FaLock } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const LoginForm = ({ value, onChange }) => {
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState('');

  return (
    <form className="px-8 py-4 flex flex-col justify-center h-full w-full max-w-md mx-auto">
      <img src="./public/LogoM&R.png" className="w-32 m-2 mb-10 flex self-center" />
      <Input className={'mb-5'} type='text' icon={<MdEmail className="text-3xl"/>} label={'Usuario'} value={usuario} onChange={setUsuario} />
      <Input className={'mb-5'} type='password' icon={<FaLock className="text-2xl"/>} label={'Contraseña'} value={password} onChange={setPassword} />
      <div className="flex items-center justify-between mb-10 mt-2">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="rounded checked:bg-morado focus:ring-morado" />
          <span>Recordar</span>
        </div>
        {/* <a href="#" className="text-black text-sm hover:text-rosado">
          ¿Has olvidado tu contraseña?
        </a> */}
      </div>
      <button className="bg-rosado active:shadow-none text-white px-4 py-2 rounded-lg shadow-xl hover:bg-morado">
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;