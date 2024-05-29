import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaValidation } from "./validations/schemevalidation"
import { Link } from "react-router-dom";

export default function Singup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(SchemaValidation) })


  const onSubmit = (data) => { console.log(data) }


  return (

    <div className='w-full min-h-screen flex bg-[#002060] py-10'>
      <Card className="max-w-xl w-full m-auto bg-gray-100">

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Nombre" value="Nombre" />
              </div>
              <TextInput id="Nombre" type="text" placeholder="Nombre"
                {...register('nombre')} />
              {
                errors.nombre?.message && <p className='text-[#ff0000]'>{errors.nombre?.message} </p>
              }
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="Apellido" value="Apellido" />
              </div>
              <TextInput id="Apellido" type="text" placeholder="Apellido"
                {...register('apellido')} />
              {
                errors.apellido?.message && <p className='text-[#ff0000]'>{errors.apellido?.message} </p>
              }
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Email" value="Email" />
            </div>
            <TextInput id="Email" type="email" placeholder="Email"
              {...register('email')} />
            {
              errors.email?.message && <p className='text-[#ff0000]'>{errors.email?.message} </p>
            }
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cedula" value="Cedula" />
              </div>
              <TextInput id="cedula" type="text"
                {...register('cedula')} placeholder="Cedula" />
              {
                errors.cedula?.message && <p className='text-[#ff0000]'>{errors.cedula?.message} </p>
              }
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="Telefono" value="Telefono" />
              </div>
              <TextInput id="telefono" type="text"
                {...register('telefono')} placeholder="Telefono" />
              {
                errors.telefono?.message && <p className='text-[#ff0000]'>{errors.telefono?.message} </p>
              }
            </div>
          </div>




          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput id="password" type="password"
              {...register('password')} placeholder="Password" />
            {
              errors.password?.message && <p className='text-[#ff0000]'>{errors.password?.message} </p>
            }
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Confirmar Password" />
            </div>
            <TextInput id="password" type="password"
              {...register('confirmarPassword')} placeholder="Password" />
            {
              errors.confirmarPassword?.message && <p className='text-[#ff0000]'>{errors.confirmarPassword?.message} </p>
            }
          </div>



          <div className="flex items-center gap-2">

            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              Acepto terminos y condiciones
            </Label>
          </div>

          <Button type="submit">Registrar</Button>
          <p className="text-center"> ya tienes cuenta? <Link className="text-[#0000ff]" to='/#'>Inicia Sesion</Link></p>
        </form>
      </Card>
    </div>
  )

}

