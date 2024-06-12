import React from "react";
import { useState } from "react";

import Input from "./Input";
import ContainerInput from "./ContainerInput";
import PasswordButton from "./PasswordButton";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <form className="px-8 py-4 flex flex-col justify-center h-full w-full">
        <img src="./public/LogoM&R.png" className="w-28 m-2 mb-10 flex self-center"/>
        <ContainerInput 
            svg={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clipRule="evenodd"/></svg>}
            Input={<Input type={"text"} placeholder={"Usuario"}></Input>}>
        </ContainerInput>
        <ContainerInput 
            svg={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clipRule="evenodd"/></svg>}
            Input={<Input type={showPassword ? "text" : "password"} placeholder={"Contraseña"}></Input>}
            extraElement={<PasswordButton showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility}></PasswordButton>}>
        </ContainerInput>        
        <div className="flex items-center justify-between mx-2 mb-3 mt-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded checked:bg-morado focus:ring-morado"/>
            <span>Recordar</span>
          </div>
          <a href="#" className="text-black text-sm hover:text-rosado">
            ¿Has olvidado tu contraseña?
          </a>
        </div>
        <button className="bg-rosado active:shadow-none text-white px-4 py-2 rounded-lg shadow-xl hover:bg-morado mt-8">
          Iniciar sesión
        </button>
      </form>
    );
  };

  export default LoginForm;