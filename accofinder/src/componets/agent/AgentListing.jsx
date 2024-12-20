import React, { useEffect, useState } from 'react';
import { useNavigate,useNavigation } from 'react-router-dom';
import { Table, Input, Button,Spin,Alert } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const { Search } = Input;

function AgentListing() {
  const navigate = useNavigate();
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // React Query to fetch listings
  const { data: listings, error, isLoading, refetch } = useQuery({
    queryKey: ['listings'],
    queryFn: async () => {
      //fetching data to API endpoint
      const response = await axios.get('https://accofinderbackend-1.onrender.com/api/listings'); 
      return response.data;
    }
  });
   // Update filtered listings when listings change or search term updates
   useEffect(() => {
    if (listings) {
      const sanitizedListings = sanitizeListings(listings);
      if (searchTerm) {
        setFilteredListings(
          sanitizedListings.filter((listing) =>
            listing.hostelname.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setFilteredListings(sanitizedListings);
      }
    }
  }, [listings, searchTerm]); // Re-run when listings or searchTerm change

  // Error and loading state handling
  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <Spin size="large" />
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-screen">
      <Alert message="Error loading listings" type="error" showIcon />
    </div>
  );

  // Convert MongoDB Decimal128 to number or string before rendering
  const sanitizeListings = (listings) => {
    return listings.map((listing) => ({
      ...listing,
      price: convertToNumber(listing.price),
      rating: formatDecimal(convertToNumber(listing.rating)),
    }));
  };

  // Function to safely convert to number
  const convertToNumber = (value) => {
    if (value && value.toNumber) {
      return value.toNumber();
    }
    return isNaN(value) ? 0 : Number(value);
  };

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  //formating to decimal
  const formatDecimal = (value) => {
    return Number(value).toFixed(1)
  }
  // Deleting listing handler
  const handleDelete = (listingId) => {
    axios.delete(`https://accofinderbackend-1.onrender.com/api/listings/${listingId}`).then(() => {
      refetch(); // refetch after deletion
    });
  };
  //go to editForm
  const gotToEditListing = ()=> {
    navigate("/editlisting")
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'hostelname',
      key: 'hostelname',
      sorter: (a, b) => a.hostelname.localeCompare(b.hostelname),
      render: (text) => <span className="text-sm">{text}</span>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      render: (text) => <span className="text-sm">{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'available',
      key: 'status',
      sorter: (a, b) => a.available - b.available,
      render: (available) => (
        <span className="text-sm">
          {available ? "Available" : "Not Available"}
        </span>
      ),
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            icon={<EditOutlined />}
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs"
            onClick={()=> {
              gotToEditListing()
              localStorage.setItem("listingId",record._id)
            }}
            size="small"
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            className="bg-red-500 hover:bg-red-600 text-white text-xs"
            onClick={() => handleDelete(record._id)} // pass the correct _id
            size="small"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-4xl mx-auto gap-3 p-4">
      <Search
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        enterButton
        className="mb-2"
      />
      <Table
        columns={columns}
        dataSource={filteredListings}
        rowKey="_id"
        pagination={{ pageSize: 8 }}
        className="rounded-lg shadow-md w-full"
        size="small"
      />
    </div>
  );
}

export default AgentListing;
