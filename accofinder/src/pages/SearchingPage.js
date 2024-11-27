import React, { useState, useEffect, useContext } from "react";
import Heading from "../componets/home/recent/Heading";
import Filtering from "../componets/searching/Filtering";
import Listing from "../componets/home/recent/Listing";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../componets/utils/SearchContext";
import { Spin, Alert } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchListings = async () => {
  const { data } = await axios.get("http://localhost:3000/api/listings");
  return data;
};

export default function SearchingPage() {
  const location = useLocation();
  const searchTermFromState = location.state?.term || "";
  const queryParams = new URLSearchParams(location.search);
  const searchTermFromQuery = queryParams.get("query");
  const { searchTerm } = useContext(SearchContext);

  const headingTitle = searchTerm || searchTermFromQuery || searchTermFromState;

  // State for selected filter and filtered listings
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredListings, setFilteredListings] = useState([]);

  // Fetch listings using React Query
  const { data: listings, error, isLoading } = useQuery({
    queryKey: ["listings"],
    queryFn: fetchListings,
  });

  // Update filtered listings when listings or selectedFilter change
  useEffect(() => {
    if (listings) {
      const sanitizedListings = listings.map((listing) => ({
        ...listing,
        distance: parseFloat(listing.distance || 0), // Ensure distance is a number
      }));

      const filtered = sanitizedListings.filter((listing) => {
        if (selectedFilter) {
          const { field, search } = selectedFilter;

          if (field === "distance") {
            // Check if the listing's distance matches the filter
            return listing.distance <= parseFloat(search);
          }

          // Generic match for other fields
          return listing[field]?.toLowerCase().includes(search.toLowerCase());
        }
        return true; // Show all if no filter is selected
      });

      setFilteredListings(filtered);
    }
  }, [listings, selectedFilter]);

  // Error and loading state handling
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <Alert message="Error loading listings" type="error" showIcon />
      </div>
    );

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      {/* Debugging: Display the current filter */}
      <h1>
        Selected Filter: {selectedFilter ? selectedFilter.search : "None"}
      </h1>
      <Heading
        title={headingTitle}
        subtitle={searchTermFromQuery ? `Results for ${searchTermFromQuery}` : ""}
      />
      <Filtering
        onSelect={(filter) => {
          console.log("Selected Filter:", filter);
          setSelectedFilter(filter);
        }}
      />
      <Listing lists={filteredListings} searchTerm={headingTitle} />
    </div>
  );
}
