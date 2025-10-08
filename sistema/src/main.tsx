import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import Produtos from './routes/Produtos/index.tsx'
import './index.css'
=======
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
>>>>>>> 23f629570589793641e34996d157e06dc7a2d1c4
import App from './App.tsx'
import Error from './routes/Error/index.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
