import Image from 'next/image'
import React from 'react'

export default function DetailsPageSkeleton() {
  return (
    <div className='animate-pulse w-[calc(100%-30px)] mx-auto my-8 flex justify-center items-center sm:items-start flex-col sm:flex-row gap-4 font-serif'>
        <div className='w-[80%] min-w-[250px] max-w-[350px] mx-auto md:m-4'>
            <Image
              quality={100}
              unoptimized={true}
              // priority={true}
              // loading='eager'
              width={"100"} height={"100"}
              className='w-full' 
              src="/images/Phoenix-logo.png" alt='logo'/>
        </div>
        <div className="w-full m-4 sm:max-w-[70%] sm:mx-auto grid grid-cols-3 gap-4">
            <div className="h-4 bg-slate-700 rounded col-span-3"></div>
            <div className="h-4 bg-slate-700 rounded col-span-3"></div>
            <div className="h-4 bg-slate-700 rounded col-span-2"></div>
            <div className="h-4 bg-slate-700 rounded col-span-3"></div>
            <div className="h-4 bg-slate-700 rounded col-span-2"></div>
            <div className="h-4 bg-slate-700 rounded col-span-3"></div>
            <div className="h-4 bg-slate-700 rounded"></div>
        </div>
    </div>
  )
}
