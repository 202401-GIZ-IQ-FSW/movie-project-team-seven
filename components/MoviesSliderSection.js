import React from 'react'
import CustomSlider from './CustomSlider'
import Link from 'next/link'

export default function MoviesSliderSection({sliderMovies , option}) {
  return (
    <div className='my-4 w-full'>
        <div className="m-4 w-[95%] p-2 border-b-2 border-gray-500 flex justify-between items-center">
            <p className="text-white text-[24px] font-serif">{(option)? option.label: "Loading"}</p>
            <Link href={(option)? "./movies/" + option.value: "#"}><button className="text-white font-serif border rounded-md p-2 bg-cyan-600 hover:bg-cyan-300">Show More</button></Link>
        </div>
        <CustomSlider Movies={sliderMovies}/>
    </div>
  )
}
