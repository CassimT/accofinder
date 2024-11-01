import React from 'react';

const Sign = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign in to AccoFinder</h1>

        {/* Google Sign-In Button */}
        <button className="w-full bg-blue-100 hover:bg-blue-300 text-black font-semibold py-2 px-4 rounded-full flex items-center justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google logo"
            className="h-5 w-5 mr-2"
          />
          Sign in with Google
        </button>

        <div className="relative text-center text-gray-500 mb-4">
          <hr className="border-t border-gray-300" />
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
            or sign in with email
          </span>
        </div>

        {/* Username/Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Username or Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
          />
          <a href="#" className="text-xs text-blue-500 hover:underline float-right mt-1">
            Forget?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-black text-white font-semibold py-2 px-4 rounded-full mb-4 hover:bg-gray-800">
          Sign In
        </button>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>

        
      </div>

      {/* Footer */}
      <footer className="w-full py-4 mt-8 text-sm text-gray-500 text-center absolute bottom-0">
        <div className="flex justify-center space-x-4">
          <span>© 2024 AccoFinder</span>
          <a href="#" className="hover:underline">
            Agents
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Sign;
