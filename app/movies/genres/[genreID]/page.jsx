import React from 'react'
import MovieSection from '@/components/MovieSection'

export default function Genre({params}) {

  return (
    <div>
        <MovieSection option={params.genreID}/>
    </div>
  )
}
