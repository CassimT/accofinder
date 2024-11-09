import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
  firstname:"",

    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    studentid:"",
    nationalid:"",
    role: "Student",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add further processing logic here
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
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="8+ characters"
              required
            />
          </div>
          {/*input password */}
<div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="8+ characters"
              required
            />
          </div>
{/*phone input */}
<div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="8+ characters"
              required
            />
          </div>
          {/*studentid */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">studentid</label>
            <input
              type="text"
              name="studentid"
              value={formData.studentid}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="8+ characters"
              required
            />
          </div>
          {/*national id */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">nationalid</label>
            <input
              type="text"
              name="nationalid"
              value={formData.nationalid}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="8+ characters"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Sign up as:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Student">Student</option>
              <option value="Landlord">Landlord</option>
            </select>
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
              <span className="text-gray-700">
                I agree with AccoFinder <a href="#" className="text-blue-500">Terms of Service</a>, <a href="#" className="text-blue-500">Privacy Policy</a>, and default Notification Settings.
              </span>
            </label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Create Account
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account? <a href="#" className="text-blue-500">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
