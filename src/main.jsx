import React from 'react'
import ReactDOM from 'react-dom/client'
import Catalogo from './Catalogo.jsx'

import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login.jsx'
import Singup from './Singup.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalogo />,
  }, 
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/singup',
    element: <Singup />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
