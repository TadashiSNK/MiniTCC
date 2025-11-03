import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Login from './pages/login.jsx'
import Cadastro from './pages/cadastro.jsx'
import Home from './pages/home.jsx'

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import MeuPerfil from './pages/meuPerfil.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/cadastro',
    element: <Cadastro/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/MeuPerfil',
    element: <MeuPerfil/>
  },
])



function App() {
  return (
    <div class="container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
