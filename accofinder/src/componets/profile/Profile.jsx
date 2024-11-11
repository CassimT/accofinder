import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import img from '../profile/Profile';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const navigate = useNavigate()
  const goToEditForm  = ()=> {
      navigate("profile/edit")
  }
  return (
      <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden text-center relative">
        <div className="bg-blue-200  text-blue-800 font-semibold py-1 text-lg absolute w-full h-28">
          Student
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
          <h2 className="text-xl font-bold">Abram Prosser</h2>
          <p className="text-gray-600">HelgaR.Kovach@example.com</p>
        </div>

        <div className="mt-6 mb-8">
          <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-700">
            Log Out
          </button>
        </div>
      </div>

  );
};

export default Profile;
