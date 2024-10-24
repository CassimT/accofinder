import React from 'react'
import SearchBar from '../componets/searching/SearchBar'
import Heading from '../componets/home/recent/Heading'
import Filtering from '../componets/searching/Filtering'
import Listing from '../componets/home/recent/Listing'
import { useLocation } from 'react-router-dom'

export default function SearchingPage() {
  const location = useLocation();
  const searchTermFromState = location.state?.term || "";
  const queryParams = new URLSearchParams(location.search);
  const searchTermFromQuery = queryParams.get("query");
  return (
    <div className='flex justify-center items-center flex-col min-h-screen'> 
        <SearchBar/>
        <Heading
            title={searchTermFromQuery}
            subtitle= {searchTermFromQuery ? `Results for ${searchTermFromQuery}` : ""}          
        />
        <Filtering/>
        <Listing/>
       
    </div>
  )
}
