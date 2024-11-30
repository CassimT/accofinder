import React from "react";
import {Link} from "react-router-dom"; 

const Footer = () => {
  return (
    <div className="px-5 bg-slate-200">
      <div className="flex flex-col sm:flex-row items-center px-10 py-8 justify-between bottom-0 inset-x-0">
        <p className="flex font-semibold text-center sm:text-left mb-4 sm:mb-0">
          &copy; 2024 AccoFinder | All Rights Reserved
        </p>
        <ul className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center sm:justify-start">
          <li>
            <Link to="/" className="font-sans font-medium hover:text-orange-500 duration-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="" className="font-sans font-medium hover:text-orange-500 duration-500 hover:underline">
              Agent
            </Link>
          </li>
          <li>
            <Link to="team" className="font-sans font-medium hover:text-orange-500 duration-500 hover:underline">
              Team
            </Link>
          </li>
          <li>
            <Link to="" className="font-sans font-medium hover:text-orange-500 duration-500 hover:underline">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
