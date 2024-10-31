import React from 'react';
import SearchBar from '../componets/searching/SearchBar';
import Heading from '../componets/home/recent/Heading';
import Filtering from '../componets/searching/Filtering';
import Listing from '../componets/home/recent/Listing';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../componets/utils/SearchContext';
import { list } from '../componets/data/Data';
import { useContext } from 'react';

export default function SearchingPage() {
  const location = useLocation();
  const searchTermFromState = location.state?.term || "";
  const queryParams = new URLSearchParams(location.search);
  const searchTermFromQuery = queryParams.get("query");
  const { searchTerm } = useContext(SearchContext);

  // Create a heading title from available search terms
  const headingTitle = searchTerm || searchTermFromQuery || searchTermFromState;

  // Filter the listings based on the searchTerm
  const filteredList = list.filter(item =>
    item.name && item.name.toLowerCase().includes((searchTerm || searchTermFromQuery || "").toLowerCase())
  );

  return (
    <div className='flex justify-center items-center flex-col min-h-screen'> 
        <Heading
            title={headingTitle}
            subtitle={searchTermFromQuery ? `Results for ${searchTermFromQuery}` : ""}          
        />
        <Filtering />
        <Listing lists={filteredList} /> {/* Ensure you pass the filtered list */}
    </div>
  );
}
