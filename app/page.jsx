"use client";
import React, { useEffect, useState } from "react";
import MainSlider from "@/components/MainSlider";
import MoviesSliderSection from "@/components/MoviesSliderSection";
import { Moviesoptions } from "@/components/NavBar";

export const cardPlaceholder = [{
 backdrop_path: "/images/Phoenix-logo.png",
 id: "placeholder",
 overview: "Fetching date, if this last too long, check your connection.",
 poster_path: "/images/placeholder-movies.png",
 title: "Loading",
}];
export default function Home() {
  
  const today= new Date();
  const toDate = today.toLocaleDateString("default",{year: "numeric"}) + '-' + today.toLocaleDateString("default",{month: "2-digit"}) + '-' + today.toLocaleDateString("default",{day:"2-digit"});
  
  const [latestMovies, setLatestMovies]=useState([]);
  // console.log(latestMovies);
 
  const [sections, setSections]=useState(<MoviesSliderSection key='placeholder' sliderMovies={cardPlaceholder}/>);
  const [sliderMovies , setSliderMovies]=useState(cardPlaceholder);

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129")
    .then(res => res.json())
    .then(data => {
      const movies = data.results.slice(0, 10);
      setSliderMovies(movies)
    }).then (fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&sort_by=primary_release_date.desc&api_key=ba21689db16b6c3bc58c8f5c53ebd129&primary_release_date.lte=${toDate}`)
    .then(res =>  res.json())
    .then(data => {
      setLatestMovies(data.results)
    }))
    .then(
      setSections( Moviesoptions.filter(option => option.value !== "latest").map((option)=> fetch(`https://api.themoviedb.org/3/movie/${option.value}?include_adult=false&language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129`)
      .then(res =>  res.json())
      .then(data => (<MoviesSliderSection key={option.value} sliderMovies={data.results} option={option}/>)
      ))
      )
    )
  },[])
  
  debugger;
    return(
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <MainSlider Movies= {sliderMovies}/>
        {sections}
      </div>
    )
}
