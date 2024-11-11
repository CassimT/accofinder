import React from "react";
import { useForm } from "react-hook-form";


function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up to AccoFinder</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">firstname</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">lastname</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
  
      <div className="absolute h-[94vh] w-[40%] bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-bold text-center m-5">
          Sign Up to AccoFinder
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-row gap-x-3 mb-4">
            <label className="flex flex-col text-black font-semibold mb-2">
              Name
              <input
                type="text"
                name="Name"
                placeholder="name"
                className="px-1 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...register("Name", { required: true })}
              />
              {errors.Name?.type === "required" && (
                <p className="text-red-600 text-sm">name is required</p>
              )}
            </label>
            <label className="flex flex-col text-black font-semibold mb-2">
              Username
              <input
                type="text"
                name="username"
                placeholder="username"
                className="px-1 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...register("username", { required: true })}
              />
              {errors.username?.type === "required" && (
                <p className="text-red-600 text-sm">username is required</p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="px-10 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red- text-sm">email is required</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-600 text-sm">email pattern is wrong</p>
            )}
          </div>
          {/*input password */}
<div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">password</label>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="confirm password"
              {...register("confirmPassword", { required: true })}
            />
            {password !== confirmPassword && (
              <p className="text-red-600 text-sm">password do not match</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block  text-black font-semibold mb-2">
              Sign up as:
              <select
                name="role"
                className="px-4 py-2 border ml-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...register("role", { required: "please select a role" })}
              >
                <option value="Student">Student</option>
                <option value="Landlord">Landlord</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
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
                  <br /> Privacy Policy
                </a>
                , and default Notification Settings.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-black  text-white font-semibold py-2 px-20 rounded-lg hover:scale-95 transition duration-500"
          >
            Create Account
          </button>

          <p className="m-4 text-black">
            Already have an account?{" "}
            <a href="#" className="text-blue-500">
              Sign In
            </a>
          </p>
        </form>
      </div>
  );
}

export default Signup;
