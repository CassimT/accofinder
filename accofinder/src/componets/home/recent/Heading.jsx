import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className='text-center mt-4'>
      <h1 className='text-3xl font-bold  font-roboto'>{title}</h1>
      <p className='text-gray-500 text-lg'>{subtitle}</p>
    </div>
  );
};

export default Heading;
