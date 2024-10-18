import React from 'react'
import { filter } from '../data/Data'

export default function Filtering
() {
  return (
    <div className=' w-screen flex justify-center'>
        
        {filter.map((val,index) =>{
            const {text} = val
           return (
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2lg:flex gap-4 mt-6' key={index}>
            <button className='bg-blue-100 text-black py-1 px-4 rounded-md mt-auto text-sm w-40 h-10'>
              {text}
            </button>
          </div>
          
           )
           
        })}
        
    </div> 
  )
}