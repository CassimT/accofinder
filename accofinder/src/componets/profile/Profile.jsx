import React from 'react'
export default function Profile() {
  return (
    <div> 
        <div className=' bg-blue-400 w-screen h-96 flex flex-col gap-16 justify-center relative items-center'>
            <div className=' bg-white w-72 h-72 rounded-full -mb-80 absolute'>
               
            </div>
            <h className='text-black text-2xl font-bold'>STUDENT</h>
                
        </div>
          <p className='text-center mt-4'>Abram prosser </p>
          <p className='text-center mt-4'>HelgaR.Kovanch@exam.com </p>
          
          <button className="text-white bg-black px-6 py-3 h-10 flex justify-center items-center
           rounded-full cursor-pointer mx-auto mt-6">LogOut</button>
          
        </div> 
   )
}
