import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout';
import Home from '../Home/Home/Home';
import Blog from '../pages/Blog';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('https://assignment-10-server-tanzil2001.vercel.app/chefs')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])


export default router;
