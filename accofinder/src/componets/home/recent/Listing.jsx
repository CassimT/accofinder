import React from "react";
import ListingCard from "./ListingCard";
import Heading from "./Heading"; // Assuming this component is relevant to the listings

const Listing = ({ lists = [] }) => {
  return (
    <>
      <section className='recent py-12'>
        <div className='container mx-auto'>
          <ListingCard lists={lists} /> {/* Pass down the lists prop */}
        </div>
      </section>
    </>
  );
};

export default Listing;
