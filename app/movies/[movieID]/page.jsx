'use client';
import React, { useEffect, useState } from 'react'
import ActorCard from '@/components/ActorCard';
import CustomSlider from '@/components/CustomSlider';
import { useRouter } from 'next/navigation';

export default function Movie({params}) {

  const router = useRouter();
  async function getTrailer(id){
    fetch(`https://api.themoviedb.org/3/movie/${params.movieID}/videos?api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
      .then((res)=> res.json())
      .then((data) => {
        router.push(`https://www.youtube.com/watch?v=${data.results[0].key}`)
      })
  }

  const [movieInfo , setMovieInfo]=useState({
    genres: [
    {
      id: 18,
      name: "Loading"
    },
  ],
  production_companies:  [{name:""}],
});
  const [crew , setCrew]=useState({ director: "Loading", actors : [] });
  const [similarMovies , setSimilarMovies]=useState([]);
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${params.movieID}?language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
    .then(res => res.json())
    .then(data => setMovieInfo(data))
    .then(fetch(`https://api.themoviedb.org/3/movie/${params.movieID}/credits?&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
    .then (res => res.json())
    .then(data => {
      const director = data.crew.filter(crew => crew.job === "Director")[0].name;
      const actors = data.cast.slice(0,5);
      setCrew({ director: director, actors: [...actors] })
    })).then(fetch(`https://api.themoviedb.org/3/movie/${params.movieID}/similar?language=en-US&page=1&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
    .then(res => res.json())
    .then(data => setSimilarMovies(data.results)))
  },[])


  const imagePath = "https://image.tmdb.org/t/p/original"
  const poster = imagePath + movieInfo.poster_path;
  const backdrop = imagePath + movieInfo.backdrop_path;  

  let hours=0;
  let minutes=movieInfo.runtime;
  while(minutes >= 60){
    hours++;
    minutes-=60;
  }
  return (
    <div className='flex flex-col justify-center items-center font-serif'>
      <div className='relative text-white w-[calc(100%-30px)] mx-auto my-8 flex justify-center items-start flex-col sm:flex-row gap-4 font-serif'>
        <img src={backdrop} alt={movieInfo.title} className="blur-sm z-[-1] absolute w-full top-0 opacity-50 h-full"/>
        <div className='w-[80%] min-w-[250px] max-w-[350px] mx-auto md:m-4 rounded-lg border-cyan-400 border-2 overflow-hidden'>
          <img className='border w-full' src ={poster} alt={movieInfo.title}/>
        </div>
        <div className="m-4 sm:max-w-[70%] sm:mx-auto flex flex-col gap-4">
          <h3 className="text-cyan-500 text-3xl md:text-3xl lg:text-5xl px-8 lg:mt-8 text-center font-serif">{movieInfo.title}</h3>
          <p className='border-b border-cyan-700 py-4 text-[20px]'><span className='text-cyan-500'>Overview:</span> {movieInfo.overview}</p>
          <p><span className='text-cyan-500'>Genres:</span> {movieInfo.genres.map(genre => genre.name).join(", ")}</p>
          <p><span className='text-cyan-500'>Director:</span> {crew.director}</p>
          <p><span className='text-cyan-500'>Released Date:</span> {movieInfo.release_date}</p>
          <p><span className='text-cyan-500'>Movie Language:</span> {movieInfo.original_language}</p>
          <p><span className='text-cyan-500'>Runtime:</span> {hours}h {minutes}m</p>
          <p><span className='text-cyan-500'>Rate:</span> {movieInfo.vote_average} <i className="fa-solid fa-star text-yellow-300 text-[12px]"></i></p>
          <p><span className='text-cyan-500'>Votes:</span> {movieInfo.vote_count}</p>
          <button onClick={() => getTrailer(movie.id)} className="w-fit bg-red-700 hover:bg-red-500 border border-white hover:border-cyan-400 text-white rounded-md p-2 ">Watch Trailer</button>
          <div><span className='text-cyan-500'>Production Companies: </span> 
              <div className='flex flex-wrap gap-2'>
                { movieInfo.production_companies.map(company => {
                  return (<div key={company.id} className='flex items-center gap-1'><img src={imagePath + company.logo_path} className='w-[30px] max-h-[30px] bg-white bg-opacity-[0.5]'/> <p> {company.name} </p> </div>)
                  })} 
              </div>
          </div>

          <div className='flex'>
          </div>
      </div>
      </div>
        <div className="w-full mx-auto text-left">
          <h1 className="text-3xl font-bold pl-4 mb-4 py-4 text-cyan-400 border-b border-cyan-900">Main Actors</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <ActorCard actors={crew.actors} />
          </div>
          <div className='my-4'>
          <h1 className="text-3xl font-bold pl-4 mb-4 py-4 text-cyan-400 border-b border-cyan-900">Similar Movies</h1>
          <CustomSlider Movies={similarMovies}/>
          </div>
        </div>
    </div>
  )
}
