import React, { useState, useEffect } from "react";
import axios from "axios";

const EditListingForm = ({ listingId }) => {
  const agentId = localStorage.getItem("userId"); 
  const id = localStorage.getItem("listingId")
  const [formData, setFormData] = useState({
    hostelname: "",
    location: "",
    roomtype: "",
    price: "",
    description: "",
    email: "",
    agentphone: "",
    distance: "",
  });

  // Fetch the listing data when the component mounts
  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/listings/${id}`
        );
        const imagePath = response.data.roomimage?.path;
        setFormData({
          hostelname: response.data.hostelname || "",
          location: response.data.location || "",
          roomtype: response.data.roomtype || "",
          price: response.data.price || "",
          description: response.data.description || "",
          email: response.data.email || "",
          agentphone: response.data.agentphone || "",
          distance: response.data.distance || "",
        });
      } catch (error) {
        console.error("Failed to fetch listing data", error);
        alert("Failed to fetch listing data!");
      }
    };

    fetchListingData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData) //the edited form data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = new FormData();
    // Append form data
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        form.append(key, formData[key]);
      }
    });
    form.append("agent", agentId);
  
    // Log FormData values
    for (let [key, value] of form.entries()) {
      console.log(key, value);
    }
  
    try {
      const response = await axios.put(
        `https://accofinderbackend-1.onrender.com/api/listings/${id}`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Listing updated successfully!");
      console.log("Data sent:", response.data);
    } catch (error) {
      console.error("Failed to submit the form:", error);
      alert("Failed to submit the form. Please check that all fields are filled and try again!");
    }
  };

  return (
    <div className="flex flex-col justify-between w-full max-w-4xl mx-auto gap-3 p-4  bg-white shadow-md rounded-lg">
      <div className=" bg-white rounded-lg p-4 w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Edit Room Details</h2> {/* Smaller title font size */}
        
        <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-2 gap-2 "> {/* Reduced space and gap */}
          {/* Property Name */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Property Name</label> {/* Smaller label font size */}
            <input
              type="text"
              name="hostelname"
              value={formData.hostelname}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 col-span-2">
            {/* Address */}
            <div className="flex flex-col">
              <label className="block text-gray-700 mb-1 text-sm font-medium">Address/Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
                required
              />
            </div>

            {/* Room Type */}
            <div className="flex flex-col">
              <label className="block text-gray-700 mb-1 text-sm font-medium">Room Type</label>
              <select
                name="roomtype"
                value={formData.roomtype}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
                required
              >
                <option value="" disabled>Select room type</option>
                <option value="single">Single Room</option>
                <option value="shared">Shared Room</option>
              </select>
            </div>
          </div>

          {/* Price Per Month */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 col-span-2">
            <div className="flex flex-col">
              <label className="block text-gray-700 mb-1 text-sm font-medium">Price Per Month</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm"
                required
              />
            </div>

            {/* Distance */}
            <div className="flex flex-col">
              <label className="block text-gray-700 mb-1 text-sm font-medium">Distance (in miles)</label>
              <input
                type="text"
                name="distance"
                value={formData.distance}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
                required
              />
            </div>
          </div>

          {/* Landlord/Agent Name */}
       
          {/* Description */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
              rows="4"
              required
            ></textarea>
          </div>

          {/* Contact Email and Contact Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 col-span-2">
            {/* Contact Email */}
            <div className="flex flex-col">
              <label className="block text-gray-700 mb-1 text-sm font-medium">Contact Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
                required
              />
            </div>

            {/* Contact Phone */}
            <div className="flex flex-col">
              <label className="block text-gray-700 mb-1 text-sm font-medium">Contact Phone</label>
              <input
                type="tel"
                name="agentphone"
                value={formData.agentphone}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
                required
              />
            </div>
          </div>
         
          {/* Submit Button */}
          <div className="flex justify-center col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-sm" 
            >
              Submit Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditListingForm;
