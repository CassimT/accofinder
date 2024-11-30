import React, { useState } from "react";
import axios from "axios"
import { useLocation } from 'react-router-dom'

const RateAndReview = (props) => {
  const location  = useLocation()
  const {Room} = location.state
  
  const [rating, setRating] = useState(0);
  const [review, setreview] = useState("");
  const [isreviewVisible, setIsreviewVisible] = useState(false);
  const [userreview, setUserreview] = useState("");

  const handleRating = (value) => {
    setRating(value);
    if (value > 0) {
      setIsreviewVisible(true);
    } else {
      setIsreviewVisible(false);
    }
  };

  const handlereviewChange = (event) => {
    setreview(event.target.value);
  };

<<<<<<< HEAD
  const handleSubmit = () => {
    setUserComment(comment);
    setIsCommentVisible(false); // Hide comment box after submission
    setComment(""); // Clear the comment input
    alert(`Rating: ${rating}\nComment: ${userComment}`);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-8">
      <h3 className="font-semibold mt-8 text-center text-xl sm:text-2xl md:text-3xl">Rate and leave a Comment</h3>
=======
  const handleSubmit = async() => {
    const listingID = localStorage.getItem("detailsListingId")
    try {
      const response = await axios.put(
        `http://localhost:3000/api/listings/${listingID}`, 
        { rating, review }
      );
      console.log("Review submitted successfully:", response.data);
      alert("Your review has been submitted successfully!");
    } catch (error) {
      // Log the error for debugging
      console.error("Error submitting review:", error);

      if (error.response) {
        // Server responded with a status code outside the 2xx range
        console.log("Server response:", error.response.data);
        alert(
          `Failed to submit review. ${error.response.data.error || "Please try again later."}`
        );
      } else if (error.request) {
        // Request was made but no response was received
        console.log("No response received:", error.request);
        alert("Failed to submit review. The server is not responding. Please try again later.");
      } else {
        // Something else caused the error
        console.log("Error setting up request:", error.message);
        alert("An error occurred while submitting the review. Please try again.");
      }
    }
    
    setUserreview(review);
    setIsreviewVisible(false); // Hide review box after submition
    setreview(""); // Clear the review input
    alert(`Rating: ${rating}\nreview: ${userreview}`);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h3 className="font-semibold mt-8">Rate and leave a review </h3>
>>>>>>> 21382514a2fb6e586289c48ab448fe0c3607e7fd

      <div className="flex flex-row items-center justify-center mr-10 mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            style={{
              marginRight: "10px",
              fontSize: "24px",
              cursor: "pointer",
              color: rating >= star ? "gold" : "gray",
            }}
          >
            ★
          </span>
        ))}
      </div>

<<<<<<< HEAD
      {isCommentVisible && (
        <div className="flex flex-col items-center justify-center mt-[20px] w-full sm:w-[400px] md:w-[500px] lg:w-[600px]">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="What is your comment?"
            className="border-gray-200 border-2 focus:outline-none focus:ring-2 focus:ring-orange-500 p-4 sm:p-6 md:p-8 rounded-md bg-gray-90 w-full h-[120px]"
=======
      {isreviewVisible && (
        <div className="flex flex-col items-center justify-center mt-[20px]">
          <textarea
            value={review}
            onChange={handlereviewChange}
            placeholder="What is your commemnt?"
            className="border-gray-200 border-2 focus:outline-none focus:ring-2 focus:ring-orange-500 p-8 rounded-md bg-gray-90 w-[600px] h-[100px]"
>>>>>>> 21382514a2fb6e586289c48ab448fe0c3607e7fd
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-black rounded-lg mt-6 transition-all duration-500 hover:scale-95 font-semibold text-lg text-white py-2 px-8 w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      )}

<<<<<<< HEAD
      {/* Comment Popup below the rating */}
      {userComment && (
        <div className="flex flex-col bg-[#f9f9f9] p-6 sm:p-8 md:p-10 mt-[20px] rounded-lg border-gray-100 w-full sm:w-[400px] md:w-[500px] lg:w-[600px]">
          <h4 className="text-lg sm:text-xl font-semibold">Your Comment:</h4>
          <p>{userComment}</p>
=======
      {/* review Popup below the rating */}
      {userreview && (
        <div className="flex flex-col bg-[#f9f9f9] p-10 mt-[20px] rounded-lg border-gray-100">
          <h4>Your review:</h4>
          <p>{userreview}</p>
>>>>>>> 21382514a2fb6e586289c48ab448fe0c3607e7fd
        </div>
      )}
    </div>
  );
};

export default RateAndReview;
