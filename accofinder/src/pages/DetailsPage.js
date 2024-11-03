import React from 'react'
import Gallery from '../componets/details/Gallery'
import DetailsCard from '../componets/details/DetailsCard'

export default function DetailsPage() {
  return (
    <div className='flex bg-zinc-200 justify-center items-center flex-col min-h-screen w-screen'>
      <h1 className='text-amber-600 text-center font-roboto font-bold text-3xl pb-4 pt-4 '>More Details </h1>
 <Gallery/>
 <DetailsCard/>
    </div>
  )
}
