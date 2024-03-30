"use client";
import React, { useEffect, useState } from "react";
import MainSlider from "@/components/MainSlider";
import MovieSection from "@/components/MovieSection";

export const cardPlaceholder = [{
 backdrop_path: "/images/Phoenix-logo.png",
 id: "placeholder",
 overview: "Fetching date, if this last too long, check your connection.",
 poster_path: "/images/placeholder-movies.png",
 title: "Loading",
}];
export default function Home() {
 
  const [sliderMovies , setSliderMovies]=useState(cardPlaceholder);

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129")
    .then(res => res.json())
    .then(data => {
      const movies = data.results.slice(0, 10);
      setSliderMovies(movies)
    })
  },[])

    return(
      <div className="w-full flex flex-col justify-center items-center gap-4 font-serif">
        <MainSlider Movies= {sliderMovies}/>
        <div className="w-full">
          <MovieSection/>
        </div>
      </div>
    )
}
