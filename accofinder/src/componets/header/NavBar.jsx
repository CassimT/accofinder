import React from "react";
import { BiHome } from "react-icons/bi";
import Button from "./components/header/Button";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <div className="fixed w-full">
        <div>
          <div className="flex flex-row justify-between py-4 px-16 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
            <div className="flex flex-row gap-2 items-center">
              <span>
                <BiHome className="text-3xl text-orange-600" />
              </span>
              <h1 className="font-semibold text-2xl">ACCOFINDER</h1>
            </div>
            <nav className="flex-row items-center gap-8 text-lg font-medium md:flex md:items-center md:justify-between ">
              <ul className="flex flex-row items-center gap-6 font-sans font-medium cursor-pointer">
                <li className="hover:text-orange-700 hover:underline duration-500 transition-transform">
                  <a href="">Home</a>
                </li>
                <li className="hover:text-orange-700 hover:underline duration-500 transition-transform">
                  <a  href="">Agents</a>
                </li>
                <li className="hover:text-orange-700 hover:underline duration-500 transition-transform">
                  <a href="">Accomodation</a>
                </li>
                <li className="hover:text-orange-700 hover:underline duration-500 transition-transform">
                  <a href="">About us</a>
                </li>
                <li className="hover:text-orange-700  hover:underline duration-500 transition-transform">
                  <a href="">FAQ</a>
                </li>
              </ul>
              <div className="relative flex  items-center">
                <FaSearch className="absolute left-3  text-gray-400" />
                <input
                  type="search"
                  placeholder="Search...."
                  className="border border-gray-200 rounded-3xl px-6 py-1 text-center outline-none bg-gray-100"
                />
              </div>

              <button className="px-4 py-2 bg-none text-black border-black font-semibold border rounded-2xl  transiton-all">
                Log in
              </button>
              <Button title="Sign up" />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
