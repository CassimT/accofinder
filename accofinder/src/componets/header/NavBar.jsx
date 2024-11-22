import React, { useState,useEffect, useContext } from "react";
import { SearchContext } from "../utils/SearchContext";
import { BiHome } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import { nav } from "../data/Data";
import { useNavigate,useLocation } from "react-router-dom"; 
import ProfileButton from "./ProfileButton";
import {Input} from 'antd'; 
import { list } from "../data/Data";
import { ImOffice } from "react-icons/im";
import axios from "axios";
const {Search} = Input



const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useContext(SearchContext); 
  const navigate = useNavigate(); 
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value); // Update search term
  };
  const goToSingIn = ()=> {
      navigate("/signin")
  }
  const goToSignUp = ()=> {
    navigate("/signup")
  }
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 950) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Construct the path with the search query
      const path = `/Searching?query=${encodeURIComponent(searchTerm)}`;
      if(location.pathname + location.search != path) {
        navigate(path, { state: { term: searchTerm } });
      }
     
    }
    
  };
  //handling the seach
  const handleSeach = (event) => { 
      const path = `/Searching?query=${encodeURIComponent(searchTerm)}`;
      if(location.pathname + location.search != path) {
        navigate(path, { state: { term: searchTerm } });
      }   
  };
  const handleAgentClick = async (e, path) => {
    e.preventDefault(); 

    const agentId = localStorage.getItem("userId");
    if (!agentId) {
      navigate("/signin"); 
      return;
    }
    try {
      const response = await axios.get("http://localhost:3000/api/auth/check", { params: { id: agentId } });
      const user = response.data.user;
      if (response.status === 200 && user.role === "agent") {
        navigate(path); 
      } else {
        alert("You do not have permission to access this page.");
      }
    } catch (error) {
      console.error("Role verification failed:", error);
      alert("Error verifying user role. Please try again.");
    }
  };

  return (
    <>    
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
              <li key={item.text} className=" text-sm">
                <a
                  href={item.path} // Use path from nav array
                  className="hover:text-orange-700 hover:underline duration-500 transition"
                  //onClick={(e) => handleAgentClick(e, item.path)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex items-center justify-center">
      
          <Search
            placeholder="Enter search term"
            value={searchTerm}
            onChange={handleSearchInputChange}
            onSearch={handleSeach} 
            onPressEnter={handleKeyPress} 
            enterButton
            //toggleling the searchBar hidden or not
            className={`${
              open ? "":"md:hidden"             
              }`}
          />
          </div>
          <button 
            onClick={goToSingIn}
            className="py-2 px-4 transition duration-500 hover:scale-95 border border-black rounded-xl font-semibold">
            Log in
          </button>
          <Button 
            onClick = {goToSignUp}
          title="Sign up" />
          <ProfileButton/>
        </nav>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden flex justify-between gap-4">        
          <button aria-label="Open mobile menu" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ProfileButton/>
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
            
            <button
              onClick={goToSingIn}
              className="px-3 py-1 mt-2 transition duration-500 hover:scale-95 border border-black rounded-xl font-semibold text-sm">
              Log in
            </button>
            <Button 
            onClick ={goToSignUp}
            title="Sign up" />
           
          </ul>
        </nav>
      )}
    </header>
          {
            open ? "":
            <div className="relative flex items-center mt-4 m-10">
            <Search
              placeholder="Enter search term"
              value={searchTerm}
              onChange={handleSearchInputChange}
              onSearch={handleSeach} 
              onPressEnter={handleKeyPress} 
              enterButton
            />
          </div>
          }
    </>

  );
};

export default NavBar;
