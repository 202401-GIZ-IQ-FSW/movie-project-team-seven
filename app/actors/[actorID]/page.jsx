import SingleActorPage from '@/components/SingleActorPage'
import DetailsPageSkeleton from '@/components/DetailsPageSkeleton';
import { Suspense } from 'react';

export default function Actore({params}) {

 

  return (
    <div className='text-white font-serif'>
      <Suspense fallback={<DetailsPageSkeleton />}>
        <SingleActorPage id={params.actorID}/>
      </Suspense>
    </div>
  )
}
