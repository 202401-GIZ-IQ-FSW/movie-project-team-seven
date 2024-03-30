import React from 'react'
import MovieSection from '@/components/MovieSection'

export default function Search({params}) {
  return (
    <div className='font-serif'>
        <MovieSection query={params.searchInput} />
    </div>
  )
}

