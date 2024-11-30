import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';

export default function ProfileEditForm() {
  const location = useLocation();
  const { user } = location.state || {}; // Get the user data from location state

  const [name, setName] = useState(user?.name || ''); 
  const [email, setEmail] = useState(user?.email || '');
  const [profileImage, setProfileImage] = useState(user?.profileImage || '../test1.png'); // Default to user's profile image

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setProfileImage(user.profileImage || '../test1.png');
    }
  }, [user]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      alert('Account deleted successfully.');
      setName('');
      setEmail('');
      setProfileImage('../logo512.png');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated!');
  };

  return (
    <div className="w-80 max-w-3x1 mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Edit Profile</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <label htmlFor="image-upload" className="relative cursor-pointer">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full border-2 border-blue-400"
            />
            <span className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full text-sm">
              <EditOutlined/>
            </span>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full max-w-2xl px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full max-w-2xl px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Save Changes
        </button>

        {/* Delete Account Button */}
        <button
          type="button"
          onClick={handleDeleteAccount}
          className="w-full py-2 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
        >
          Delete Account
        </button>
      </form>
    </div>
  );
}
