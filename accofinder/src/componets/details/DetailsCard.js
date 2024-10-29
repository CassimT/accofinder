import React from 'react'
import { detailsCardData,list } from '../data/Data'
import ListingDetails from './ListingDetails'


export default function DetailsCard() {
  return (
    <div>
      {detailsCardData.map((icon,index)=> {
        return (
          <ListingDetails
            icons={icon.icon}
            index={index}
          />
        )
      })}
      
    </div>
  )
}

    