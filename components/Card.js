import React from 'react'
import Link from 'next/link';

export default function Card({movie, isPlaceholder=false}) {
  
  const imagePath = isPlaceholder? "" : "https://image.tmdb.org/t/p/original";
  const poster = imagePath + movie.poster_path;
        return( 
          <Link key={movie.id} href={"/movies/" + movie.id } >
            <div className="group relative h-[300px] w-[150px] text-black text-[12px] flex justify-center items-end hover:items-center gap-8 md:hover:bg-[rgb(27,27,27,0.5)] border hover:border-cyan-400">
              <img src={poster} alt="poster" className="group-hover:blur-sm z-[-1] absolute top-0 w-full h-full"/>
              <div className="min-h-[25%] p-2 flex justify-center items-center text-center w-full group-hover:h-full bg-[rgb(27,27,27,0.65)]">
                <p className="text-[12px] md:text-[16px] text-cyan-400 font-serif">{movie.title}</p>
              </div>
            </div>
          </Link>
  )
}
