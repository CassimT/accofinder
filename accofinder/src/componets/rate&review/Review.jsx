import React from "react";
import Rating from "./Rating";

const Review = ()=>{
    return(
        <div>
            <h4>{Review.username}</h4>
            <Rating rating={review.rating}/>
            <p>{review.review}</p>
        </div>

    );
};
export default Review;