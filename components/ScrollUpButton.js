'use client';
import React from 'react'

export default function ScrollUpButton() {
    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <button onClick={top} className='text-white text-[14px] fixed bottom-4 right-4 z-50 w-10 h-10 rounded-full bg-cyan-500 opacity-50 hover:opacity-100 hover:border border-cyan-800'><i className="fa-solid fa-arrow-up"></i></button>
  )
}
