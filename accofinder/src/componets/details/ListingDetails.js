
import React from 'react';

function ListingDetails({icons, description}) {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 max-w-xs max-h-96">
      <h2 className='text-xl font-bold text-gray-800 mb-2'>
        {icons}

      </h2>
      <p className='text-gray-600'>{description}</p>

     </div>
  );
}

export default ListingDetails; 

// the page is meant for cards