import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './assets/css/bootstrap.min.css'
import './assets/css/custom.css'
import './assets/css/fontawesome.min.css'
import './assets/css/slick-theme.min.css'
import'./assets/css/templatemo.min.css'
import './assets/js/bootstrap.bundle.min'
import './assets/js/custom'
import './assets/js/jquery-1.11.0.min'
import './assets/js/jquery-migrate-1.2.1.min'
import './assets/js/slick.min'
import './assets/js/templatemo.min'
import Homepage from './pages/Homepage.tsx';


const router = createBrowserRouter([
  {path: '/', 
  element:<App/>,
  children:[
    {index: true, element: <Homepage/>},
  ]
}
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
