import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Registration successful!");
        navigate("/signin"); 
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message || "Registration failed");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-5">
      <h1 className="text-xl font-bold text-center mb-6">
        Sign Up to AccoFinder
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-y-4"
      >
        {/* Name and Username */}
        <div className="flex flex-row gap-x-3 mb-4">
          <label className="flex flex-col text-black ">
            Firstname
            <input
              type="text"
              placeholder="first name"
              className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              {...register("firstName", { required: true })}
            />
            {errors.firstName?.type === "required" && (
              <p className="text-red-600 text-sm">first name is required</p>
            )}
          </label>
          <label className="flex flex-col text-black">
            Last Name
            <input
              type="text"
              placeholder="last name"
              className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              {...register("lastName", { required: true })}
            />
            {errors.lastName?.type === "required" && (
              <p className="text-red-600 text-sm">last name is required</p>
            )}
          </label>
        </div>

        {/* Username */}
        <div className="flex flex-col w-full px-4 mb-4">
          <label className="block text-black mb-2">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="px-2 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg w-full"
            {...register("userName", { required: true })}
          />
            {errors.userName?.type === "required" && (
              <p className="text-red-600 text-sm">Username is required</p>
            )}
        </div>

        {/* Email */}
        <div className="flex flex-col w-full px-4 mb-4">
          <label className="block text-black font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="email"
            className="px-2 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg w-full"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600 text-sm">Email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-600 text-sm">Email pattern is wrong</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col w-full px-4 mb-4">
          <label className="block text-black font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-600 text-sm">
              Password must be at least 8 characters
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-600 text-sm">
              Password must be less than 20 characters
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col w-full px-4 mb-4">
          <label className="block text-black font-semibold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="confirm password"
            {...register("confirmPassword", { required: true })}
          />
          {password !== confirmPassword && (
            <p className="text-red-600 text-sm">Passwords do not match</p>
          )}
        </div>

        {/* SignUp as */}
        <div className="mb-4 w-full px-4">
          <label className="block text-black font-semibold mb-2">
            Sign up as:
            <select
              className="px-4 py-2 border ml-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              {...register("role", { required: "Please select a role" })}
            >
              <option value="Student">Student</option>
              <option value="Landlord">Landlord</option>
            </select>
          </label>
        </div>

        {/* Terms and Condition */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="agreeToTerms"
            className="mr-2"
            required
          />
          <span className="text-xs text-gray-700">
            I agree with AccoFinder{" "}
            <a href="#" className="text-blue-500">
              Terms of Service
            </a>
            ,{" "}
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>
            , and default Notification Settings.
          </span>
        </div>

        <button
          type="submit"
          className="bg-black text-white font-semibold py-2 px-10 rounded-lg hover:scale-95 transition duration-500"
        >
          Create Account
        </button>

        <p className="m-4 text-black">
          Already have an account?{" "}
          <Link className="text-blue-500" to={"/signin"}>
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
