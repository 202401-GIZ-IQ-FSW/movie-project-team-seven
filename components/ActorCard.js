import React from 'react'
import Link from 'next/link';


export default function ActorCard({actors=[]}) {
  return (
    <>
    {actors.map(actor => (
    <Link href={`/actors/${actor.id}` } key={actor.id}>
        <div className="group hover:scale-[105%] min-w-[220px] border hover:bg-gray-900 bg-cyan-900 shadow-lg hover:shadow-cyan-400 rounded-lg overflow-hidden">
            <div className="relative h-60 w-full">
                <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className="group-hover:opacity-[0.7] h-full w-full"
                />
            </div>
            <div className="p-4">
                <h2 className="text-[18px] text-white group-hover:text-cyan-600 font-bold mb-2">{actor.name}</h2>
                <p className="text-white">{actor.known_for_department}</p>
            </div>
        </div>
    </Link>
    ))}
    </>
  )
}
