import React from "react";
import {useForm} from "react-hook-form";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GoogleOutlined } from '@ant-design/icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate()
  localStorage.setItem("redirectAfterLogin", window.location.pathname)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const onSubmit = async(data) => {
    try {
      const response = await axios.post("https://accofinderbackend-1.onrender.com/api/auth/login", data, {
       // withCredentials: true, // Ensure cookies are sent for session management
      });
      
      if (response.status === 201) {
        const {user,token} = response.data
        const redirect = localStorage.getItem('redirectAfterLogin')
        console.log("Login successful!");
        console.log("User object:", user);
        const createdAt = Date.now()
        localStorage.setItem("token",token)
        localStorage.setItem("userId",user.id)
        localStorage.setItem("tokenCreatedAt",createdAt)
        localStorage.setItem("role",user.role)
        if(user.role === "agent" || user.role === "student-agent"){
            if(redirect === "/signin") {
              navigate("/")
            }else {
              navigate(`${redirect}`)
            }
        }else{
          navigate("/"); // Redirect to the profile page or another route
        }

       
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Invalid credentials or login failed. Please try again.");
    }
  
    console.log(data);
    
  };
  return (
      <div className="bg-white p-10 rounded-lg shadow-md h-[75vh] w-1/3 ">
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign in to AccoFinder
        </h1>

        {/* Google Sign-In Button */}
        <button className="w-full bg-sky-300 hover:scale-95 gap-2 transtion duration-500 text-black font-semibold py-2 px-4 rounded-full flex items-center justify-center mb-4">
        <GoogleOutlined />
          Sign in with Google
        </button>

        <div className="relative text-center text-gray-500 mb-8">
          <hr className="border-t border-gray-500" />
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
            or sign in with email
          </span>
        </div>

        {/* Username/Email Input */}
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Username or Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg sm:text-sm"
            placeholder="Username or email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600 text-sm">email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-600 text-sm">email pattern is wrong</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-black"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-500  rounded-lg sm:text-sm"
            placeholder="password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-600 text-sm">
              password must be atleast 8 characters
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-600 text-sm">
              password must be less than 20 characters
            </p>
          )}
          <a
            href="#"
            className="text-xs text-blue-500 hover:underline float-right mt-1 mb-3"
          >
            Forgot password ?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-black text-white font-semibold py-2 px-4 rounded-xl mb-4 hover:scale-95 transition duration-500">
          Sign In
        </button>

        {/* Sign up link */}
        <p className="text-center text-sm text-black">
          Don’t have an account?{" "}
          <Link href="#" className="text-blue-700 hover:underline" to={"/signup"}>
            Sign up
          </Link>
        </p>
        </form>
      </div>

  );
};

export default Signin;
