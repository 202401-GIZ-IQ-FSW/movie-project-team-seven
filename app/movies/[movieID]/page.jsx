'use client';
import React, { useEffect, useState } from 'react'

export default function movie({params}) {
  // https://api.themoviedb.org/3/movie/movie_id?language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129
  const [movieInfo , setMovieInfo]=useState({
    genres: [
    {
      id: 18,
      name: "Loading"
    },
  ]});
  const [crew , setCrew]=useState({ director: "Loading", actors : [] }
      );
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${params.movieID}?language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
    .then(res => res.json())
    .then(data => setMovieInfo(data))
    .then(fetch(`https://api.themoviedb.org/3/movie/${params.movieID}/credits?&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
    .then (res => res.json())
    .then(data => {
      const director = data.crew.filter(crew => crew.job === "Director")[0].name;
      const actors = data.cast.slice(0,5);
      setCrew((prev) => [
        {
          ...prev,
          director: director,
          actors : [...actors]
        }
      ])
      console.log(actors)
    })
    )
  },[])
  const imagePath = "https://image.tmdb.org/t/p/original"
  const poster = imagePath + movieInfo.poster_path;
  // const backdrop = imagePath + movieInfo.poster_path;


  //     1. The movie poster
  //     2. The movie title
  //     3. Release date   release_date
  //     4. Runtime    runtime
  //     5. Movie's Language     original_language
  //     6. The movie rating and how many votes has it received   vote_average   vote_count
  //     7. Director's name
  //     8. Overview of the movie    overview
  //     9. The main 5 actors of the movies in the credit section (Use the API for this)
  //     10. A related movies section which includes at least five related movies (Use the API for this)
  //     11. A trailer section that has the movie trailer from youtube
  //     12. The movie production company name and logo.  production_companies={[{logo_path,name}]}

  return (
    <div className='w-full text-white'>
        <div className="group relative w-full flex flex-row justify-center items-center gap-2">
          {/* <img src={backdrop} alt="" className="group-hover:blur-sm sm:blur-sm z-[-1] absolute w-full h-full"/> */}
          <div className="w-[30%] m-auto">
            <img className='border w-full' src ={poster} alt={movieInfo.title}/>
          </div>
          <div className="p-2 md:p-0 flex flex-col justify-center items-center w-[40%] text-center">
            <p className="text-[16px] md:text-[20px] text-cyan-400 font-serif">{movieInfo.title}</p>
            <p className=" text-white ">{movieInfo.overview}</p>
            <p className=" text-white ">Genres: {movieInfo.genres.map(genre => genre.name).join(", ")}</p>
            <p className=" text-white ">Director: {crew.director}</p>
            {/* <p className="max-sm:hidden text-white ">Actors: {}.</p> */}
            <div className='flex'>
            </div>
          </div>
        </div>
      </div>
  )
}
