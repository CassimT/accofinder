import React, { useState } from 'react';

export default function RateAndReview() {
  // State to manage the selected rating and review text
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');

  // Function to handle the star click
  const handleStarClick = (value) => {
    setRating(value);
  };

  // Function to handle mouse hover for stars
  const handleStarHover = (value) => {
    setHoverRating(value);
  };

  // Function to reset hover rating when mouse leaves
  const handleStarLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Rate and Review Your Hostel</h2>
      
      {/* Rating Section */}
      <div className="flex space-x-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star text-3xl cursor-pointer ${
              (hoverRating || rating) >= star ? 'text-amber-500' : 'text-gray-300'
            }`}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => handleStarHover(star)}
            onMouseLeave={handleStarLeave}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Section */}
      <textarea
        className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Write your review here..."
        rows="5"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      
      {/* Submit Button */}
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        onClick={() => {
          console.log('Rating:', rating);
          console.log('Review:', review);
          // Here you can handle the submission of the review
        }}
      >
        Submit Review
      </button>
    </div>
  );
}
