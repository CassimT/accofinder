import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full h-auto sm:h-90 bg-yellow-200">
      <div className="flex flex-col items-center justify-between">
        <div className="m-10 text-center text-black font-sans">
          <h1 className="font-bold font-sans text-4xl sm:text-5xl md:text-6xl">
            Find your accomodation
            <br /> today!
          </h1>
          <p className="text-xl font-sans mt-5 sm:text-2xl md:text-3xl">
            Find your fit in a comfortable and convenient
            <br /> home near campus
          </p>
        </div>
        <div className="flex flex-col sm:flex-row mb-6 gap-6 sm:gap-8">
          <button className="text-white py-2 px-4 transition duration-500 hover:scale-95 bg-black font-bold rounded-xl w-full sm:w-auto">
            Get started now
          </button>
          <button className="text-black py-2 px-4 transition duration-500 hover:scale-95 bg-none border border-black font-bold rounded-xl w-full sm:w-auto">
            Learn about booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
