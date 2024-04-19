import Image from 'next/image'
import React from 'react'


export default function ActorCard({actor}) {
    const imagePlaceholder = (actor.gender == 1)? "/images/placeholder-female.png" : "/images/placeholder-male.jpeg"
  return (
        <div className="group hover:scale-[105%] h-[250px] w-[150px] hover:bg-gray-900 bg-cyan-900 shadow-sm hover:shadow-cyan-400 rounded-md overflow-hidden transition-all ease-linear duration-300">
            <div className="h-[200px] w-full">
                <Image
                    quality={100}
                    unoptimized={true}
                    // priority={true}
                    // loading='eager'
                    width={"100"} height={"100"}
                    src={actor.profile_path? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`: imagePlaceholder} alt={actor.name}
                    className="group-hover:opacity-[0.7] h-full w-full"
                />
            </div>
            <div className="my-1 mx-auto text-center">
                <h2 className="text-[14px] text-white group-hover:text-cyan-600 font-bold mb-1">{actor.name}</h2>
                <p className="text-[12px] text-white">{actor.known_for_department}</p>
            </div>
        </div>
  )
}
