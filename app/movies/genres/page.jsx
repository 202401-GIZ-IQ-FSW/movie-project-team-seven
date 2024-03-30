'use client';
import React, { useEffect, useState } from 'react';
import MoviesSliderSection from "@/components/MoviesSliderSection";
import { cardPlaceholder } from '@/app/page';
import { Moviesoptions } from "@/components/NavBar";


export default function Genres() {
  const [sections, setSections]=useState(<MoviesSliderSection key='placeholder' sliderMovies={cardPlaceholder} isPlaceholder={true}/>);
  useEffect(() =>{
    setSections( Moviesoptions.filter(option => option.value !== "latest").map((option)=> fetch(`https://api.themoviedb.org/3/movie/${option.value}?include_adult=false&language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
    .then(res =>  res.json())
    .then(data => (<MoviesSliderSection key={option.value} sliderMovies={data.results} option={option}/>)
    ))
    )
     },[])


  return (
  <div className='w-full flex flex-col justify-center items-center'>
  {sections}
  </div>
    )
}