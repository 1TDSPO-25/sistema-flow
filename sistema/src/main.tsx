<<<<<<< HEAD
import App from './App.tsx'
import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx'
import React from 'react';
import Produtos from './routes/Produtos/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Cadastro from './routes/Cadastro/index.tsx';
import Login from './routes/Login/index.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/produtos", element: <Produtos/>},
            {path: "/cadastro", element: <Cadastro/>},
            {path: "/login", element: <Login/>}
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import Noticias from './routes/Noticias/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/noticias", element:<Noticias/>}
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
>>>>>>> 88a57fca699c309c968cef8e2e87522cb9de1601
)
