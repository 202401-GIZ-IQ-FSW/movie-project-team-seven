import React, { Suspense } from 'react'
import Movies from '../movies/page'
import SectionSkeleton from '@/components/SectionSkeleton'

export default function Search() {
  return (
    <div className='font-serif'>
      <Suspense fallback={<SectionSkeleton/>}>
        <Movies/>
      </Suspense>
    </div>
  )
}
