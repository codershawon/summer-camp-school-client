import React from 'react';
import useAuth from '../hooks/useAuth';
import { useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading
    }=useAuth()
    const location=useLocation()
    console.log(location)
    if(loading){
        return  <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivateRoutes;