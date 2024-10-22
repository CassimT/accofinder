import React from 'react';

const SearchBar = () => {
  return (
    <div className=" relative flex justify-center items-center bg-blue-100 py-8 w-screen "> 
      <div className="absolute sm:w-96 lg:w-[450px] -mb-16"> 
        <input
          type="text"
          placeholder="search..."
          className="w-full py-3 pl-10 pr-4 text-gray-600 bg-white rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 " // Negative top margin to push it outside
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <i className="fa fa-search text-gray-400"></i> 
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
