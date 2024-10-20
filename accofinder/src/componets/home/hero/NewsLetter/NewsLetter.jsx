import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full h-90  bg-yellow-200">
      <div className="flex flex-col items-center justify-between">
        <div className="m-10 text-center text-black font-sans">
          <h1 className="font-bold font-sans text-4xl">
            Find your accomodation
            <br /> today!
          </h1>
          <p className="text-xl font-sans mt-5">
            Find your fit in a comfortable and convenient
            <br /> home near campus
          </p>
        </div>
        <div className="flex flex-row mb-6 gap-6">
          <button className="text-white py-2 px-4 transition duration-500 hover:scale-95 bg-black font-bold rounded-xl">
            Get started now
          </button>
          <button className="text-black py-2 transition duration-500 px-4 hover:scale-95 bg-none border border-black font-bold rounded-xl">
            Learn about booking
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
