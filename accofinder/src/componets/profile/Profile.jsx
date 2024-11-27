import React, { useEffect, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user information
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
        setUser(response.data); // Set user data from the API response
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    if (userId) {
      fetchUserProfile();
    } else {
      console.error("No userId found in localStorage");
      setLoading(false);
    }
  }, [userId]);

  const goToEditForm = () => {
    navigate("profile/edit");
  };

  const handleLogout = async () => {
    try {
      // Call the logout API endpoint
      const response = await axios.post("http://localhost:3000/api/auth/logout");
      if (response.status === 200) {
        alert(response.data.msg); // Notify the user of successful logout
        localStorage.clear(); // Clear local storage
        navigate("/"); // go to home
      }
    } catch (error) {
      console.error("Error during logout:", error.response?.data || error.message);
      alert("Failed to log out. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  if (!user) {
    return <div>Error fetching user profile.</div>; // Handle the error state
  }

  return (
    <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden text-center relative">
      <div className="bg-blue-200 text-blue-800 font-semibold py-1 text-lg absolute w-full h-28">
        {user.role || "Student"} {/* Display the user's role */}
      </div>
      <div className="flex justify-center bg-blue-200 mt-12 relative">
        <div className="relative -mb-16">
          <img
            src="../logo512.png"
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-blue-400 mx-auto"
          />
          <span className="absolute right-0 top-0 bg-blue-100 p-1 rounded-full">
            <EditOutlined onClick={goToEditForm} className="text-blue-500 text-lg" />
          </span>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-gray-600 font-bold">{user.username || "User Name"}</h2> {/* Display user's name */}
        <p className="text-gray-600">{user.email || "User Email"}</p> {/* Display user's email */}
      </div>

      <div className="mt-6 mb-8">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-700"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
