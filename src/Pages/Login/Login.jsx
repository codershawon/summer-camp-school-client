import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Container from "../Shared/Container";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useAuth();
  const [control, setControl] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign In in Doc-House successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <div>
        <Helmet>
          <title>Summer Camp School || SignIn</title>
        </Helmet>
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-3 mt-20">
          <img
            src="https://i.ibb.co/Ssv6t5R/5041145-removebg-preview.png"
            alt=""
            className="w-full mx-auto"
          />
          <div
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              padding: "20px",
              width: "90%", // Adjusted width for better responsiveness
            }}
            className="w-full md:w-full lg:w-[400px]"
          >
            <form onSubmit={handleLogin}>
              <h1
                className="text-center text-3xl font-bold mb-6"
                style={{ color: "#07332F" }}
              >
                Sign In to Artisans' Camp
              </h1>
              <div className="font-bold">
                <h5>Email</h5>
                <input
                  className="w-full h-12 bg-[#F3F3F3] rounded-lg pl-3 mb-5"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="font-bold">
                <h5>Password</h5>
                {control ? (
                  <>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-12 bg-[#F3F3F3] rounded-lg pl-3 mb-5"
                      type="text"
                      name="password"
                      placeholder="Enter your password"
                    />
                    <span
                      onClick={() => setControl(!control)}
                      className="absolute right-0 bottom-0 mr-3 mb-3"
                    >
                      <FaEye />
                    </span>
                  </>
                ) : (
                  <>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-12 bg-[#F3F3F3] rounded-lg pl-3 mb-5"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                    <span
                      onClick={() => setControl(!control)}
                      className="absolute right-64 top-96 -bottom-72 mr-3 mb-3"
                    >
                      <FaEyeSlash />
                    </span>
                  </>
                )}
              </div>
              <button
                className="btn text-white w-full"
                style={{ backgroundColor: "#07332F" }}
              >
                Login
              </button>
              <p className="text-center mt-5">
                Please register at first. Go to{" "}
                <span className="text-[#07332F] uppercase font-bold">
                  <Link to="/register">Sign UP</Link>
                </span>
              </p>
            </form>
            <span className="absolute right-full mt-10">
              <SocialLogin />
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
