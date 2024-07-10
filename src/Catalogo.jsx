import { useState, useEffect } from 'react'

import URLBACKEND from './config/env'

import ContainerCatalogo from "./components/catalogo/ContainerCatalogo"
import AsideCatalogo from "./components/catalogo/AsideCatalogo"
import Nav from "./components/Nav"
import SearchBar from './components/catalogo/SearchBar'
import Loader from './components/Loader'

export default function App() {
  const [viviendas, setViviendas] = useState([])
  const [isLoading, setIsLoading] = useState([])

  const getViviendas = async () => {
    setIsLoading(true)
    try {
      const request = await fetch(`${URLBACKEND}/api/estate`, {
        method: 'GET',
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      })
  
      if (request.status == 200) {
        const response = await request.json()
        setViviendas(response.data)
        console.log(response.data)
      } else {
        console.log(request)
      }
    } catch (error) {
      console.error("ERROR: " + error)
    } finally {
      setIsLoading(false)
    }
  }

  const getViviendasByFilters = async (filters) => {
    setIsLoading(true)
    try {
      const request = await fetch(`${URLBACKEND}/api/estate/byfilters`, {
        method: 'POST',
        body: JSON.stringify(filters),
        headers: {
          'content-type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        }
      })
  
      if (request.status == 200) {
        const response = await request.json()
        setViviendas(response.data)
      } else {
        console.log(request)
      }
    } catch (error) {
      console.error(`ERROR: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const getViviendasByName = async (name) => {
    setIsLoading(true)
    try {
      const request = await fetch(`${URLBACKEND}/api/estate/searchbyname`, {
        method: 'POST',
        body: JSON.stringify({
          name: name
        }),
        headers: {
          'content-type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        }
      })
  
      if (request.status == 200) {
        const response = await request.json()
        setViviendas(response.data)
      } else {
        console.log(request)
      }
    } catch (error) {
      console.error(`ERROR: ${error}`)
    }
  }

  useEffect(() => {
    getViviendas()
  }, [])

  return (
    <div>
      <Nav></Nav>
      <main className="flex flex-col items-center">
        <SearchBar requestByName={getViviendasByName} />
        <div className="flex mt-14 w-full">
          <AsideCatalogo requestFilters={getViviendasByFilters} />
          {isLoading ? 
            (<Loader />)
            : <ContainerCatalogo viviendas={viviendas} />}
        </div>
      </main>
    </div>
  )
}