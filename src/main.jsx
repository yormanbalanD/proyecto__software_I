import React from 'react'
import ReactDOM from 'react-dom/client'
import Catalogo from './Catalogo'
import Home from './Home'

import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import LoginSingUpContainer from './LoginSingUpContainer.jsx'
import './index.css'
import Nav from './components/Nav.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }, 
  {
    path: '/login',
    element: <LoginSingUpContainer defaultForm='login' />,
  },
  {
    path: '/singup',
    element: <LoginSingUpContainer defaultForm='signup' />,
  },
  {
    path: '/catalogo',
    element: <Catalogo />
  },
  {
    path: '/Nav',
    element: <Nav defaultForm="nav"/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
