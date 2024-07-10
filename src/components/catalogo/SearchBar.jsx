import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa"

export default function SearchBar({ requestByName }) {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState('')
  
  const searchBarFocused = () => {
    setFocus(true)
  }

  const searchBarBlur = () => {
    setFocus(false)
  }

  return (
    <div className="flex shadow-[0px_0px_15px_3px_rgba(0,0,0,0.3)] bg-white rounded-md py-3 px-5 w-full max-w-2xl mt-12">
      <div className={`${focus ? "shadow-[2px_2px_4px_0px_rgba(0,0,0,0.35)]" : ""} w-full px-2 me-3 flex items-center border-2 border-[#0000001b] duration-75`}>
        <label htmlFor="barraDeBusquedaViviendas">
          <FaSearch className={`text-lg duration-75 text-gray-500 ${focus ? "opacity-75" : "opacity-45"}`} />
        </label>
        <input onChange={e => setValue(e.target.value)} value={value} onFocus={searchBarFocused} onBlur={searchBarBlur} id="barraDeBusquedaViviendas" type="text" className="w-full outline-none border-none ring-0 appearance-none focus:ring-0" placeholder="Buscar Vivienda..." />
      </div>
      <button onClick={() =>requestByName(value)} className="duration-75 flex items-center leading-none bg-verde hover:bg-verdeOscuro px-7 py-3 rounded-md text-sm text-white"><FaSearch className="text-lg me-2" />Buscar</button>
    </div>
  )
}
