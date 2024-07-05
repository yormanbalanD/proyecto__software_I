import Select from '../formularios/Select'

export default function AsideCatalogo() {
  return (
    <aside className="w-full max-w-[17rem] min-h-32 h-auto border-r-2 ps-10 pe-8">
      <Select className='w-full bg-morado text-white rounded-md px-4 py-3 font-semibold mb-20'>
        <option value="alquiler">Alquiler</option>
        <option value="venta">Venta</option>
      </Select>

      <h1 className='font-bold text-lg mb-3'>Filtros</h1>
      <Select className='border-2 w-full rounded-md px-4 py-3 font-semibold border-verde'>
        <option value="alquiler">Oficina</option>
        <option value="alquiler">Terreno</option>
        <option value="alquiler">Departamento</option>
        <option value="alquiler">Townhouse</option>
        <option value="venta">Casa</option>
      </Select>
    </aside>
  )
}