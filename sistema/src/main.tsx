import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx'
import React from 'react';
import Produtos from './routes/Produtos/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Cadastro from './routes/Cadastro/index.tsx';
import Login from './routes/Login/index.tsx';
import App from './App.tsx'
<<<<<<< HEAD
import Noticias from './routes/Noticias/index.tsx'


import './global.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/produtos", element: <Produtos/>},
            {path: "/cadastro", element: <Cadastro/>},
            {path: "/login", element: <Login/>},
            {path:"/noticias", element:<Noticias/>}
        ]
    }
]);
=======
import './globals.css'
>>>>>>> feature/css-tailwind-responsivo

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
