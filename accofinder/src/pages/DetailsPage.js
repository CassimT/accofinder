import React from 'react'
import Gallery from '../componets/details/Gallery'
import OncardDetails from '../componets/details/OncardDetails'
import Button from '../componets/payment/Button'
import RateAndReview from '../componets/rateAndreview/RateAndReview'



export default function DetailsPage(icon, title, value) {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen w-screen mb-4'>
    <Gallery/>
    <OncardDetails/>
    <Button/>
    <RateAndReview  />
    </div>
  )
}
