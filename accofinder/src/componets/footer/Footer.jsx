import React from "react";

const Footer = () => {
  return (
    <div className="px-5 bg-slate-200">
      <div className="flex flex-row items-center px-10 py-8  justify-between bottom-0 inset-x-0">
        <p className="flex font-semibold">
          &copy; 2024 AccoFinder| All Rights Reserved
        </p>
        <ul className="flex flex-row gap-5">
          <li>
            <a href="" className="font-sans font-medium hover:text-orange-500 duration-500 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="" className="font-sans font-medium hover:text-orange-500 duration-500 hover:underline">
              Agent
            </a>
          </li>
          <li>
            <a href="" className="font-sans font-medium hover:text-orange-500 duration-500 hover:underline">
              Accomodation
            </a>
          </li>
          <li>
            <a href="" className="font-sans font-medium hover:text-orange-500 duration-500 hover:underline">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;

