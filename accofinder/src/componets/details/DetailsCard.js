import React from 'react'
//import { detailsCardData,list } from '../data/Data'
import ListingDetails from './ListingDetails'
import { MdAttachMoney, MdDirectionsSubway, MdLocationPin, MdSecurity,MdKitchen } from 'react-icons/md'
import { GiBathtub, GiPathDistance } from 'react-icons/gi'



export default function DetailsCard() {
  
 const CardData = [
    {
      icons:<MdLocationPin className=" h-10 w-10"/>,
      description:"description for this card"
  },
  {
      icons:<GiPathDistance  className=" h-10 w-10"/>,
      description:"description for this card"
  },
  {
      icons:<MdAttachMoney className=" h-10 w-10 "/>,
      description:"description for this card"
  },
  {
      icons:<MdDirectionsSubway className=" h-10 w-10"/>,
      description:"description for this card"
  },
  {
      icons:<MdSecurity className=" h-10 w-10"/>,
      description:"description for this card"
  },
  {
      icons:<GiBathtub className=" h-10 w-10"/>,
      description:"description for this card"
  },
  {
    icons:<MdKitchen className=" h-10 w-10"/>,
    description:"description for this card"
}
  
  ]

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {CardData.map((card,index)=> (
                <ListingDetails key={index} icons={card.icons}
                 description={card.description} />

            ))}

        </div>
      
    </div>

  )
}

    