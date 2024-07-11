import React from "react";
import { useState } from "react";

import { set, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import ErrorMessage from "./formularios/ErrorMessage";

import Input from "./formularios/Input";
import { FaLock } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { useCookies } from "react-cookie";
import URLBACKEND from "../config/env";
import { redirect } from "react-router-dom";
import { redirectDocument } from "react-router-dom";
import { useEffect } from "react";

const SchemaLogin = z.object({
  email: z.string({
    required_error: 'Introduzca el Correo Electronico',
  }).email({
    message: 'El Correo Electronico ingresado no es valido',
  }),
  password: z.string({
    required_error: 'Introduzca la Contraseña',
  }).min(8, {
    message: 'La contraseña debe tener al menos 8 caracteres',
  }),
})

const LoginForm = ({ value, onChange }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(SchemaLogin)
  })
  const [cookies, setCookie] = useCookies(['token']);
  const [enviandoPeticion, setEnviandoPeticion] = useState(false)

  const onSubmit = async (data) => {
    setEnviandoPeticion(true)

    const request = await fetch(`${URLBACKEND}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (request.status === 200) {
      const response = await request.json()
      console.log(response)
      setCookie('token', response.data.token)
      setCookie('user', response.data.user)

      alert('Iniciaste Sesión con éxito')
      window.location.href = '/'
      setEnviandoPeticion(false)
    } else {
      setEnviandoPeticion(false)
      alert('Error, Usuario o contraseña incorrectos')
    }
  }

  useEffect(() => {
    if (cookies.token) {
      window.location.href = '/'
    }
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-4 flex flex-col justify-center h-full w-full max-w-md mx-auto">
      <img src="/public/LogoM&R.png" className="w-32 m-2 mb-10 flex self-center" />
      <div className={'mb-5'}>
        <Input type='text' icon={<MdEmail className="text-3xl" />} label={'Correo Electronico'} register={register('email')} name={'email'} />
        {errors.email && <ErrorMessage value={errors.email.message} />}
      </div>
      <div className={'mb-5'}>
        <Input type='password' icon={<FaLock className="text-2xl" />} label={'Contraseña'} register={register('password')} name={'password'} />
        {errors.password && <ErrorMessage value={errors.password.message} />}
      </div>
      {/* <div className="flex items-center justify-between mb-10 mt-2">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="rounded checked:bg-morado focus:ring-morado" />
          <span>Recordar</span>
        </div>
      </div> */}
        {
          !enviandoPeticion &&
          <button type="submit" className="w-full bg-rosado active:shadow-none hover:bg-morado text-white py-2 px-10 rounded-md">Iniciar Sesion</button>
        }

        {
          enviandoPeticion &&
          <button disabled className="w-full bg-rosadoDisabled active:shadow-none text-white py-2 px-10 rounded-md cursor-progress">Iniciar Sesion</button>
        }
    </form>
  );
};

export default LoginForm;