import React, { useState } from 'react';
import axios from "axios"

const AddListingForm = () => {
  const [formData, setFormData] = useState({
    hostelname: '',
    location: '',
    roomtype: '',
    price: '',
    description: '',
    email: '',
    agentphone: '',
    roomimage: null,
    toiletimage: null,
    kitchenimage: null,//bags
    outsideviewimage: null,
    distance: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic herez
    const agentId = "6489d5fa9e8f1b47c27f5e99" // to be replaced with the acture Use id
    const rating = 0.0;
    const review = ""
    const form = new FormData();
    Object.keys(formData).forEach((keys)=> {
      form.append(keys,formData[keys]);
    })
    form.append("agent",agentId)
    form.append("rating",rating)
    form.append("review",review)
    form.append("available",true)

    try {
      const response = await axios.post("http://localhost:3000/api/listings",form,{
        headers:{
          "Content-Type": "multipart/form-data"
       } 
      })
         // Alert for successful submission
         alert("Listing submitted successfully!");
         console.log("Data sent", response.data);
         
         // Reset form data after successful submission
         setFormData({
           hostelname: '',
           location: '',
           roomtype: '',
           price: '',
           description: '',
           email: '',
           agentphone: '',
           roomimage: null,
           toiletimage: null,
           kitchenimage: null,
           outsideviewimage: null,
           distance: '',
         });
    } catch (error) {
      if(error.response && error.response.data) {
        console.log(error.response.data.error)
        alert("Faild to submit the form. check that all fiid are filled and try again!");
      }else{
        console.log(`error${error.message}`)
        alert("Faild to submit the form. check that all fiid are filled and try again!");
      }
     
    }
    
  };

  return (
    <div className="flex flex-col justify-between w-full max-w-4xl mx-auto gap-3 p-4  bg-white shadow-md rounded-lg">
      <div className=" bg-white rounded-lg p-4 w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add School Accommodation Listing</h2> {/* Smaller title font size */}
        
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

          {/* roomImage Upload */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Upload Room Image</label>
            <input
              type="file"
              name="roomimage"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
            />
          </div>
          {/**kichen image */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Upload kitchen Image</label>
            <input
              type="file"
              name="kitchenimage"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
            />
          </div>
           {/**Toilet image */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Upload Toilet Image</label>
            <input
              type="file"
              name="toiletimage"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200 text-sm" 
            />
          </div>
          {/**outside View image */}
          <div className="flex flex-col col-span-2">
            <label className="block text-gray-700 mb-1 text-sm font-medium">Upload Outside View Image</label>
            <input
              type="file"
              name="outsideviewimage"
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
