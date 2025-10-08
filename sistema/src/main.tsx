import App from './App.tsx'
import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx'
import React from 'react';
import Produtos from './routes/Produtos/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/produtos", element: <Produtos/>}
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
