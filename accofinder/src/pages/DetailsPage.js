import React from 'react'
import Gallery from '../componets/details/Gallery'
import DetailsCard from '../componets/details/DetailsCard'


export default function DetailsPage(icon, title, value) {
  

  return (
    <div className='flex  bg-gray-300 justify-center items-center flex-col min-h-screen w-screen'>
      <Gallery/>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 justify-center items-center gap-6'>
      <DetailsCard />
      <DetailsCard/>
      <DetailsCard/>
      <DetailsCard/>
      <DetailsCard/>
      <DetailsCard/>
      </div>
      

    </div>
  )
}
