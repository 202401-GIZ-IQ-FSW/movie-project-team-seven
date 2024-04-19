import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function MovieCard({movie}) {
  
  const rate = (Math.round((movie.vote_average + Number.EPSILON) * 10) / 10);

  const imagePath = "https://image.tmdb.org/t/p/original";
  const poster = imagePath + movie.poster_path;
        return( 
          <>
            <Link href={ "/movies/" + movie.id } >
              <div className="group relative mx-[2px] h-[200px] w-[150px] flex justify-center items-end hover:items-center gap-8 hover:border-cyan-400 border border-cyan-900 overflow-hidden">
                <p className='absolute top-[-11px] right-[-30px] text-white text-[12px] m-1 pt-4 pb-1 px-6 bg-black rotate-45'><i className="fa-solid fa-star text-yellow-500 text-[12px]"></i> {rate}</p>
                <Image
                  width={"100"} height={"100"}
                  src={poster} alt="poster" 
                  className="group-hover:blur-sm group-hover:scale-[1.2] z-[-1] absolute top-0 w-full h-full transition-all ease-linear duration-300"/>
                <div className="p-2 flex justify-center items-center text-center w-full group-hover:h-full bg-[rgb(27,27,27,0.65)]">
                  <p className="text-[12px] text-cyan-400 font-serif line-clamp-1 group-hover:line-clamp-none">{movie.title}</p>
                </div>
              </div>
            </Link>
          </>
  )
}
