import React, { useState, useRef, useEffect } from "react";
import Profile from "../profile/Profile";

function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center h-14 w-14 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none"
      >
        <img
          src="../test1.png"
          alt=""
          className="h-full w-full rounded-full object-cover"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-gray-800 text-white rounded-lg shadow-lg z-10">
          <div className="flex items-center justify-center space-x-4">
            {/**ProfileComponet */}
            <Profile />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
