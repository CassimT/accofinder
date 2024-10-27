import React from "react";

const Sign = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <div className="bg-white p-10 rounded-lg shadow-md h-[75vh] w-1/3 ">
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign in to AccoFinder
        </h1>

        {/* Google Sign-In Button */}
        <button className="w-full bg-sky-300 hover:scale-95 transtion duration-500 text-black font-semibold py-2 px-4 rounded-full flex items-center justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google logo"
            className="h-5 w-5 mr-2"
          />
          Sign in with Google
        </button>

        <div className="relative text-center text-gray-500 mb-8">
          <hr className="border-t border-gray-500" />
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
            or sign in with email
          </span>
        </div>

        {/* Username/Email Input */}
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
            className="mt-1 w-full px-3 py-2 border border-gray-400 rounded-lg sm:text-sm"
            placeholder="Username or email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-black"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-400  rounded-lg sm:text-sm"
            placeholder="password"
          />
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
          <a href="#" className="text-blue-700 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sign;
