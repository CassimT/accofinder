import React from "react";
import Heading from "./Heading";
import { team } from "../../data/Data";

const Team = () => {
  return (
    <>
      <section className="team bg-gray-100 py-10 rounded-lg p-4">
        <div className="container mx-auto px-4">
          <Heading
            title="Meet Our Team"
            subtitle="Behind every successful journey is a dedicated team. Our featured agents are passionate, experienced, and committed to providing you with the best service. Let’s achieve greatness together!"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 rou">
            {team.map((val, index) => (
              <div
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition duration-300"
                key={index}
              >
                <button className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
                  {val.position}
                </button>
                <div className="details text-center">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      src={val.cover}
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                    <i className="fa-solid fa-circle-check text-blue-500 text-lg absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></i>
                  </div>
                  <label className="text-gray-500 mt-4 block">
                    <i className="fa fa-location-dot mr-2"></i>
                    {val.address}
                  </label>
                  <h4 className="text-lg font-bold mt-2">{val.name}</h4>

                  <ul className="flex justify-center gap-4 mt-4">
                    {val.icon.map((icon, index) => (
                      <li
                        key={index}
                        className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        {icon}
                      </li>
                    ))}
                  </ul>
                  <div className="button flex justify-center gap-4 mt-6">
                    <button className="bg-gray-100 text-blue-500 px-4 py-2 rounded-lg flex items-center gap-2">
                      <i className="fa fa-phone-alt"></i> {val.phone}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
