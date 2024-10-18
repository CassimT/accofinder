import React from 'react'
import SearchBar from '../componets/searching/SearchBar'
import Heading from '../componets/home/recent/Heading'
import Filtering from '../componets/searching/Filtering'
import Listing from '../componets/home/recent/Listing'

export default function SearchingPage() {
  return (
    <div className=' flex flex-col justify-center'>     
        <SearchBar/>
        <Heading
            title= "Serach Title"
            subtitle={"Sub title of the serach result"}
        />
        <Filtering/>
        <Listing/>
       
    </div>
  )
}
