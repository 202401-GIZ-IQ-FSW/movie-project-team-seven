"use client";
import React, { useState } from 'react'

export default function TrailerButton({ videoKey }) {
  const [isHidden, setIsHidden] = useState(true);

    function toggleTrailer(){
      videoKey? setIsHidden(!isHidden) : alert("This video has no trailer in API")
            }
  return (
    <div>
      <button onClick={toggleTrailer} className="bg-red-700 hover:bg-red-500 border hover:border-cyan-400 text-white rounded-md p-2">{isHidden? "Watch Trailer": "Close Trailer"}</button>
      {isHidden? ""
      : <iframe src={`https://www.youtube.com/embed/${videoKey}`} allowFullScreen className='my-4 mx-auto w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] h-[200px] md:h-[300px] lg:h-[400px]'/>
      }
    </div>
)
}
