import React from 'react'
import ReactDOM from 'react-dom/client'
import Catalogo from './Catalogo'
import Home from './Home'
import Perfil from './components/perfil/Container.jsx'

import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import LoginSingUpContainer from './LoginSingUpContainer.jsx'
import './index.css'
import Vivienda from './Vivienda.jsx'
import Contacto from './Contacto.jsx'
import { CookiesProvider } from 'react-cookie'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
  {
    path: '/login',
    element: <LoginSingUpContainer defaultForm='login' />,
  },
  {
    path: '/signup',
    element: <LoginSingUpContainer defaultForm='signup' />,
  },
  {
    path: '/perfil',
    element: <Perfil />
  },
  {
    path: '/catalogo',
    element: <Catalogo />
  }, {
    path: '/catalogo/:idVivienda',
    element: <Vivienda />,
    loader: ({ params }) => {
      return params.idVivienda
    },
    action: ({ params }) => {
      return params.idVivienda
    }
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>,
)
