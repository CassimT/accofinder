import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { Spin, Alert } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchListings = async () => {
  const { data } = await axios.get("https://accofinderbackend-1.onrender.com/api/listings");
  return data;
};

const ListingCard = ({ searchTerm = "", finalFilterOptions }) => {
  const navigate = useNavigate();

  // React Query to fetch listings
  const {
    data: listings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["listings"],
    queryFn: fetchListings,
  });

  // Pagination and filtered listings
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredListings, setFilteredListings] = useState([]);
  const itemsPerPage = 10;

  // Function to filter listings based on multiple search terms
  const filterListings = () => {
    if (listings) {
      const sanitizedListings = listings.map((listing) => ({
        ...listing,
        price: parseFloat(listing.price || 0), // Ensure price is a number
        distance: parseFloat(listing.distance || 0), // Ensure distance is a number
      }));

      // If there are any filters (search term or filter options), apply them
      const filtered = sanitizedListings.filter((listing) => {
        // Convert the search term to lowercase and split by space to handle multiple search terms
        const terms = searchTerm.toLowerCase().split(" ").filter(Boolean);
        
        // Check if the listing matches all search terms
        const matchesSearchTerm = terms.every((term) => {
          return (
            listing.hostelname?.toLowerCase().includes(term) ||
            listing.roomtype?.toLowerCase().includes(term) ||
            (listing.price && listing.price.toString().includes(term)) ||
            (listing.distance && listing.distance.toString().includes(term))
          );
        });

        const matchesRoomType = finalFilterOptions?.roomtype
          ? listing.roomtype === finalFilterOptions.roomtype
          : true;

        const matchesDistance = finalFilterOptions?.maxDistance
          ? listing.distance <= finalFilterOptions.maxDistance
          : true;

        const matchesPrice = finalFilterOptions?.maxPrice
          ? listing.price <= finalFilterOptions.maxPrice
          : true;

        // Combine all filter conditions
        return (
          matchesSearchTerm &&
          matchesRoomType &&
          matchesDistance &&
          matchesPrice
        );
      });

      // Set the filtered listings or display no results found
      if (filtered.length === 0) {
        setFilteredListings([]);
      } else {
        setFilteredListings(filtered);
      }
    }
  };

  useEffect(() => {
    filterListings();
  }, [listings, searchTerm, finalFilterOptions]);

  // Pagination logic
  const pageCount = Math.ceil(filteredListings.length / itemsPerPage);
  const displayedItems = filteredListings.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const goToDetails = (props) => {
    const { _id } = props;
    localStorage.setItem("detailsListingId", _id);
    navigate("/details", { state: { Room: props } });
  };

  // Loading and error handling
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
    <div className="max-w-7xl mx-auto mt-4">
      {/* Pagination at top */}
      <ReactPaginate
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"flex justify-center space-x-2 mb-8"}
        activeClassName={"bg-blue-500 text-white"}
        pageClassName={"py-2 px-3 border rounded-md"}
        previousClassName={"py-2 px-3 border rounded-md"}
        nextClassName={"py-2 px-3 border rounded-md"}
        disabledClassName={"text-gray-300 cursor-not-allowed"}
      />

      {/* Listing grid */}
      {filteredListings.length === 0 ? (
        <div className="text-center py-8 text-xl text-gray-600">No Data Found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayedItems.map((val) => {
            const {
              _id,
              roomimage,
              available,
              hostelname,
              price,
              roomtype,
              rating,
              distance,
            } = val;
            const roomimagePath = roomimage?.path;
            return (
              <div
                className="bg-white shadow-md rounded-lg"
                key={_id}
                style={{ maxWidth: "300px" }}
              >
                <div className="img" style={{ maxWidth: '300px' }} >
                  <img
                    src={`https://accofinderbackend-1.onrender.com/${roomimagePath}`}
                    alt={"Image not available!"}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        available
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {available ? "Available" : "Not Available"}{" "}
                    </span>
                    <div className="flex items-center space-x-1">
                      <i className="fa fa-star text-yellow-500 text-sm"></i>
                      <span className="text-gray-600 text-sm">{rating}</span>
                    </div>
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    {hostelname}
                  </h4>
                  <p className="text-gray-500 text-sm flex items-center mt-1">
                    <i className="fa fa-route mr-1"></i> {distance}Km
                    <label className="text-gray-500 ml-1">from Campus</label>
                  </p>
                </div>
                <div className="border-t border-gray-200 p-3 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-gray-600 text-sm">{roomtype}</span>
                    <button className="bg-gray-600 text-white py-1 px-3 rounded opacity-30 mt-1 text-sm">
                      MK{price}
                    </button>
                  </div>
                  <button
                    className="bg-black text-white py-1 px-4 rounded-full mt-auto text-sm transition duration-500 hover:scale-95"
                    onClick={() => goToDetails(val)}
                  >
                    More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination at bottom */}
      <ReactPaginate
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"flex justify-center space-x-2 mt-4"}
        activeClassName={"bg-blue-500 text-white"}
        pageClassName={"py-2 px-3 border rounded-md"}
        previousClassName={"py-2 px-3 border rounded-md"}
        nextClassName={"py-2 px-3 border rounded-md"}
        disabledClassName={"text-gray-300 cursor-not-allowed"}
      />
    </div>
  );
};

export default ListingCard;
