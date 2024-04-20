import React, { Suspense } from 'react'
import MovieSection from '@/components/MovieSection'
import SectionSkeleton from '@/components/SectionSkeleton'

export default function Search({params}) {
  return (
    <div className='font-serif'>
      <Suspense fallback={<SectionSkeleton/>}>
        <MovieSection query={params.searchInput} />
      </Suspense>
    </div>
  )
}

