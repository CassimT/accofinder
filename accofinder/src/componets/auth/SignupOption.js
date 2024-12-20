import React from 'react';

const  SignupOption = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md h-[60vh] w-[40%]">
        <h1 className="text-3xl font-bold text-center mb-8">Sign in to AccoFinder</h1>

        {/* Google Sign-In Button */}
        <button className="w-full bg-sky-300  text-black font-semibold py-2 px-4 rounded-full flex items-center hover:scale-95 transition duration-500 justify-center mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" className="h-5 w-5 mr-2" />
          Sign in with Google
        </button>

        <div className="relative text-center text-black mb-7">
          <hr className="border-t border-gray-500" />
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">or</span>
        </div>

        {/* Email Sign-In Button */}
        <button
          className="w-full border border-black hover:scale-95 transition duration-500  text-black font-semibold py-2 px-4 rounded-full mb-4"
        >
          Continue with Email
        </button>

        {/* Terms and Policies */}
        <p className="text-sm text-center text-black mb-6">
          By creating an account you agree with our
          <a href="#" className="text-blue-500 hover:underline"> Terms of Service</a>,
          <a href="#" className="text-blue-500 hover:underline"> Privacy Policy</a>,
          and our default
          <a href="#" className="text-blue-500 hover:underline"> Notification Settings</a>.
        </p>

        <p className="text-center">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignOption;
