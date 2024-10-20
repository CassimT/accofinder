import React from 'react';
import Listing from '../componets/home/recent/Listing';
import React from 'react'
import Listing from '../componets/home/recent/Listing'
import Heading from '../componets/home/recent/Heading'

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
