import React from 'react'
export default function SingleActorCard({actorInfo}) {

  return (
        <div className='w-[calc(100%-30px)] mx-auto my-8 flex justify-center items-start flex-col sm:flex-row gap-4'>
            <div className='w-[80%] max-w-[350px] mx-auto text-center'>
                <img
                    src={`https://image.tmdb.org/t/p/original/${actorInfo.profile_path}`}
                    alt={actorInfo.name}
                    className='w-full h-full rounded-lg border-cyan-400 border-2'
                    id='actorImage'
                />
                    <p className='mt-4'><span className='text-cyan-500'> Popularity:</span> {actorInfo.popularity}</p>
            </div>
            <div className='max-sm:m-4 sm:max-w-[70%] sm:mx-auto flex flex-col gap-4'>
                <h3 className="text-cyan-500 text-3xl md:text-3xl lg:text-6xl px-8 lg:mt-8 text-center">{actorInfo.name}</h3>
                <h4 className='text-[15px] md:text-2xl lg:text-[20px] text-center'><span className='text-cyan-500'>Birthday:</span> {actorInfo.birthday}</h4>  {/* Birth Day */}
                <p className="text-[12px] leading-loose lg:text-base lg:leading-relaxed"><span className='text-cyan-500'>Biography:</span> {actorInfo.biography}</p> {/* Biography */}
                <div className='max-sm:text-[12px]'>
                    <p><span className='text-cyan-500'> Place of birth:</span> {actorInfo.place_of_birth}</p>
                    <p><span className='text-cyan-500'> Gender:</span> {actorInfo.gender ==1? "Female" : "Male"}</p>
                </div>
            </div>
        </div>
  )
}