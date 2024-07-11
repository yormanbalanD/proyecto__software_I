import Select from '../formularios/Select'
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import URLBACKEND from '../../config/env'
import Input from '../formularios/Input'

export default function AsideCatalogo({ requestFilters, isLoading }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const [filters, setFilters] = useState([])

  const getFilters = async () => {
    const request = await fetch(`${URLBACKEND}/api/estate/filters`, {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })

    const response = await request.json()
    setFilters(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getFilters()
  }, [])

  /**
   * 
   * @param {Object} data 
   */
  const onSubmit = (data) => {
    const temp = {}
    for (const [key, value] of Object.entries(data)) {
      if (value.length > 0) {
        temp[key] = value
      }
    }
    console.log(temp)
    requestFilters(temp)
  }

  return (
    <aside className="w-full max-w-[17rem] min-h-32 h-auto border-r-2 ps-10 pe-8 py-3">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <h1 className='font-bold text-lg mb-3'>Filtros</h1>

          <Select register={register('city')} className='w-full bg-morado text-white rounded-md px-4 py-3 font-semibold mb-5'>
            <option value="">Ciudad</option>
            {filters.length > 0 && filters.find(el => el.name == 'city').data.map(el => {
              return <option key={el + "-city"} value={el}>{el}</option>
            })}
          </Select>

          <Select register={register('type')} className='border-2 w-full rounded-md px-4 py-3 mb-5 font-semibold border-verde'>
            <option value="">Tipo</option>
            {filters.length > 0 && filters.find(el => el.name == 'type').data.map(el => {
              return <option key={el + "-type"} value={el}>{el}</option>
            })}
          </Select>

          <span className='font-semibold mb-2 block'>Metros Construidos</span>
          <div className='flex flex-col gap-y-3 mb-8'>
            <Input register={register('min_meters')} className='border-2 w-full rounded-md font-semibold border-verde' label='Metros minimos' />
            <Input register={register('max_meters')} className='border-2 w-full rounded-md font-semibold border-verde' label='Metros maximos' />
          </div>

          <Select register={register('price')} className='border-2 w-full rounded-md px-4 py-3 mb-5 font-semibold border-verde'>
            <option value="">Ordenar por Precio</option>
            {filters.length > 0 && filters.find(el => el.name == 'price').data.map(el => {
              return <option key={el + "-price"} value={el}>{el}</option>
            })}
          </Select>
        </div>

        <div className='px-3'>
          {
            !isLoading &&
            <button className='bg-azulClaro hover:bg-azulClaroBotonesHover duration-75 px-4 py-2 text-lg font-semibold text-white rounded-md w-full'>Filtrar</button>
          }
          {
            isLoading &&
            <button disabled className='bg-azulClaroDisabled duration-75 px-4 py-2 text-lg font-semibold text-white rounded-md w-full'>Filtrar</button>
          }
        </div>
      </form>
    </aside>
  )
}