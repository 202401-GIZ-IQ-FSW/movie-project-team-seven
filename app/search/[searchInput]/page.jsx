import React from 'react'
import MovieSection from '@/components/MovieSection'

export default function Search({params}) {
  return (
    <div>
        <MovieSection query={params.searchInput} />
    </div>
  )
}

