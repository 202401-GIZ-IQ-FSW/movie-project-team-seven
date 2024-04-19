import React from 'react'
import CustomSlider from './CustomSlider'
import Link from 'next/link'

export default async function MoviesSliderSection({ option }) {
    const sliderMovies = await fetch(`https://api.themoviedb.org/3/movie/${option.value}?include_adult=false&language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
    .then(res =>  res.json())
    .then(data => data.results)
  return (
    <div className='my-[30px]'>
      <div className="m-2 p-2 border-b-2 border-cyan-900 flex justify-between items-center">
          <p className="text-[24px] font-serif text-cyan-500">{option.label}:</p>
          <Link href={"/movies/genres/" + option.value}><button className="text-white font-serif border rounded-md p-2 bg-cyan-600 hover:bg-cyan-300">Show More</button></Link>
      </div>
      <CustomSlider Movies={sliderMovies} />
    </div>
  )
}
