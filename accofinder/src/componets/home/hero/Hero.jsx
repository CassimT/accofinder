import React from "react";
import imagePath from "./bed3.jpg";

const Hero = () => {
  return (
    <section className="w-screen h-screen overflow-hidden">
      <div
        className="bg-cover bg-center w-full h-full relative"
        style={{ backgroundImage: `url(${imagePath})` }}
        alt="Comfortable student-approved housing"
      >
        <div className="flex flex-col justify-center items-center text-center absolute inset-0 bg-black bg-opacity-50">
          <span className="text-xl text-black font-sans py-2 px-4 rounded-full bg-[#c2c1c1]">
            Student-approved housing option
          </span>
          <h1 className="text-5xl md:text-6xl text-white font-bold mt-8 font-sans">
            Off-Campus Living, <br /> On Campus Convenience
          </h1>
          <p className="font-semibold text-lg md:text-xl mt-5 text-white">
            Discover beautiful hostels worldwide, chosen by top real estate experts. <br />
            Your home is just a search away.
          </p>
          <button className="px-6 py-3 rounded-lg mt-8 bg-black text-white text-lg md:text-xl transition transform hover:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
