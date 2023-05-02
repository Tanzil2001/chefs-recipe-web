import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const LoginLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default LoginLayouts;