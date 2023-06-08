import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Container from "../Shared/Container";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from "react-router-dom";

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
      {" "}
      <div>
        <Helmet>
          <title>Summer Camp School || SignIn</title>
        </Helmet>
        <div className="flex items-center justify-center gap-6 mt-20">
          <img
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
            <form onSubmit={handleLogin}>
              <h1
                className="text-center text-3xl font-bold mb-9"
                style={{ color: "#07332F" }}
              >
                Sign In to Artisans' Camp
              </h1>
              <div className="font-bold mt-5">
                <h5>Email</h5>
                <input
                  className="w-[350px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email"
                />
              </div>
              <div className="font-bold mt-5">
                <h5>Password</h5>
                {control ? (
                  <>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-[350px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
                      type="text"
                      name="password"
                      id=""
                      placeholder="Enter your password"
                    />
                    <span
                      onClick={() => setControl(!control)}
                      className="relative left-80 bottom-8"
                    >
                      <FaEye />
                    </span>
                  </>
                ) : (
                  <>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-[350px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
                      type="password"
                      name="password"
                      id=""
                      placeholder="Enter your password"
                    />
                    <span
                      onClick={() => setControl(!control)}
                      className="relative left-80 bottom-8"
                    >
                      <FaEyeSlash />
                    </span>
                  </>
                )}
              </div>
              <button
                className="btn text-white mt-5 w-[350px]"
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
            <span className="text-center ml-40 mt-6">
              <SocialLogin></SocialLogin>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
