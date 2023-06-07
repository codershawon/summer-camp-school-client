import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
const SocialLogin = () => {
    const{signInWithGoogle}=useAuth()
    const navigate=useNavigate()
    const location=useLocation( )
    const from=location.state?.from?.pathname || "/"
   const handleGoogleSignIn=()=>{
    signInWithGoogle().then(result=>{
        const user=result.user
        if(user){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Sign in with google successful!',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from,{replace:true})
        }
    }).catch(error=>console.log(error))
   }
    return (
        <button
        onClick={handleGoogleSignIn}
        className="btn btn-circle btn-outline"
      >
        <AiFillGoogleCircle className="w-9 h-9" />
      </button>
    );
};

export default SocialLogin;