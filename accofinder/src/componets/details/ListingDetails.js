
import React from 'react';

function ListingDetails({ icons, location , distance,price,security }) {
  return (
    <div className="bg-blue-900 h-72 w-60 rounded-md flex flex-col p-4 font-roboto">
      <h1 className="text-white text-lg font-roboto"></h1>
      <p className="text-white text-sm">  </p>
      <div className="flex-1 overflow-y-auto"></div>
    </div>
  );
}

export default ListingDetails; 

// the page is meant for cards