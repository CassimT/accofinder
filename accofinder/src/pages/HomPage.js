<<<<<<< HEAD
import React from 'react';
import Listing from '../componets/home/recent/Listing';
=======
import React from 'react'
import Listing from '../componets/home/recent/Listing'
import Heading from '../componets/home/recent/Heading'
>>>>>>> 65ec078f2bbb47bc0b8828684d12546d69ef6e72

export default function HomPage() {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen'>
         <Heading
            title='Explore top Rooms'
          />
        <Listing/>
    </div>
    
  )
}
