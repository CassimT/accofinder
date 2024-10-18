import React from "react"
import ListingCard from "./ListingCard"
import Heading from "./Heading"

const Listing = () => {
  return (
    <>
      <section className='recent py-12'>
        <div className='container mx-auto'>
        <Heading
            title='Explore top houses'
          />
          <ListingCard />
        </div>
      </section>
    </>
  )
}

export default Listing
