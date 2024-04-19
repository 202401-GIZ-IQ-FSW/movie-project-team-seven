import React from 'react'
import MainSlider from './MainSlider'

export default async function MainSliderSection() {
    
    const Movies = await fetch("https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129")
    .then(res => res.json())
    .then(data =>  data.results.slice(0, 10))

  return (
    <MainSlider movies={Movies}/>
  )
}
