import React from "react";
import { useState } from "react";

import Input from '../components/formularios/Input';
// import ContainerInput from "./ContainerInput";
import PasswordButton from "./PasswordButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import  { zodResolver } from '@hookform/resolvers/zod'

import { FaLock, FaP } from "react-icons/fa6"
import { FaUser } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { HiIdentification } from "react-icons/hi2"
import { FaPhoneAlt } from "react-icons/fa"
import { FaPencilAlt } from "react-icons/fa"


const SchemaSingup = z.object({
  nombres: z.string(),
  apellidos: z.string(),
  numeroDeDocumento: z.string(),
  telefono: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string()
})

const SingUpForm = () => {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm({
  //   resolver: zodResolver(SchemaSingup)
  // })
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(SchemaSingup)
  })

  const options = [
    { value: 'v', label: 'V' },
    { value: 'rifJ', label: 'RIF-J' },
    { value: 'rifV', label: 'RIF-V' },
  ];

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-4">
      {/* Title part */}
      <div className="flex justify-end items-center pb-5">
        <div className="flex flex-col justify-around h-min me-4">
          <h1 className="text-right text-5xl font-semibold text-morado mb-4">Registrarse</h1> {/* AQUI PODRIA AGREGAR LA VARIBLE DEL COLOR SELECIONADO */}
          <p className="text-right"><span className="font-semibold">Registrate para realizar la reserva de tu inmueble</span> y disfrutar de tu área privada</p>
        </div>
        <img src="./public/LogoM&R.png" className="w-28 m-2" />
      </div>
      {/* form */}

      <div className="grid grid-cols-2 gap-5">
        <Input icon={<FaUser className="text-2xl"/>} label={'Nombre'} type={'text'} register={register('nombres')} name={'nombres'} />
        <Input icon={<FaPencilAlt className="text-2xl"/>} label={'Apellidos'} type={'text'} register={register('apellidos')} name={'apellidos'}  />

        {/* <div className="mb-3 relative border-b border-gray-400">
          <label htmlFor="tipoDocumento" className="flex text-gray-500 absolute p-3">
            <svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 16v-3h.375a.626.626 0 0 1 .625.626v1.749a.626.626 0 0 1-.626.625H6Zm6-2.5a.5.5 0 1 1 1 0v2a.5.5 0 0 1-1 0v-2Z" /><path fillRule="evenodd" d="M11 7V2h7a2 2 0 0 1 2 2v5h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6a2 2 0 0 0 2-2Zm7.683 6.006 1.335-.024-.037-2-1.327.024a2.647 2.647 0 0 0-2.636 2.647v1.706a2.647 2.647 0 0 0 2.647 2.647H20v-2h-1.335a.647.647 0 0 1-.647-.647v-1.706a.647.647 0 0 1 .647-.647h.018ZM5 11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 9 15.375v-1.75A2.626 2.626 0 0 0 6.375 11H5Zm7.5 0a2.5 2.5 0 0 0-2.5 2.5v2a2.5 2.5 0 0 0 5 0v-2a2.5 2.5 0 0 0-2.5-2.5Z" clipRule="evenodd" /><path d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Z" /></svg>
          </label>
          <select id="seleccion" name="seleccion" placeholder="Tipo de documento" className="block w-full p-3 pl-10 rounded-md bg-transparent border-none focus:ring-0 outline-none" required>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div> */}
        <Input icon={<HiIdentification className="text-3xl"/>} label='Numero de Documento' type='text' register={register('numeroDeDocumento')} name={'numeroDeDocumento'} />

        <Input icon={<FaPhoneAlt className="text-2xl"/>} label='Telefono' type={'tel'} register={register('telefono')} name={'telefono'} />
        <Input icon={<MdEmail className="text-3xl"/>} label={'Correo Electronico'} type={'email'} register={register('email')} name={'email'} />

        <Input icon={<FaLock className="text-2xl"/>} label={'Contraseña'} type={'password'} register={register('password')} name={'password'} />
        <Input icon={<FaLock className="text-2xl"/>} label={'Confirmar Contraseña'} type={'password'} register={register('confirmPassword')} name={'confirmPassword'} />

        <div className="mb-3 col-span-2 flex items-center">
          <input type="checkbox" id="acepto" name="acepto" className="block w-h-5 rounded-md focus:outline-none focus:ring-morado pr-2 checked:bg-morado" required />
          <label htmlFor="acepto" className="inline-block ml-2 text-gray-700 text-left">Consineto que M&R Inversiones y Desarrollos, trate mis datos personales con la finalidad de remitirme comunicaciones comerciales por medios ordinarios y/o electrónicos sobre sus productos y/o servicios</label>
        </div>
      </div>
      {/* Send form button */}
      <div className="flex justify-center p-2">
        <button type="submit" className="w-fit bg-rosado active:shadow-none hover:bg-morado text-white py-2 px-10 rounded-md">Registrarse</button>
      </div>
    </form>
  )
}

export default SingUpForm;