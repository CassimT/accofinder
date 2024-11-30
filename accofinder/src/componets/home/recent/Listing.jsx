import React from "react";
import ListingCard from "./ListingCard";

const Listing = ({ lists = [], searchTerm }) => {
  return (
    <>
      <section className="recent py-12">
        <div className="container mx-auto">
          <ListingCard lists={lists} searchTerm={searchTerm} />
        </div>
      </section>
    </>
  );
};

export default Listing;
