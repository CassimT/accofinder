import React from 'react'
import { filter } from '../data/Data'

export default function Filtering
() {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mt-6'>
        
        {filter.map((val,index) =>{
            const {text} = val
           return (
            <div  key={index}>
            <button className='bg-blue-100 text-black py-1 px-4 rounded-md mt-auto text-sm w-40 h-10'>
              {text}
            </button>
          </div>
          
           )
           
        })}
        
    </div> 
  )
}