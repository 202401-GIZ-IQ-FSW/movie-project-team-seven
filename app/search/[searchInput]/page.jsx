import React from 'react'
import MovieSection from '@/components/MovieSection'

function search({params}) {
  return (
    <div>
        <MovieSection query={params.searchInput} />
    </div>
  )
}

export default search