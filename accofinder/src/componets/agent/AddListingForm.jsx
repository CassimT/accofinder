import React, { useState } from 'react';

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
    <div className="min-h-screen bg-gray-200 rounded-2xl flex items-center justify-center py-10">
      <div className="bg-white  rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a School Accommodation Listing</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 grid  grid-cols-2 gap-4">
          {/* Property Name */}
          <div className="flex flex-col col-span-2 grid-cols-1 sm:grid-cols-2">
            <label className="block text-gray-700 mb-2 font-medium">Property Name</label>
            <input
              type="text"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              required
            />
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-2">
              {/* Address */}
              <div className="flex flex-col">
                <label className="block text-gray-700 mb-2 font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
                  required
                />
              </div>

              {/* Room Type */}
              <div className="flex flex-col">
                <label className="block text-gray-700 mb-2 font-medium">Room Type</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
                  required
                >
                  <option value="" disabled>Select room type</option>
                  <option value="single">Single Room</option>
                  <option value="shared">Shared Room</option>
                </select>
              </div>
          </div>

        
          {/* Price Per Month */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-2"> {/** Price Per Monthl and Distance */}
          <div className="flex flex-col">
            <label className="block text-gray-700 mb-2 font-medium">Price Per Month</label>
            <input
              type="number"
              name="pricePerMonth"
              value={formData.pricePerMonth}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              required
            />
          </div>

          {/* Distance */}
          <div className="flex flex-col">
            <label className="block text-gray-700 mb-2 font-medium">Distance (in miles)</label>
            <input
              type="text"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              required
            />
          </div>
          </div>

          {/* Landlord/Agent Name */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-2 font-medium">Landlord/Agent Name</label>
            <input
              type="text"
              name="landlordName"
              value={formData.landlordName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-2 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-2"> {/** contact Email and ContactPhone */}
          {/* Contact Email */}
          <div className="flex flex-col">
            <label className="block text-gray-700 mb-2 font-medium">Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              required
            />
          </div>

          {/* Contact Phone */}
          <div className="flex flex-col">
            <label className="block text-gray-700 mb-2 font-medium">Contact Phone</label>
            <input
              type="tel"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              required
            />
          </div>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-2 font-medium">Upload an Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center col-span-2 mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
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
