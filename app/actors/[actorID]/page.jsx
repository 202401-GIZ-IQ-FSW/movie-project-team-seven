"use client";
import React, { useEffect, useState } from 'react'
import SingleActorCard from '@/components/SingleActorCard'
import CustomSlider from '@/components/CustomSlider';

export default function actore({params}) {

  const [actorInfo, setActorInfo] = useState({});
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${params.actorID}?language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
    .then(res => res.json())
      .then(data => setActorInfo(data))
    fetch(`https://api.themoviedb.org/3/person/${params.actorID}/movie_credits?language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
    .then(res => res.json())
    .then(data => setMovies(data.cast))
  },[])

  return (
    <div className='text-white'>
    <SingleActorCard actorInfo={actorInfo}/>
    <p className="text-[24px] font-serif border-b border-gray-600 m-4 text-cyan-500">Participated in:</p>
    <CustomSlider Movies={movies}/>
    </div>
  )
}
