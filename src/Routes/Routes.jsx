import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout';
import Home from '../Home/Home/Home';
import Blog from '../pages/Blog';
import LoginLayouts from '../Layouts/LoginLayouts';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ChefsRecipe from '../pages/ChefsRecipe/ChefsRecipe';
import PrivetRout from './PrivetRout';

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
            },
            {
                path: '/chefs/:id',
                element: <PrivetRout><ChefsRecipe></ChefsRecipe></PrivetRout>,
                loader: ({params})=>fetch(`https://assignment-10-server-tanzil2001.vercel.app/chefs/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayouts></LoginLayouts>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


export default router;
