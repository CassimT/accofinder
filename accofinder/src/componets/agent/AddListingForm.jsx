import React, { useState } from 'react';
import ListCounter from './ListCounter';

const AddListingForm = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    address: '',
    roomType: '',
    pricePerMonth: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
    image: null,
    distance: '',
    landlordName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-between w-full max-w-4xl mx-auto gap-3 p-4">
      <div className="bg-gray-100 rounded-lg p-4 w-full max-w-3xl"> {/* Reduced padding and max-width */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add School Accommodation Listing</h2> {/* Smaller title font size */}
        
        <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-2 gap-2"> {/* Reduced space and gap */}
          {/* Property Name */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Property Name</label> {/* Smaller label font size */}
            <input
              type="text"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 col-span-2">
            {/* Address */}
            <div className="flex flex-col">
              <label className="block text-gray-700 mb-1 text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
                required
              />
            </div>

            {/* Room Type */}
            <div className="flex flex-col">
              <label className="block text-gray-700 mb-1 text-sm font-medium">Room Type</label>
              <select
                name="roomType"
                value={formData.roomType}
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
                name="pricePerMonth"
                value={formData.pricePerMonth}
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
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Landlord/Agent Name</label>
            <input
              type="text"
              name="landlordName"
              value={formData.landlordName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
              required
            />
          </div>

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
                name="contactEmail"
                value={formData.contactEmail}
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
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Upload an Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
            />
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

export default AddListingForm;
