import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
//import {colors} from "@mui/material"
const RateAndReview = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleSubmit = () =>{
  }

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex flex-col mt-10 items-center jusify-center">
      <h2 className="text-lg font-semibold mb-4">Please leave a comment and rate us</h2>
      <div className="flex flex-row mb-4 gap-5">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              className="text-gray-400 m-2 cursor-pointer"
              onClick={() => handleClick(index + 1)}
            //color={
            //     (hoverValue || currentValue) > index
            //       ? color.orange
            //       : color.grey
            //   }
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-center">
        <textarea name="review" placeholder="What is your comment?" className="border-gray-200 border-2 focus:outline-none focus:ring-2 focus:ring-orange-500 p-5 rounded-md bg-gray-90 w-[600px] h-[100px]" />
        <button type="submit" className="bg-black rounded-lg mt-6 transition-all duration-500 hover:scale-95  font-semibold text-lg text-white py-2 px-8">Submit</button>
      </div>
    </div>
  );
};
export default RateAndReview;
