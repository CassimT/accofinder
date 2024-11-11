import React from 'react'
import Gallery from '../componets/details/Gallery'
//import DetailsCard from '../componets/details/DetailsCard'
import OncardDetails from '../componets/details/OncardDetails'


export default function DetailsPage(icon, title, value) {
  

  return (
    <div className='flex justify-center items-center flex-col min-h-screen w-screen'>
      <Gallery/>
      
     <OncardDetails/>
      
      

    </div>
  )
}
