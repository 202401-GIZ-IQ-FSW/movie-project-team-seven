import React from 'react'
import MovieSection from '@/components/MovieSection'

export default function genre({params}) {

  return (
    <div>
        <MovieSection option={params.genreID}/>
    </div>
  )
}
