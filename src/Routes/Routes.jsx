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
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])


export default router;
