import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
    <div className="flex flex-col items-center justify-center h-[95vh] bg-[url('./componets/home/hero/bed3.jpg')] bg-cover bg-no-repeat ">
      <div className="text-center m-5">
        <span className="block text-2xl border rounded-full bg-slate-300">
          Student-approved housing option
        </span>
        <h1 className="text-6xl text-white font-bold m-8 font-sans">
          Off-Campus Living, <br /> On Campus Convenience
        </h1>
        <p className="font-semibold text-xl mt-5 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          <br/>dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis rem 
        </p>
      </div>
     
    </div>
    </div>
  );
};
export default Hero;
