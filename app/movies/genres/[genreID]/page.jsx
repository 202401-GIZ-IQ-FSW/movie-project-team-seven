import React from 'react'
import MovieSection from '@/components/MovieSection'

export default function Genre({params}) {

  return (
    <div className='font-serif'>
        <MovieSection option={params.genreID}/>
    </div>
  )
}
