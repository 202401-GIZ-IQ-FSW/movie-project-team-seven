"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const API_URL = 'https://api.themoviedb.org/3/trending/person/week?language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129';

const ActorsPage = () => {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setActors(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchActors();
  }, []);

  return (
    <div className="container  mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4 py-4 text-cyan-400 border-b border-cyan-900">Trending Actors</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {actors.map(actor => (
          <Link href={`/actors/${actor.id}`}>
          <div key={actor.id} className="group hover:scale-[105%] w-[220px] hover:bg-gray-900 bg-cyan-900 shadow-lg shadow-white hover:shadow-cyan-400 rounded-lg overflow-hidden">
            <div className="relative h-60 w-full">
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className="group-hover:opacity-[0.7] h-full w-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-white group-hover:text-cyan-600 font-bold mb-2">{actor.name}</h2>
              <p className="text-white">{actor.known_for_department}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ActorsPage;


// <div className="group relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] mx-[9px] w-[calc(100%-10px)] text-black text-[12px] flex justify-center items-end hover:items-center gap-8 md:hover:bg-[rgb(27,27,27,0.5)] hover:border border-cyan-400">
//               <img src={(movie.id === cardPlaceholder.id)? require(movie.backdrop_path) :'https://image.tmdb.org/t/p/original' + movie.poster_path} alt="" className="group-hover:blur-sm z-[-1] absolute top-0 w-full h-full"/>
//               <div className="min-h-[50%] p-2 flex justify-center items-center text-center w-full group-hover:h-full bg-[rgb(27,27,27,0.65)]">
//                 <p className="text-[12px] md:text-[20px] text-cyan-400 font-serif">{movie.title}</p>
//               </div>
//             </div>