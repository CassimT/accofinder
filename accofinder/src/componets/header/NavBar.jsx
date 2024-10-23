import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import { nav } from "../data/Data";
import { useNavigate } from "react-router-dom"; 

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search input
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value); // Update search term
  };
  const goToSingIn = ()=> {
      navigate("/singin")
  }
  const goTologIn = ()=> {
    navigate("/login")
}


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Construct the path with the search query
      const path = `/Searching?query=${encodeURIComponent(searchTerm)}`;
      // Navigate to the path and pass the searchTerm through state
      navigate(path, { state: { term: searchTerm } });
    }
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 md:px-12">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <BiHome className="text-2xl text-orange-600" aria-label="Home icon" />
          <h1 className="font-semibold text-xl">ACCOFINDER</h1>
        </div>

        {/* Navigation Menu for Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-base font-medium flex-wrap">
          <ul className="flex gap-4 font-sans font-medium cursor-pointer">
            {nav.map((item) => (
              <li key={item.text}>
                <a
                  href={item.path} // Use path from nav array
                  className="hover:text-orange-700 hover:underline duration-500 transition"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-400" aria-label="Search icon" />
            <input
              type="search"
              placeholder="Search..."
              value={searchTerm} // Bind input value to state
              onChange={handleSearchInputChange} // Update state on change
              onKeyPress={handleKeyPress} // Handle key press
              className="border border-gray-200 rounded-3xl pl-10 pr-4 py-1 bg-gray-100 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button className="px-3 py-1 transition duration-500 hover:scale-95 border border-black rounded-xl font-semibold text-sm">
            Log in
          </button>
          <Button title="Sign up" />
        </nav>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden">
          <button aria-label="Open mobile menu" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col items-center gap-4">
            {nav.map((item) => (
              <li key={item.text}>
                <a
                  href={item.path} // Use path from nav array
                  className="hover:text-orange-700 duration-500 transition"
                  onClick={toggleMobileMenu} // Close menu on item click
                >
                  {item.text}
                </a>
              </li>
            ))}
            <div className="relative flex items-center mt-4">
              <FaSearch className="absolute left-3 text-gray-400" aria-label="Search icon" />
              <input
                type="search"
                placeholder="Search..."
                value={searchTerm} // Bind input value to state
                onChange={handleSearchInputChange} // Update state on change
                onKeyPress={handleKeyPress} // Handle key press
                className="border border-gray-200 rounded-3xl pl-10 pr-4 py-1 bg-gray-100 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button className="px-3 py-1 mt-2 transition duration-500 hover:scale-95 border border-black rounded-xl font-semibold text-sm">
              Log in
            </button>
            <Button title="Sign up" />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
