import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const onSubmit = (data) => {
    console.log(data);
    
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign in to AccoFinder</h1>

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

        {/* Email Sign-In Button */}
        <button
          className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-full mb-4"
          onClick={() => navigate('/signin-with-email')} // Redirect to email sign-in page
        >
          Continue with Email
        </button>

         <p className="text-center text-sm text-black">
          Don’t have an account?{" "}
          <span 
            onClick={() => navigate('/signup')} 
            className="text-blue-700 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>

  );
};

export default Signin;
