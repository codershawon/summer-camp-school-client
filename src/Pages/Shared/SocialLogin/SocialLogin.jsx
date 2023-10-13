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
        const loggedUser=result.user
        const saveUser={name:loggedUser.displayName,email:loggedUser.email}
        fetch("https://summer-camp-school-server-side.vercel.app/user",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(saveUser)
        }).then(res=>res.json()).then(()=>{
              navigate(from, { replace: true })
        })
      })
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

// const handleGoogleSignIn = () => {
//   signInWithGoogle().then((result) => {
//     const loggedUser = result.user;
//     console.log(loggedUser);
//         const saveUser={name:loggedUser.displayName,email:loggedUser.email}
       
// }