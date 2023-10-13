import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("register");
    return (
        <div>
            {noHeaderFooter || <NavBar/>}
           <Outlet></Outlet>
           {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;