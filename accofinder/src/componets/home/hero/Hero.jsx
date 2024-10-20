import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
    <div className="flex flex-col items-center justify-center h-[100vh] bg-[url('./componets/home/hero/bed5.jpg')] bg-cover bg-no-repeat ">
      <div className="text-center m-5">
        <span className="text-xl text-black font-sans p-2 rounded-full bg-[#c2c1c1]">
          Student-approved housing option
        </span>
        <h1 className="text-6xl text-white font-bold m-8 font-sans">
          Off-Campus Living, <br /> On Campus Convenience
        </h1>
        <p className="font-semibold text-xl mt-5 text-white">
         Discover beautifu hostels worldwide, chosen by top real estate experts <br/> Your home is just a search away
        </p>
      
      </div>
      <button className="px-4 py-2 rounded-xl mt-10 bg-black text-white text-xl transition duration-500 hover:scale-95">
          Get started
        </button>
    </div>
    </div>
  );
};
export default Hero;
