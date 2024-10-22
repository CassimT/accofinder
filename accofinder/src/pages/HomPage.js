import React from 'react'
import Listing from '../componets/home/recent/Listing';
import Hero from "../componets/home/hero/Hero";
import Heading from '../componets/home/recent/Heading'
import NewsLetter from '../componets/home/hero/NewsLetter/NewsLetter';

export default function HomPage() {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen w-screen'>
         <Hero/>
         <Heading
            title='Explore top Rooms'
          />
        <Listing/>
        <NewsLetter/>
    </div>
    
  )
}
