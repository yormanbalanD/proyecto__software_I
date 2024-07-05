import React from "react";
import { useState } from "react";

import Input from '../components/formularios/Input';
import ErrorMessage from '../components/formularios/ErrorMessage';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

import { FaLock, FaP } from "react-icons/fa6"
import { FaUser } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { HiIdentification } from "react-icons/hi2"
import { FaPhoneAlt } from "react-icons/fa"
import { FaPencilAlt } from "react-icons/fa"


const SchemaSingup = z.object({
  nombres: z.string({
    required_error: 'Introduzca el Nombre',
  }).min(3, {
    message: 'Los Nombres debe tener al menos 3 caracteres',
  }),
  apellidos: z.string({
    required_error: 'Introduzca los Apellidos',
  }).min(3, {
    message: 'Los Apellidos deben tener al menos 3 caracteres',
  }),
  numeroDeDocumento: z.string({
    required_error: 'Introduzca el Numero de Documento',
  }).min(7, {
    message: 'El Numero de Documento debe tener al menos 7 caracteres',
  }),
  telefono: z.string().min(11, {
    message: 'El telefono debe tener al menos 11 caracteres',
  }),
  email: z.string({
    required_error: 'Introduzca el Correo Electronico',
  }).email({
    message: 'El Correo Electronico ingresado no es valido',
  }),
  password: z.string().min(8, {
    message: 'La contraseña debe tener al menos 8 caracteres',
  }),
  confirmPassword: z.string().min(8, {
    message: 'La contraseña debe tener al menos 8 caracteres',
  })
})

const SingUpForm = () => {
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
        <div>
          <Input icon={<FaUser className="text-2xl" />} label={'Nombre'} type={'text'} register={register('nombres')} name={'nombres'} />
          {errors.nombres && <ErrorMessage value={errors.nombres.message} />}
        </div>

        <div>
          <Input icon={<FaPencilAlt className="text-2xl" />} label={'Apellidos'} type={'text'} register={register('apellidos')} name={'apellidos'} />
          {errors.apellidos && <ErrorMessage value={errors.apellidos.message} />}
        </div>

        <div>
          <Input icon={<HiIdentification className="text-3xl" />} label='Numero de Documento' type='text' register={register('numeroDeDocumento')} name={'numeroDeDocumento'} />
          {errors.numeroDeDocumento && <ErrorMessage value={errors.numeroDeDocumento.message} />}
        </div>

        <div>
          <Input icon={<FaPhoneAlt className="text-2xl" />} label='Telefono' type={'tel'} register={register('telefono')} name={'telefono'} />
          {errors.telefono && <ErrorMessage value={errors.telefono.message} />}
        </div>

        <div>
          <Input icon={<MdEmail className="text-3xl" />} label={'Correo Electronico'} type={'email'} register={register('email')} name={'email'} />
          {errors.email && <ErrorMessage value={errors.email.message} />}
        </div>

        <div>
          <Input icon={<FaLock className="text-2xl" />} label={'Contraseña'} type={'password'} register={register('password')} name={'password'} />
          {errors.password && <ErrorMessage value={errors.password.message} />}
        </div>

        <div>
          <Input icon={<FaLock className="text-2xl" />} label={'Confirmar Contraseña'} type={'password'} register={register('confirmPassword')} name={'confirmPassword'} />
          {errors.confirmPassword && <ErrorMessage value={errors.confirmPassword.message} />}
        </div>

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