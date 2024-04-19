"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

export default function TrailerButton({ id }) {
    const router = useRouter();
    function getTrailer(){
        if(id){
            fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
              .then((res)=> res.json())
              .then((data) => {
                router.push(`https://www.youtube.com/watch?v=${data.results[0].key}`)
            })
        }
    }
  return (
    <button onClick={getTrailer} className="bg-red-700 hover:bg-red-500 border hover:border-cyan-400 text-white rounded-md p-2">Watch Trailer</button>
)
}
