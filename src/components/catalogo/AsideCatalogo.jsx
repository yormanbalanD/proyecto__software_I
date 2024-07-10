import Select from '../formularios/Select'
import { useForm } from "react-hook-form";

export default function AsideCatalogo() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <aside className="w-full max-w-[17rem] min-h-32 h-auto border-r-2 ps-10 pe-8 py-3">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <Select register={register('tipo')} className='w-full bg-morado text-white rounded-md px-4 py-3 font-semibold mb-20'>
            <option value="alquiler">Alquiler</option>
            <option value="venta">Venta</option>
          </Select>

          <h1 className='font-bold text-lg mb-3'>Filtros</h1>
          <Select register={register('ofi')} className='border-2 w-full rounded-md px-4 py-3 font-semibold border-verde'>
            <option value="oficina">Oficina</option>
            <option value="terreno">Terreno</option>
            <option value="departamento">Departamento</option>
            <option value="townhouse">Townhouse</option>
            <option value="casa">Casa</option>
          </Select>
        </div>

        <div className='px-3'>
          <button className='bg-azulClaro hover:bg-azulClaroBotonesHover duration-75 px-4 py-2 text-lg font-semibold text-white rounded-md w-full'>Filtrar</button>
        </div>
      </form>
    </aside>
  )
}