import Actors from '@/components/Actors'
import SectionSkeleton from '@/components/SectionSkeleton'
import React, { Suspense } from 'react'

export default function ActorsPage() {
  return (
    <div>
      <Suspense fallback={<SectionSkeleton/>}>
        <Actors/>
      </Suspense>
      </div>
  )
}
