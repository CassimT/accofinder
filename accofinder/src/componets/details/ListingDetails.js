
import React from 'react';

function ListingDetails({ title, subtitle, children }) {
  return (
    <div className="bg-blue-700 h-72 w-56 rounded-md flex flex-col p-4">
      <h2 className="text-white text-lg font-bold">{title}</h2>
      <p className="text-white text-sm">{subtitle}</p>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}

export default ListingDetails; 