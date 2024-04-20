import ActorCard from '@/components/ActorCard';
import CustomSlider from '@/components/CustomSlider';
import DetailsPageSkeleton from '@/components/DetailsPageSkeleton';
import TrailerButton from '@/components/TrailerButton';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Movie({params}) {

    const movieInfo= await fetch(`https://api.themoviedb.org/3/movie/${params.movieID}?append_to_response=credits,similar,videos&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
    .then(res => res.json())
  const director = movieInfo.credits.crew.filter(crew => crew.job == "Director")[0]?.name;
  const actors = movieInfo.credits.cast.slice(0,5);
  const similarMovies = movieInfo.similar.results.filter(movie => movie.adult === false);
  const videoKey = movieInfo.videos.results[0] ? movieInfo.videos.results[0].key : null;
  console.log(videoKey)

  const imagePath = "https://image.tmdb.org/t/p/original"
  const poster = movieInfo.poster_path? imagePath + movieInfo.poster_path : "/images/placeholder-movies.png";
  const backdrop = movieInfo.backdrop_path? imagePath + movieInfo.backdrop_path: null;  

  const releaseDate = movieInfo.release_date.slice(0,4);
  const rate = (Math.round((movieInfo.vote_average + Number.EPSILON) * 10) / 10);
  let hours=0;
  let minutes=movieInfo.runtime;
  while(minutes >= 60){
    hours++;
    minutes-=60;
  }
  const actorCards = actors.map(actor => (
    <Link href={`/actors/${actor.id}`} key={actor.id}>
        <ActorCard actor={actor}/>
  </Link>))

  return (
    <Suspense fallback={<DetailsPageSkeleton/>}>
      <div className='flex flex-col justify-center items-center font-serif'>
        <div className='relative text-white w-[calc(100%-30px)] mx-auto my-8 flex justify-center items-start flex-col sm:flex-row gap-4'>
          {backdrop?
            <Image 
              src={backdrop} width={"100"} height={"100"}
              alt={movieInfo.title} 
              className="blur-sm z-[-1] absolute w-full top-0 opacity-50 h-full"/>
              : ""
          }
          <div className='w-[80%] min-w-[250px] max-w-[350px] mx-auto md:m-4 rounded-lg border-cyan-400 border-2 overflow-hidden'>
            <Image
            quality={100}
            unoptimized={true}
            width={"100"} height={"100"}
            className='border w-full' src={poster} alt={movieInfo.title}/>
          </div>
          <div className="m-4 sm:max-w-[70%] sm:mx-auto flex flex-col gap-4">
            <h3 className="text-cyan-500 text-3xl md:text-3xl lg:text-5xl px-8 lg:mt-8 text-center font-serif">{movieInfo.title}</h3>
            <p className="text-gray-400 text-sm flex justify-center gap-2 ">
              <span className="flex gap-1 items-center"><i className="fa-solid fa-star text-yellow-500 text-[12px]"></i>{rate}</span>|<span>{releaseDate}</span>|<span>{hours}h {minutes}m</span>|<span> {movieInfo.original_language.toUpperCase()} </span>
            </p>
            <p className='border-b border-cyan-700 py-4 md:text-[18px]'><span className='text-cyan-500'>Overview:</span> {movieInfo.overview? movieInfo.overview : "N/A"}</p>
            <p><span className='text-cyan-500'>Genres:</span> {(movieInfo.genres.length>0)? movieInfo.genres.map(genre => genre.name).join(", ") : 'N/A'}</p>
            <p><span className='text-cyan-500'>Director:</span> {director? director : 'N/A'}</p>
            <p><span className='text-cyan-500'>Votes:</span> {movieInfo.vote_count}</p>
            <div><span className='text-cyan-500'>Production Companies: </span> 
                <div className='flex flex-wrap gap-2'>
                  { (movieInfo.production_companies.length > 0)? movieInfo.production_companies.map(company => {
                    return (
                      <div key={company.id} className='flex items-center gap-1'>
                      {company.logo_path?
                      <Image 
                      width={"100"} height={"100"}
                      src={imagePath + company.logo_path} alt={company.name}
                      className='w-[30px] max-h-[30px] bg-white bg-opacity-[0.5]'/> 
                      : ""
                      }
                      <p> {company.name} </p> 
                    </div>)
                    })
                    : "N/A"
                  } 
                </div>
            </div>
            <div>
            <TrailerButton videoKey={videoKey}/>
            </div>
        </div>
        </div>
          <div className="w-full mx-auto text-left">
            <p className="text-[24px] font-serif border-b border-cyan-900 m-4 text-cyan-500">Main Actors:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {actorCards.length > 0? actorCards: <p className='text-cyan-400 m-4'>No actors provided from the API</p>}
            </div>
            <div className='my-4'>
            <p className="text-[24px] font-serif border-b border-cyan-900 m-4 text-cyan-500">Similar Movies:</p>
            {(similarMovies.length > 0)? <CustomSlider Movies={similarMovies}/> : <p className='text-cyan-400 m-8 text-center'>No similar movies provided from the API</p>}
            </div>
          </div>
      </div>
    </Suspense>
  )
}
