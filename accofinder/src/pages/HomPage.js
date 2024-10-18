import React from 'react'
import Listing from '../componets/home/recent/Listing'
import Heading from '../componets/home/recent/Heading'

export default function HomPage() {
  return (
    <div className=' flex justify-center flex-col'>
         <Heading
            title='Explore top houses'
          />
        <Listing/>
    </div>
    
  )
}
