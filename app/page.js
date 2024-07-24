
"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState } from 'react'

function page() {
  const [count,setcount]=useState(0)
  const clickHandler=()=>{
    setcount(count+1)
    
  }
  return (
    <div>
      <h1 className='text-9xl font-semibold'>count-{count}</h1>
      <button 
      onClick={clickHandler}
      className='text-3xl font-semibold px-5 py-2 bg-blue-300 rounded-lg ml-10'>
        click
      </button>
    </div>
  )
}

export default page