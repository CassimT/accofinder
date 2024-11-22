import React, { useState } from "react";

const RateAndReview = () => {
  
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [userComment, setUserComment] = useState("");

  const handleRating = (value) => {
    setRating(value);
    if (value > 0) {
      setIsCommentVisible(true);
    } else {
      setIsCommentVisible(false);
    }
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    setUserComment(comment);
    setIsCommentVisible(false); // Hide comment box after submition
    setComment(""); // Clear the comment input
    alert(`Rating: ${rating}\nComment: ${userComment}`);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h3 className="font-semibold mt-8">Rate and leave a Comment </h3>

      <div className="flex flex-row items-center justify-center mr-10">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            style={{
              marginRight: "20px",
              fontSize: "24px",
              cursor: "pointer",
              color: rating >= star ? "gold" : "gray",
            }}
          >
            ★
          </span>
        ))}
      </div>

      {isCommentVisible && (
        <div className="flex flex-col items-center justify-center mt-[20px]">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="What is your commemnt?"
            className="border-gray-200 border-2 focus:outline-none focus:ring-2 focus:ring-orange-500 p-8 rounded-md bg-gray-90 w-[600px] h-[100px]"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-black rounded-lg mt-6 transition-all duration-500 hover:scale-95  font-semibold text-lg text-white py-2 px-8"
          >
            Submit
          </button>
        </div>
      )}

      {/* Comment Popup below the rating */}
      {userComment && (
        <div className="flex flex-col bg-[#f9f9f9] p-10 mt-[20px] rounded-lg border-gray-100">
          <h4>Your Comment:</h4>
          <p>{userComment}</p>
        </div>
      )}
    </div>
  );
};
export default RateAndReview;