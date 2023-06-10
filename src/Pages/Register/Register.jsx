import React, { useRef } from "react";
import Container from "../Shared/Container";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();

  const navigate = useNavigate();
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
          fetch("http://localhost:4000/user",{
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
  return (
    <Container>
        <Helmet>
          <title>Summer Camp School || SignUp</title>
        </Helmet>
      <div className="flex items-center justify-center gap-6 mt-8">
        <img className="h-[800px] w-[800px] rounded-lg"
          src="https://i.ibb.co/Ssv6t5R/5041145-removebg-preview.png"
          alt=""
        />
        <div
          style={{
            border: "2px solid gray",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center text-3xl font-bold mb-9" style={{color:"#07332F"}}>
             Sign Up to Artisans' Camp
            </h1>
            <div className="font-bold">
              <h5>Name</h5>
              <input
                className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
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
                className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
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
              <h5>Password</h5>
              <input
                className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
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
                className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
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
            <button className="btn mt-5 w-[450px] text-white" style={{backgroundColor:"#07332F"}}>
              Create Account
            </button>
            <p className="text-center mt-4">
              Already have an account? Go to{" "}
              <span className="uppercase font-bold text-[#07332F]">
                <Link to="/login">Sign In</Link>
              </span>
            </p>
          </form>
          <span className="ml-52">
            <SocialLogin />
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Register;

