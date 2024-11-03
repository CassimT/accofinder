import React from 'react'
import Gallery from '../componets/details/Gallery'
import DetailsCard from '../componets/details/DetailsCard'

export default function DetailsPage() {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen w-screen'>
      <Gallery/>
      <DetailsCard/>

    </div>
  )
}
