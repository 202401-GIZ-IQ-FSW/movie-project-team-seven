import Image from 'next/image'
import React from 'react'

export default function SectionSkeleton() {
  return (
    <div>
      <p className="text-center text-[24px] font-serif border-b border-cyan-900 m-4 text-cyan-500">Loading...</p>
      <div className='m-[16px] flex flex-wrap justify-center items-center gap-6'>
        {[...Array(20)].map(()=> (
            <div key={Math.random()} className="animate-pulse bg-slate-600 h-[200px] w-[150px] flex justify-center items-center border border-cyan-900">
                <Image
                  quality={100}
                  unoptimized={true}
                  width={"100"} height={"100"}
                  className='w-full ' 
                  src="/images/Phoenix-logo.png" alt='logo'/>
            </div>
        ))}
    </div>
    </div>
   
  )
}
