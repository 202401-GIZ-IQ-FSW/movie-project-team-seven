import React, { Suspense } from 'react'
import MovieSection from '@/components/MovieSection'
import SectionSkeleton from '@/components/SectionSkeleton'

export default function Genre({params}) {

  return (
    <div className='font-serif'>
      <Suspense fallback={<SectionSkeleton/>}>
        <MovieSection option={params.genreID}/>
      </Suspense>
    </div>
  )
}
