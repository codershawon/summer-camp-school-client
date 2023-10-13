import React, { useRef } from "react";
import Container from "../Shared/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from 'react-icons/fc'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserProfile,signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoURL).then(()=>{
          const saveUser={name:data.name,email:data.email}
          fetch("https://summer-camp-school-server-side.vercel.app/user",{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(saveUser)
          })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User profile updated successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/login");
            }
          });
      })
      .catch((error) => console.log(error));
    })
  };

  const handleGoogleSignIn=()=>{
    signInWithGoogle().then(result=>{
        const loggedUser=result.user
        const saveUser={name:loggedUser?.displayName,email:loggedUser?.email}
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
    <Container>
        <Helmet>
          <title>Summer Camp School || SignUp</title>
        </Helmet>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-8">
        <img className="w-full md:w-[800px] rounded-lg"
          src="https://i.ibb.co/Ssv6t5R/5041145-removebg-preview.png"
          alt=""
        />
        <div
          style={{
            border: "2px solid gray",
            borderRadius: "10px",
            padding: "20px",
          }}
          className="w-full h-full md:h-[750px] md:w-full lg:w-[500px]"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center text-3xl font-bold mb-9" style={{color:"#07332F"}}>
             Sign Up to Artisans' Camp
            </h1>
            <div className="font-bold">
              <h5>Name</h5>
              <input
                className="w-full md:w-full h-12 bg-[#F3F3F3] rounded-lg pl-3"
                type="text"
                name="name"
                id=""
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              <div>
                {errors.name && (
                  <span className="text-red-800">Name is required</span>
                )}
              </div>
            </div>
            <div className="font-bold mt-5">
              <h5>Email</h5>
              <input
                className="w-full md:w-full h-12 bg-[#F3F3F3] rounded-lg pl-3 "
                type="email"
                name="email"
                id=""
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <div>
                {errors.email && (
                  <span className="text-red-800">Email is required</span>
                )}
              </div>
            </div>
            <div className="font-bold mt-5">
              <h5>Photo URL</h5>
              <input
                className="w-full md:w-full h-12 bg-[#F3F3F3] rounded-lg pl-3"
                type="text"
                name="photo"
                id=""
                placeholder="Enter your photoURL"
                {...register("photoURL", { required: true })}
              />
              <div>
                {errors.photoURL && (
                  <span className="text-red-800">Photo URL is required</span>
                )}
              </div>
            </div>
            <div className="font-bold mt-5">
              <h5>Password</h5>
              <input
                className="w-full md:w-full h-12 bg-[#F3F3F3] rounded-lg pl-3"
                type="password"
                name="password"
                id=""
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$&*]).{6,20}$/,
                })}
              />

              <div>
                {" "}
                {errors.password?.type === "required" && (
                  <span className="text-red-800">Password is required</span>
                )}
              </div>
              {errors.password?.type === "minLength" && (
                <span className="text-red-800">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-800">
                  Password must be less than 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-800">
                  Password must have one Capital Letter & one special case
                  letter
                </span>
              )}
            </div>
            <div className="font-bold mt-5">
              <h5>Confirm Password</h5>
              <input
                className="w-full md:w-full h-12 bg-[#F3F3F3] rounded-lg pl-3"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password.current || "Passwords do not match",
                })}
              />

              <div>
                {" "}
                {errors.confirmPassword && (
                  <span className="text-red-800">{errors.confirmPassword.message}</span>
                )}
              </div>
            </div>
            <button className="btn mt-5 w-full text-white" style={{backgroundColor:"#07332F"}}>
              Create Account
            </button>
            <p className="text-center mt-4">
              Already have an account? Go to{" "}
              <span className="uppercase font-bold text-[#07332F]">
                <Link to="/login">Sign In</Link>
              </span>
            </p>
          </form>
          <div
                        onClick={handleGoogleSignIn}
                        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer w-full mx-auto pl-12 rounded-md bg-[#197685] bg-opacity-10"
                      >
                        <FcGoogle size={32} />

                        <p className="font-semibold text-gray-600">
                          Continue with Google
                        </p>
                      </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;

