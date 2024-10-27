import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "Student",
    agreeToTerms: false,
  });

  //   function for handling a change of value
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //   function for handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gray-100 relative">
      <div className="absolute h-[94vh] w-[40%] bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-bold text-center m-5">
          Sign Up to AccoFinder
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-row gap-x-3 mb-4">
            <label className="flex flex-col text-black font-semibold mb-2">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </label>
          </div>
          <label className="flex flex-col text-black font-semibold mb-2">
            Username
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>

          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="px-10 py-2 border rounded-lg "
              placeholder="password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Sign up as:
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="px-4 py-2 border gap-x-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                checked={formData.agreeToTerms}
                onChange={handleChange}
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
    </div>
  );
}

export default Signup;
