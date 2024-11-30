import React, { useState, useEffect, useContext } from "react";
import Heading from "../componets/home/recent/Heading";
import Listing from "../componets/home/recent/Listing";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../componets/utils/SearchContext";
import { Spin, Alert } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Filtering from "../componets/searching/Filtering";

// Fetch Listings
const fetchListings = async () => {
  const { data } = await axios.get("https://accofinderbackend-1.onrender.com/api/listings");
  return data;
};

export default function SearchingPage() {
  const [filteredListings, setFilteredListings] = useState([]);
  const location = useLocation();
  const searchTermFromState = location.state?.term || "";
  const queryParams = new URLSearchParams(location.search);
  const searchTermFromQuery = queryParams.get("query");
  const { searchTerm } = useContext(SearchContext);

  const headingTitle = searchTerm || searchTermFromQuery || searchTermFromState;

  // Fetch listings using React Query
  const { data: listings, error, isLoading } = useQuery({
    queryKey: ["listings"],
    queryFn: fetchListings,
  });

  // Handle search/filter updates when listings change
  useEffect(() => {
    if (listings) {
      setFilteredListings(listings); // Set filtered listings directly without filter logic
    }
  }, [listings]);

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
      <Heading
        title={headingTitle}
        subtitle={searchTermFromQuery ? `Results for ${searchTermFromQuery}` : ""}
      />
      <Filtering/>
      <Listing lists={filteredListings} searchTerm={headingTitle} />
    </div>
  );
}
