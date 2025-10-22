import Error from './routes/Error/index.tsx';
import React, { Suspense } from 'react';
import Produtos from './routes/Produtos/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Cadastro from './routes/Cadastro/index.tsx';
import Login from './routes/Login/index.tsx';
import App from './App.tsx'

import Noticias from './routes/Noticias/index.tsx'
import './global.css'
import Home from './routes/Home/index.tsx';
import Faq from './routes/Faq/index.tsx';
import Agendamento from './routes/Agendamento/index.tsx';
import ProdutoDetalhe from "./routes/ProdutoDetalhe/index.tsx";

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
            {path:"/noticias", element:<Noticias/>},
            {path: "/produto/:id", element: <ProdutoDetalhe/>},
            {path:"/faq", element:<Faq/>},
            {path:"/agendamento",element:<Agendamento/>}
        ]
    }
], { basename: "/sistema-flow/" });

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
