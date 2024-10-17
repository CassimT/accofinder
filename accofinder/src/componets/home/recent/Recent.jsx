import React from "react"
import RecentCard from "./RecentCard"
import Heading from "./Heading"

const Recent = () => {
  return (
    <>
      <section className='recent py-12'>
        <div className='container mx-auto'>
        <Heading
            title='Explore top houses'
          />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
