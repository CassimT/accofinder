import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdList } from "react-icons/md";

const SideBar = () => {
  const location = useLocation(); // Get the current location
  const menus = [
    { name: "Dashboard", link: "", icon: MdOutlineDashboard },
    { name: "Listing", link: "listing", icon: MdList },
    { name: "Add", link: "add", icon: AiOutlineAppstoreAdd },
  ];

  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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

  return (
    <section className="flex gap-6">
      <div
        className={`bg-gray-200 min-h-screen ${
          open ? "w-60" : "w-16"
        } duration-500 text-gray-900 px-4`}
      >
        <div className="m-3 text-xl text-gray-900 font-semibold">
          {/* Menu Button */}
          <div className="py-3 flex justify-end">
            <FiMenu
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>

        {/* Menu Links */}
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => {
            const isActive = location.pathname === `/agents/${menu.link}` || (menu.link === "" && location.pathname === "/agents");
            return (
              <Link
                to={menu.link}
                key={i}
                className={`group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md 
                  ${isActive ? "bg-gray-300 border-l-4 border-indigo-600" : "hover:bg-gray-300"}`}
              >
                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu.name}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Content Section */}
    </section>
  );
};

export default SideBar;
